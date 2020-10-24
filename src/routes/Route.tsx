import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  user_type: Array<0 | 1 | 2 | 3 | 4>;
}

const Route: React.FC<RouteProps> = ({
  user_type,
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const { addToast } = useToast();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate === !!user) {
          if (user_type[0] === 0) {
            return <Component />;
          }

          const filterType = user_type.filter(type => type === user.user_type);

          if (filterType.length > 0) {
            return <Component />;
          }

          addToast({
            type: 'error',
            title: 'Erro de permissão!',
            description:
              'Você não tem permissão para acessar a rota selecionada!',
          });

          return <Redirect to={{ pathname: '/dashboard' }} />;
        }
        return (
          <Redirect to={{ pathname: isPrivate ? '/login' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default Route;
