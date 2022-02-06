import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import Question from 'components/organisms/Question/Question';
import styled from 'styled-components';
import Comment from 'components/organisms/Comment/Comment';

const mockData = [
  {
    date: '24.04.2022',
    content: 'Czy karny Błaszczykowskiego zostanie powtórzony?',
    numberOfComments: 4,
    numberOfHearts: 8
  }
];

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const SpottedComment = () => {
  return (
    <UserTemplate>
      <SectionWrapper>
        {mockData.map(({ date, content, numberOfHearts, numberOfComments }) => (
          <Question key={date} date={date} isSpotted={false} content={content} numberOfComments={numberOfComments} numberOfHearts={numberOfHearts} />
        ))}
        <Comment />
        <Comment />
        <Comment />
      </SectionWrapper>
    </UserTemplate>
  );
};

export default SpottedComment;
