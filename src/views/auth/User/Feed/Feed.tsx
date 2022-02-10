import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import styled from 'styled-components';
import FeedInput from 'components/molecules/FeedInput/FeedInput';
import Post from 'components/organisms/Post/Post';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const posts = [
  {
    id: '2',
    date: '12.05.2012',
    content: 'Lorem ipsum dolor sit amet, consectetur adipis',
    numberOfHearts: 12,
    numberOfComments: 4,
    userName: 'Marita Deynn',
    userProfilePicture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.wpimg.pl%2F1861132436-573487822%2Fkuba-wojewodzki.jpg&f=1&nofb=1'
  },
  {
    id: '2',
    date: '12.05.2012',
    content: 'Lorem ipsum dolor sit amet, consectetur adipis',
    numberOfHearts: 12,
    numberOfComments: 4,
    userName: 'Daniel Majewski',
    userProfilePicture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-IJqkXiJA0qg%2FWGJXo1GjESI%2FAAAAAAAABjA%2F6cpPNqAGQ_sxcWWtsMMOKufRije7Jh_BgCLcB%2Fs1600%2F15179001_1133562156679714_3959263731698865475_n.jpg&f=1&nofb=1'
  }
];

const Feed = () => (
  <UserTemplate>
    <PageWrapper>
      <FeedInput />
      {posts.map((post) => (
        <Post
          key={post.id}
          isSpottedPost={false}
          date={post.date}
          content={post.content}
          numberOfComments={post.numberOfComments}
          numberOfHearts={post.numberOfHearts}
          // userProfilePicture={post.userProfilePicture}
          // userName={post.userName}
        />
      ))}
    </PageWrapper>
  </UserTemplate>
);

export default Feed;
