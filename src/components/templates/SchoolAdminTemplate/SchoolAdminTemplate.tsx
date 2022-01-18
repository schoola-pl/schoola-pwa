import AdminSidebar from 'components/organisms/SchoolAdminSidebar/SchoolAdminSidebar';
import { Wrapper } from './SchoolAdminTemplate.styles';
import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import ManageClasses from '../../../views/auth/SchoolAdmin/ManageClasses/ManageClasses';
import Dashboard from '../../../views/auth/SchoolAdmin/Dashboard/Dashboard';
import AddClass from '../../../views/auth/SchoolAdmin/AddClass/AddClass';

const SchoolAdminTemplate: React.FC = () => (
  <Wrapper>
    <AdminSidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage" element={<ManageClasses />} />
      <Route path="/manage/add-class" element={<AddClass />} />
    </Routes>
  </Wrapper>
);

export default SchoolAdminTemplate;
