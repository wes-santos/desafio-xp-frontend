import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import xpiLogo from '../../shared/images/logo-xpi.svg';
import menuIcon from './menu-icon.svg';
import Sidebar from '../Sidebar/FirstLevelSidebar';

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <C.Header>
      <C.LogoButton
        type="button"
        onClick={() => navigate('/home')}
        data-testid="home-logo-button"
      >
        <img src={xpiLogo} alt="xp logo" />
      </C.LogoButton>
      <C.Button type="button" onClick={handleSidebar}>
        <img src={menuIcon} alt="menu icon" />
      </C.Button>
      {sidebar && <Sidebar active={setSidebar} />}
    </C.Header>
  );
}
