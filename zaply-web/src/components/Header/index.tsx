import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <img src={logo} alt="" />
      <h2>Compare os preços dos supermercados que vendem pela internet</h2>
    </header>
  </Container>
);

export default Header;
