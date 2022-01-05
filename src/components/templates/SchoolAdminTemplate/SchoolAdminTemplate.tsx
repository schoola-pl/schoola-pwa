import AdminSidebar from 'components/organisms/SchoolAdminSidebar/SchoolAdminSidebar';
import { Wrapper } from './SchoolAdminTemplate.styles';
import React from 'react';

const SchoolAdminTemplate: React.FC = ({ children }) => (
  <Wrapper>
    <AdminSidebar />
    {children}
  </Wrapper>
);

export default SchoolAdminTemplate;
