import React, { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router';
import { useNotification } from '../hooks/useNotification';
import { loginRoute } from 'routes';

interface props {
  Element: React.FC;
  role: string | string[];
}

const ProtectedRoute: React.FC<props> = ({ Element, role }) => {
  const { currentUser, checkDoesRoleHasPermission, signOut } = useAuth();
  const navigate = useNavigate();
  const { notifyUser } = useNotification();

  useEffect(() => {
    if (!currentUser) {
      // Check does user exist
      notifyUser({ value: 'Aby korzystać z aplikacji, musisz się zalogować!', type: 'error', level: 1 });
      navigate(loginRoute);
    } else if (!checkDoesRoleHasPermission(role, currentUser.role)) {
      // Check does user has permissions
      notifyUser({ value: 'Nie masz uprawnień do tej części aplikacji!', type: 'error', level: 2 });
      (async () => {
        await signOut({});
      })();
    }
  }, []);

  return <Element />;
};

export default ProtectedRoute;
