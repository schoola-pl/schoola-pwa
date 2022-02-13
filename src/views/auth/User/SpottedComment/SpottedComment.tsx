import Question from 'components/organisms/Question/Question';
import { useParams } from 'react-router';
import { storeRoot, useGetCommentsQuery } from 'store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Comment from 'components/organisms/Comment/Comment';
import Loading from 'components/molecules/Loading/Loading';
import { theme } from 'assets/styles/theme';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SpottedComment = () => {
  const { spottedId } = useParams();
  const user = useSelector((state: storeRoot) => state.user);
  const comments = useGetCommentsQuery({
    schoolId: user?.schoolId || null,
    spottedId: spottedId || null
  });

  if (comments.isLoading || !comments.data?.data)
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
      spotted_comments: { data: commentsArray }
    }
  } = comments.data?.data[0];

  return (
    <SectionWrapper>
      <Question
        key={id}
        qId={parseInt(spottedId || '0')}
        date={createdAt}
        isSpotted={false}
        content={message}
        numberOfComments={commentsArray.length}
        numberOfHearts={0}
      />
      {commentsArray.map(({ id, attributes: { author_name, message, createdAt, avatar } }) => (
        <Comment key={id} profilePicture={avatar || ''} name={author_name} date={createdAt} content={message} numberOfHearts={0} />
      ))}
    </SectionWrapper>
  );
};

export default SpottedComment;