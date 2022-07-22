import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import closeIcon from './close-icon.svg';
import xpLogo from '../../shared/images/logo-branco-notext.svg';
import arrow from '../../shared/images/arrow.svg';
import backArrow from '../../shared/images/back-arrow.svg';

// eslint-disable-next-line react/prop-types
export default function SecondSidebar(active, setSidebar) {
  const closeSidebar = () => {
    active(false);
    setSidebar((prev) => !prev);
  };

  return (
    <Container sidebar={active}>
      <div>
        <img src={xpLogo} alt="logo xp" />
        <button type="button" onClick={closeSidebar}>
          <img src={closeIcon} alt="fechar" />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <span>
              <button type="button" onClick={() => setSidebar((prev) => !prev)}>
                <img src={backArrow} alt="yellow arrow" />
                Voltar
              </button>
            </span>
          </li>
          <li>
            <button type="button" onClick={closeSidebar}>
              <Link to="/investimentos/acoes">Ações</Link>
              <img src={arrow} alt="yellow arrow" />
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
