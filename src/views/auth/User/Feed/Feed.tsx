import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import styled from 'styled-components';
import FeedInput from 'components/molecules/FeedInput/FeedInput';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const Feed = () => (
  <UserTemplate>
    <PageWrapper>
      <FeedInput />
    </PageWrapper>
  </UserTemplate>
);

export default Feed;
