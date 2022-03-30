import React, { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { loginRoute } from '../routes';
import { useNavigate } from 'react-router';

interface props {
  Element: React.FC;
  role: string | string[];
}

const ProtectedRoute: React.FC<props> = ({ Element, role }) => {
  const { currentUser, checkDoesRoleHasPermission } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || !checkDoesRoleHasPermission(role, currentUser.role)) {
      navigate(loginRoute);
    }
  }, [currentUser]);

  return <Element />;
};

export default ProtectedRoute;
