import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Header } from './styles';

interface BackHeaderProps {
  to?: string;
  title?: string;
  show_profile?: boolean;
}

const BackHeader: React.FC<BackHeaderProps> = ({
  to,
  title = '',
  show_profile = true,
}) => {
  const { user } = useAuth();

  return (
    <Header>
      <div>
        <div>
          <Link to={to || '/dashboard'}>
            <FiArrowLeft />
          </Link>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          {show_profile && (
            <Link to="/profile">
              <img src={user.avatar_url} alt={user.name} />
            </Link>
          )}
        </div>
      </div>
    </Header>
  );
};

export default BackHeader;
