import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import xpiLogo from '../../shared/images/logo-xpi.svg';
import menuIcon from './menu-icon.svg';
import Sidebar from '../sidebar/FirstLevelSidebar';

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <C.Header>
      <Link to="/home">
        <img src={xpiLogo} alt="xp logo" />
      </Link>
      <C.Button type="button" onClick={handleSidebar}>
        <img src={menuIcon} alt="menu icon" />
      </C.Button>
      {sidebar && <Sidebar active={setSidebar} />}
    </C.Header>
  );
}
