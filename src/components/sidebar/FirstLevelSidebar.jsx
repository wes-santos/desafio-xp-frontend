import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import closeIcon from './close-icon.svg';
import xpLogo from '../../shared/images/logo-branco-notext.svg';
import arrow from '../../shared/images/arrow.svg';
import SecondSidebar from './SecondLevelSidebar';

// eslint-disable-next-line react/prop-types
export default function Sidebar({ active }) {
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => {
    active(false);
  };

  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <Container sidebar={active}>
      <div>
        <Link to="/home"><img src={xpLogo} alt="logo xp" /></Link>
        <button type="button" onClick={closeSidebar}>
          <img src={closeIcon} alt="fechar" />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={closeSidebar}>
              <Link to="/home">Página Inicial</Link>
              <img src={arrow} alt="yellow arrow" />
            </button>
          </li>
          <li>
            <button type="button" onClick={handleSidebar}>
              Investimentos
              <img src={arrow} alt="yellow arrow" />
            </button>
          </li>
          <li>
            Sair
            <img src={arrow} alt="yellow arrow" />
          </li>
        </ul>
      </nav>
      {sidebar && SecondSidebar(active, setSidebar)}
    </Container>
  );
}
