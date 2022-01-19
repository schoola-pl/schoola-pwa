import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';

const Post = styled.div`
  height: 20rem;
  width: 98%;
  margin-left: -1rem;
  background-color: white;
  border-radius: 2rem;
  margin-top: 2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  margin-right: 2rem;
  width: 98%;
  display: flex;
  flex-direction: column;
`;

const Home = () => (
  <UserTemplate>
    <StyledList>
      <li>
        <Post />
      </li>
      <li>
        <Post />
      </li>
      <li>
        <Post />
      </li>
      <li>
        <Post />
      </li>
      <li>
        <Post />
      </li>
      <li>
        <Post />
      </li>
    </StyledList>
  </UserTemplate>
);

export default Home;
