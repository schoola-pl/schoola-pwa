import { useState, useEffect, useRef, useCallback } from 'react';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { PageWrapper } from './Spotted.styles';
import Question from 'components/organisms/Question/Question';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';
import data from './posts.json';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as paginate from 'paginatejson';

const fetchPosts = (page = 1) => {
  const { items, ...pageInfo } = paginate.paginate(data, page, 1);
  return new Promise((resolve) => setTimeout(() => resolve({ items, page: pageInfo }), 100));
};

const Spotted = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const lastItemRef = useRef(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    fetchPosts().then((res: any | never) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setPosts([...res.items], setPage(res.page));
    });
  }, []);

  const getMorePosts = useCallback(() => {
    if (!page || !page.next || isLoading) return;
    setIsLoading(true);
    fetchPosts(page.next).then((res: any) => {
      setPosts((i) => [...i, ...res.posts]);
      setPage(res.page);
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      observer.current.disconnect();
    };
  }, [getMorePosts]);
  return (
    <UserTemplate>
      <PageWrapper>
        <AskQuestionInput />
        <button onClick={getMorePosts}>Load</button>
        {posts.map((post, i) => {
          if (i === posts.length - 1) {
            return (
              <Question
                key={post.date}
                isSpotted={true}
                date={post.date}
                content={post.content}
                numberOfComments={post.numberOfComments}
                numberOfHearts={post.numberOfHearts}
                ref={lastItemRef}
              />
            );
          }
          return (
            <Question
              key={post.date}
              isSpotted={true}
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
