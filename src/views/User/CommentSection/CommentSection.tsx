import { useParams } from 'react-router';
import { storeRoot, useGetPostCommentsQuery, useGetSpottedCommentsQuery } from 'store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Comment from 'components/organisms/Comment/Comment';
import Loading from 'components/molecules/Loading/Loading';
import { theme } from 'assets/styles/theme';
import Post from 'components/organisms/Post/Post';
import ReloadWidget from 'components/atoms/ReloadWidget/ReloadWidget';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CommentSection = () => {
  const { commentsId } = useParams();
  const user = useSelector((state: storeRoot) => state.user);
  const url = window.location.pathname;
  const isSpotted = url.includes('/spotted');
  const spottedComments = useGetSpottedCommentsQuery(
    {
      schoolId: user?.schoolId || null,
      spottedId: commentsId || null
    },
    {
      skip: !isSpotted
    }
  );
  const postComments = useGetPostCommentsQuery(
    {
      schoolId: user?.schoolId || null,
      postId: commentsId || null
    },
    {
      skip: isSpotted
    }
  );

  if (spottedComments.isLoading || postComments.isLoading || (!postComments.data?.data && !spottedComments.data?.data))
    return (
      <div style={{ position: 'relative', height: '65vh' }}>
        <Loading bgColor={theme.colors.lightBrown} />
      </div>
    );

  const {
    id,
    attributes: {
      createdAt,
      message,
      comments: { data: commentsArray },
      likes: { data: likes },
      ...rest
    }
  } = spottedComments.data?.data[0] ||
    postComments.data?.data[0] || {
      id: 0,
      attributes: {
        createdAt: new Date().toDateString(),
        message: '',
        comments: { data: [] },
        likes: {
          data: {
            id: 0,
            attributes: {
              likes: 0,
              userIds: []
            }
          }
        },
        author: {
          data: {
            attributes: {}
          }
        }
      }
    };

  return (
    <SectionWrapper>
      <Post
        key={id}
        qId={parseInt(commentsId || '0')}
        date={createdAt}
        isComment={true}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        postOwner={!isSpotted && rest?.author.data ? rest.author.data.attributes : null}
        isSpotted={isSpotted}
        content={message}
        comments={commentsArray.length}
        likes={likes}
      />
      {commentsArray.length > 0 ? (
        commentsArray.map(({ id, attributes: { author, message, createdAt } }) => {
          if (!author || !author.data) return;
          return (
            <Comment
              key={id}
              uId={author.data.id}
              cId={id}
              isSpotted={isSpotted}
              profilePicture={author.data.attributes.avatar}
              name={`${author.data.attributes.first_name} ${author.data.attributes.last_name}`}
              date={createdAt}
              content={message}
              numberOfHearts={0}
            />
          );
        })
      ) : (
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', opacity: 0.8 }}>
          Nikt jeszcze nie skomentował tego posta. <br /> Bądź pierwszy!
        </p>
      )}
      <ReloadWidget />
    </SectionWrapper>
  );
};

export default CommentSection;
