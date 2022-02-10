import { useCallback, useEffect, useRef, useState } from 'react';
import { PageWrapper } from './Spotted.styles';
import Question from 'components/organisms/Question/Question';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import axios, { AxiosResponse } from 'axios';
import { getJWT } from 'helpers/jwt';
import { baseBody, multiResponse } from 'types/strapi';

const Spotted = () => {
  const [posts, setPosts] = useState<baseBody<{ message: string; publishedAt: string }>[]>([]);
  const [page, setPage] = useState<{ actual: number; total: number }>({ actual: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const user = useSelector((state: storeRoot) => state.user);

  const fetchPosts = async (page = 1) => {
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/spotteds?filters[schoolId][$eq]=${
      user?.schoolId || null
    }&fields[0]=publishedAt&fields[1]=message&pagination[page]=${page}&pagination[pageSize]=3`;
    const response: AxiosResponse<multiResponse<{ message: string; publishedAt: string }>> = await axios.get(url, {
      headers: { Authorization: `Bearer ${getJWT()}` }
    });
    return response;
  };

  useEffect(() => {
    fetchPosts().then((res) => {
      if (res.data.data.length > 0 && user?.schoolId) {
        setPosts(res.data.data);
        setPage({ actual: res.data.meta.pagination.page, total: res.data.meta.pagination.total });
      }
    });
  }, [user?.schoolId]);

  const getMorePosts = useCallback(() => {
    if (!page || page.actual === page.total || isLoading) return;
    setIsLoading(true);
    fetchPosts(page.actual + 1).then((res) => {
      setPosts((prev) => [...prev, ...res.data.data]);
      setPage({ actual: res.data.meta.pagination.page, total: res.data.meta.pagination.total });
      setIsLoading(false);
    });
  }, [isLoading, page]);

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
      <AskQuestionInput />
      {posts.length > 0 &&
        posts.map(({ id, attributes: { message, publishedAt } }, i) => {
          if (i === posts.length - 1) {
            return (
              <Question key={id} isSpotted={true} date={publishedAt} content={message} numberOfComments={0} numberOfHearts={0} ref={lastItemRef} />
            );
          }
          return <Question key={id} isSpotted={true} date={publishedAt} content={message} numberOfComments={0} numberOfHearts={0} />;
        })}
    </PageWrapper>
  );
};

export default Spotted;
