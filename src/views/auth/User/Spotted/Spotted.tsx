import { useCallback, useEffect, useRef, useState } from 'react';
import { Info, PageWrapper } from './Spotted.styles';
import Question from 'components/organisms/Question/Question';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';
import { useSelector } from 'react-redux';
import { storeRoot, useGetProposalsQuery } from 'store';
import axios, { AxiosResponse } from 'axios';
import { getJWT } from 'helpers/jwt';
import { baseBody, multiResponse, multiResponseWithoutPagination } from 'types/strapi';
import InfiniteScrollLoading from 'components/atoms/InfiniteScrollLoading/InfiniteScrollLoading';
import Proposal from 'components/organisms/Proposal/Proposal';
import SpottedSection from 'components/molecules/SpottedSection/SpottedSection';

const Spotted = () => {
  const [posts, setPosts] = useState<baseBody<{ message: string; createdAt: string; spotted_comments: multiResponseWithoutPagination }>[]>([]);
  const [page, setPage] = useState<{ actual: number; total: number }>({ actual: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoading, setFirstLoading] = useState(true);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const user = useSelector((state: storeRoot) => state.user);
  const proposals = useGetProposalsQuery({
    schoolId: user?.schoolId || null
  });

  const fetchPosts = async (page = 1) => {
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/spotteds?filters[schoolId][$eq]=${
      user?.schoolId || null
    }&fields[0]=createdAt&fields[1]=message&pagination[page]=${page}&pagination[pageSize]=3&sort[0]=createdAt:desc&populate[spotted_comments][fields]=id`;
    const response: AxiosResponse<multiResponse<{ message: string; createdAt: string; spotted_comments: multiResponseWithoutPagination }>> =
      await axios.get(url, {
        headers: { Authorization: `Bearer ${getJWT()}` }
      });
    return response;
  };

  useEffect(() => {
    fetchPosts().then((res) => {
      if (res.data.data.length > 0 && user?.schoolId) {
        setPosts(res.data.data);
        setPage({ actual: res.data.meta.pagination.page, total: res.data.meta.pagination.pageCount });
        setFirstLoading(false);
      }
    });
  }, [user?.schoolId]);

  const getMorePosts = useCallback(() => {
    if (!page || page.actual === page.total || isLoading) return;
    setIsLoading(true);
    fetchPosts(page.actual + 1).then((res) => {
      setPosts((prev) => [...prev, ...res.data.data]);
      setPage({ actual: res.data.meta.pagination.page, total: res.data.meta.pagination.pageCount });
      setIsLoading(false);
    });
  }, [isLoading, page]);

  const resetSpotted = () => {
    setPosts([]);
    setFirstLoading(true);
    fetchPosts().then((res) => {
      if (res.data.data.length > 0 && user?.schoolId) {
        setPosts(res.data.data);
        setPage({ actual: res.data.meta.pagination.page, total: res.data.meta.pagination.pageCount });
        setFirstLoading(false);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getMorePosts();
        }
      },
      {
        root: document,
        threshold: 1
      }
    );

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [getMorePosts, lastItemRef]);

  return (
    <PageWrapper>
      <AskQuestionInput resetSpotted={resetSpotted} />
      {isLoading && <InfiniteScrollLoading />}
      {proposals.isLoading && <Info style={{ marginBottom: '1rem' }}>Wczytywanie propozycji...</Info>}
      {user?.TextRole === 'Moderator' && proposals.data?.data ? (
        <SpottedSection
          title={
            <>
              Propozycje <span>nowych postów</span>
            </>
          }
        >
          {proposals.data?.data.length > 0 ? (
            proposals.data.data.map(({ id, attributes: { message } }) => (
              <Proposal key={id} qId={id} question={message} resetSpotted={resetSpotted} />
            ))
          ) : (
            <Info style={{ paddingBlock: '5rem' }}>Brak propozycji!</Info>
          )}
        </SpottedSection>
      ) : null}
      {isFirstLoading ? <Info>Ładowanie spotted...</Info> : posts.length <= 0 ? <Info>Jeszcze nikt nic nie napisał, bądź pierwszy!</Info> : null}
      {posts.length > 0 &&
        posts.map(({ id, attributes: { message, createdAt, spotted_comments } }, i) => {
          if (i === posts.length - 1) {
            return (
              <Question
                key={id}
                isSpotted={true}
                date={createdAt}
                content={message}
                qId={id}
                numberOfComments={spotted_comments.data.length}
                numberOfHearts={0}
                resetSpotted={resetSpotted}
                ref={lastItemRef}
              />
            );
          }
          return (
            <Question
              key={id}
              qId={id}
              isSpotted={true}
              date={createdAt}
              content={message}
              numberOfComments={spotted_comments.data.length}
              numberOfHearts={0}
              resetSpotted={resetSpotted}
            />
          );
        })}
    </PageWrapper>
  );
};

export default Spotted;
