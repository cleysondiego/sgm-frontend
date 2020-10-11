import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from './styles';

interface BackHeaderProps {
  to?: string;
  title?: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ to, title }) => {
  return (
    <Header>
      <div>
        <Link to={to || '/dashboard'}>
          <FiArrowLeft />
        </Link>
        {title ? <h1>{title}</h1> : <div />}
        <div />
      </div>
    </Header>
  );
};

export default BackHeader;
