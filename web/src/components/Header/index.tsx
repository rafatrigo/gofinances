import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();

  return (
    <Container navigation={pathname} size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <div>
            <Link to="/">Listagem</Link>
          </div>
          <div>
            <Link to="/import">Importar</Link>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
