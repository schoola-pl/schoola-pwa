import AdminSidebar from 'components/organisms/SchoolAdminSidebar/SchoolAdminSidebar';
import { Wrapper } from './SchoolAdminTemplate.styles';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ManageClasses from '../../../views/SchoolAdmin/ManageClasses/ManageClasses';
import Dashboard from '../../../views/SchoolAdmin/Dashboard/Dashboard';
import AddClass from '../../../views/SchoolAdmin/AddClass/AddClass';
import ClassDetails from '../../../views/SchoolAdmin/ClassDetails/ClassDetails';
import Error404 from '../../../views/Error404/Error404';
import Settings from '../../../views/SchoolAdmin/Settings/Settings';
import TooSmallScreen from 'components/organisms/TooSmallScreen/TooSmallScreen';
import { useAuth } from '../../../hooks/useAuth';

const SchoolAdminTemplate: React.FC = () => {
  const { updateAttributes, currentUser } = useAuth();

  // This use effect is just switching the user's attribute to 'yes'
  useEffect(() => {
    const isConfigured = currentUser?.attributes['custom:isConfigured'];
    if (isConfigured) {
      if (isConfigured === 'no')
        updateAttributes({
          attributes: {
            'custom:isConfigured': 'yes'
          }
        });
    }
  }, [currentUser]);

  return window.innerWidth < 1360 ? (
    <TooSmallScreen />
  ) : (
    <Wrapper data-cy="admin-view">
      <AdminSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manage" element={<Navigate to="/school-admin/manage/classes" />} />
        <Route path="/manage/*" element={<ManageClasses />} />
        <Route path="/manage/classes/:id" element={<ClassDetails />} />
        <Route path="/manage/add-class/" element={<AddClass />} />
        <Route path="/manage/add-class/:level" element={<AddClass />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Wrapper>
  );
};

export default SchoolAdminTemplate;
