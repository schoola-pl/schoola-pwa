import SchoolAdminTemplate from 'components/templates/SchoolAdminTemplate/SchoolAdminTemplate';
import React from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from '../store';

const templatesForRoles = [
  { role: 'School Admin', template: <SchoolAdminTemplate /> },
  {
    role: 'Student',
    template: <p>Hello user!</p>
  }
];

const Home: React.FC = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return <>{templatesForRoles.map(({ role, template }) => (user && user.TextRole === role ? template : <p>Error 500 - Something went wrong!</p>))}</>;
};

export default Home;
