import AdminSidebar from 'components/organisms/SchoolAdminSidebar/SchoolAdminSidebar';
import { Wrapper } from './SchoolAdminTemplate.styles';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ManageClasses from '../../../views/auth/SchoolAdmin/ManageClasses/ManageClasses';
import Dashboard from '../../../views/auth/SchoolAdmin/Dashboard/Dashboard';
import AddClass from '../../../views/auth/SchoolAdmin/AddClass/AddClass';
import ClassDetails from '../../../views/auth/SchoolAdmin/ClassDetails/ClassDetails';
import Error404 from '../../../views/Error404/Error404';
import Settings from '../../../views/auth/SchoolAdmin/Settings/Settings';

const SchoolAdminTemplate: React.FC = () => (
  <Wrapper>
    <AdminSidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/manage" element={<ManageClasses />} />
      <Route path="/manage/classes" element={<Navigate to="/school-admin/manage" />} />
      <Route path="/manage/classes/:id" element={<ClassDetails />} />
      <Route path="/manage/add-class" element={<AddClass />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Wrapper>
);

export default SchoolAdminTemplate;
