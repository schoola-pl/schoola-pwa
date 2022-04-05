import React, { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { loginRoute } from '../routes';
import { useNavigate } from 'react-router';
import { useNotification } from '../hooks/useNotification';

interface props {
  Element: React.FC;
  role: string | string[];
}

const ProtectedRoute: React.FC<props> = ({ Element, role }) => {
  const { currentUser, checkDoesRoleHasPermission } = useAuth();
  const navigate = useNavigate();
  const { notifyUser } = useNotification();

  useEffect(() => {
    if (!currentUser || !checkDoesRoleHasPermission(role, currentUser.role)) {
      navigate(loginRoute);
    }
    if (!currentUser?.role || !currentUser?.attributes.birthdate || !currentUser?.attributes['custom:isConfigured']) {
      notifyUser({
        value: 'Twoje konto zostało niepoprawnie skonfigurowane! Prosimy o kontakt z administratorem.',
        type: 'error',
        level: 3
      });
    }
  }, [currentUser]);

  return <Element />;
};

export default ProtectedRoute;
