import { useCallback, useEffect, useRef, useState } from 'react';
import { PageWrapper } from './Feed.styles';
import FeedInput from 'components/molecules/FeedInput/FeedInput';
import Post from 'components/organisms/Post/Post';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as paginate from 'paginatejson';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import axios, { AxiosResponse } from 'axios';
import { baseBody, multiResponse, oneResponse } from 'types/strapi';
import { getJWT } from 'helpers/jwt';
import { authUser } from 'types/auth';
import InfiniteScrollLoading from 'components/atoms/InfiniteScrollLoading/InfiniteScrollLoading';
import { Info } from 'views/auth/User/Spotted/Spotted.styles';

const Feed = () => {
  const [posts, setPosts] = useState<
    baseBody<{
      message: string;
      createdAt: string;
      author: { data: { attributes: authUser } };
      comments: { data: { id: number; attributes: { message: string; author: { data: { attributes: authUser } }; createdAt: string } }[] };
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
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/posts?filters[schoolId][$eq]=${
      user?.schoolId || null
    }&fields[0]=createdAt&fields[1]=message&pagination[page]=${page}&pagination[pageSize]=3&sort[0]=createdAt:desc&populate[comments][fields]=id&populate[likes][populate]=userIds&populate[author][fields]=*`;
    const response: AxiosResponse<
      multiResponse<{
        message: string;
        createdAt: string;
        author: { data: { attributes: authUser } };
        comments: { data: { id: number; attributes: { message: string; author: { data: { attributes: authUser } }; createdAt: string } }[] };
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

  const resetFeed = () => {
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
      <FeedInput resetFeed={resetFeed} />
      {isLoading && <InfiniteScrollLoading />}
      {isFirstLoading ? <Info>Ładowanie tablicy...</Info> : posts.length <= 0 ? <Info>Jeszcze nikt nic nie napisał, bądź pierwszy!</Info> : null}
      {posts.length > 0 &&
        posts.map(({ id, attributes: { likes, author, comments, message, createdAt } }, i) => {
          if (!author || !author.data) return;
          if (i === posts.length - 1) {
            return (
              <Post
                qId={id}
                key={id}
                isSpotted={false}
                isComment={false}
                postOwner={author.data.attributes}
                date={createdAt}
                content={message}
                comments={comments.data.length}
                likes={likes.data}
                resetFn={resetFeed}
                ref={lastItemRef}
              />
            );
          }
          return (
            <Post
              qId={id}
              key={id}
              isSpotted={false}
              isComment={false}
              postOwner={author.data.attributes}
              date={createdAt}
              content={message}
              comments={comments.data.length}
              likes={likes.data}
              resetFn={resetFeed}
            />
          );
        })}
    </PageWrapper>
  );
};

export default Feed;
