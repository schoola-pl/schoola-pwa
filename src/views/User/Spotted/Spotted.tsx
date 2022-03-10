import { useCallback, useEffect, useRef, useState } from 'react';
import { PageWrapper } from './Spotted.styles';
import Info from 'components/atoms/Info/Info';
import Post from 'components/organisms/Post/Post';
import SpottedInput from 'components/molecules/SpottedInput/SpottedInput';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import axios, { AxiosResponse } from 'axios';
import { getJWT } from 'helpers/jwt';
import { baseBody, multiResponse, multiResponseWithoutPagination, oneResponse } from 'types/strapi';
import InfiniteScrollLoading from 'components/atoms/InfiniteScrollLoading/InfiniteScrollLoading';

const Spotted = () => {
  const [posts, setPosts] = useState<
    baseBody<{
      message: string;
      createdAt: string;
      comments: multiResponseWithoutPagination;
      likes: oneResponse<{ likes: number; userIds: { id: number; userId: string }[] }>;
    }>[]
  >([]);
  const [page, setPage] = useState<{ actual: number; total: number }>({ actual: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoading, setFirstLoading] = useState(true);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const user = useSelector((state: storeRoot) => state.user);

  const fetchPosts = async (page = 1) => {
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/spotteds?filters[schoolId][$eq]=${
      user?.schoolId || null
    }&fields[0]=createdAt&fields[1]=message&pagination[page]=${page}&pagination[pageSize]=3&sort[0]=createdAt:desc&populate[comments][fields]=id&populate[likes][populate]=userIds`;
    const response: AxiosResponse<
      multiResponse<{
        message: string;
        createdAt: string;
        comments: multiResponseWithoutPagination;
        likes: oneResponse<{ likes: number; userIds: { id: number; userId: string }[] }>;
      }>
    > = await axios.get(url, {
      headers: { Authorization: `Bearer ${getJWT()}` }
    });
    return response;
  };

  useEffect(() => {
    fetchPosts().then((res) => {
      if (res.data.data.length > 0 && user?.schoolId) {
        setPosts(res.data.data);
        setPage({ actual: res.data.meta.pagination.page, total: res.data.meta.pagination.pageCount });
      }
      setFirstLoading(false);
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
      }
      setFirstLoading(false);
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
      <SpottedInput resetSpotted={resetSpotted} />
      {isLoading && <InfiniteScrollLoading />}
      {isFirstLoading ? <Info>Ładowanie spotted...</Info> : posts.length <= 0 ? <Info>Jeszcze nikt nic nie napisał, bądź pierwszy!</Info> : null}
      {posts.length > 0 &&
        posts.map(
          (
            {
              id,
              attributes: {
                message,
                createdAt,
                comments,
                likes: { data: likes }
              }
            },
            i
          ) => {
            if (i === posts.length - 1) {
              return (
                <Post
                  key={id}
                  isComment={false}
                  isSpotted={true}
                  date={createdAt}
                  content={message}
                  qId={id}
                  comments={comments.data.length}
                  likes={likes}
                  resetFn={resetSpotted}
                  ref={lastItemRef}
                />
              );
            }
            return (
              <Post
                key={id}
                qId={id}
                isComment={false}
                isSpotted={true}
                date={createdAt}
                content={message}
                comments={comments.data.length}
                likes={likes}
                resetFn={resetSpotted}
              />
            );
          }
        )}
    </PageWrapper>
  );
};

export default Spotted;
