import React, { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { loginRoute } from '../routes';
import { useNavigate } from 'react-router';
import { useAppLoading } from '../hooks/useAppLoading';

interface props {
  Element: React.FC;
  role: string | string[];
}

const ProtectedRoute: React.FC<props> = ({ Element, role }) => {
  const { currentUser, checkDoesRoleHasPermission } = useAuth();
  const { setAppLoading } = useAppLoading();
  const navigate = useNavigate();

  useEffect(() => {
    setAppLoading(true);
    console.log('currentUser', currentUser);
    if (!currentUser || !checkDoesRoleHasPermission(role, currentUser.role)) {
      setAppLoading(false);
      navigate(loginRoute);
    }
    setAppLoading(false);
  }, [currentUser]);

  return <Element />;
};

export default ProtectedRoute;
