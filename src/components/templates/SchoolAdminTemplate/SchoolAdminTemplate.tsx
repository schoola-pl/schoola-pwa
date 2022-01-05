import AdminSidebar from 'components/organisms/SchoolAdminSidebar/SchoolAdminSidebar';
import { Wrapper } from './SchoolAdminTemplate.styles';
import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import ManageClasses from '../../../views/auth/SchoolAdmin/ManageClasses/ManageClasses';
import Dashboard from '../../../views/auth/SchoolAdmin/Dashboard/Dashboard';

const SchoolAdminTemplate: React.FC = () => (
  <Wrapper>
    <AdminSidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<ManageClasses />} />
    </Routes>
  </Wrapper>
);

export default SchoolAdminTemplate;
