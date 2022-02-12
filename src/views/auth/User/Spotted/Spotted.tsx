import { useCallback, useEffect, useRef, useState } from 'react';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { PageWrapper } from './Spotted.styles';
import Post from 'components/organisms/Post/Post';
import SpottedInput from 'components/molecules/SpottedInput/SpottedInput';
import data from './posts.json';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as paginate from 'paginatejson';

const fetchPosts = (page = 1) => {
  const { items, ...pageInfo } = paginate.paginate(data, page, 3);
  return new Promise((resolve) => setTimeout(() => resolve({ items, pageInfo }), 500));
};

const Spotted = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const lastItemRef = useRef<any>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    fetchPosts().then((res: any | never) => {
      setPosts(res.items);
      setPage(res.pageInfo);
    });
  }, []);

  const getMorePosts = useCallback(() => {
    if (!page || !page.next || isLoading) return;
    setIsLoading(true);
    fetchPosts(page.next).then((res: any) => {
      setPosts((prev) => [...prev, ...res.items]);
      setPage(res.pageInfo);
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
    <UserTemplate>
      <PageWrapper>
        <SpottedInput />
        {posts.map((post, i) => {
          if (i === posts.length - 1) {
            return (
              <Post
                key={post.id}
                isPublic={false}
                date={post.date}
                content={post.content}
                numberOfComments={post.numberOfComments}
                numberOfHearts={post.numberOfHearts}
                ref={lastItemRef}
              />
            );
          }
          return (
            <Post
              key={post.id}
              isPublic={false}
              date={post.date}
              content={post.content}
              numberOfComments={post.numberOfComments}
              numberOfHearts={post.numberOfHearts}
            />
          );
        })}
      </PageWrapper>
    </UserTemplate>
  );
};

export default Spotted;
