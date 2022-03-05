import UserSidebar from 'components/organisms/UserSidebar/UserSidebar';
import TopBar from 'components/organisms/TopBar/TopBar';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto !important;
  max-height: 100vh;
  padding: 11.5rem 2.5rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserTemplate: React.FC = ({ children }) => (
  <>
    <TopBar />
    <Wrapper>{children}</Wrapper>
    <UserSidebar />
  </>
);

export default UserTemplate;
