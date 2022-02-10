import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import Post from 'components/organisms/Post/Post';
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
  overflow: scroll !important;
`;

const commentData = [
  {
    profilePicture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fvladimir-putin-6.jpg&f=1&nofb=1',
    name: 'Władimir Putin',
    date: '12.05.2012',
    content: 'Idę po was',
    numberOfHearts: 3
  },
  {
    profilePicture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa1%2F8a%2Fef%2Fa18aefbb385e8a4d755d2885fa2d2cc2.jpg&f=1&nofb=1',
    name: 'Ryszard Riedel',
    date: '12.05.2012',
    content: 'Lubię motocykle, muzykę i heroinę',
    numberOfHearts: 3
  }
];

const CommentSection = () => {
  return (
    <UserTemplate>
      <SectionWrapper>
        {mockData.map(({ date, content, numberOfHearts, numberOfComments }) => (
          <Post
            key={date}
            date={date}
            isSpottedPost={true}
            commentSection={true}
            content={content}
            numberOfComments={numberOfComments}
            numberOfHearts={numberOfHearts}
          />
        ))}
        {commentData.map(({ profilePicture, name, date, content, numberOfHearts }) => (
          <Comment profilePicture={profilePicture} name={name} date={date} content={content} numberOfHearts={numberOfHearts} />
        ))}
      </SectionWrapper>
    </UserTemplate>
  );
};

export default CommentSection;
