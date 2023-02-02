import React from 'react';
import { Logo } from '../../../components';

const Header = ({ handleDrawerToggle, mobileOpen }) => {
  return (
    <div className="header">
      <Logo handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
    </div>
  );
};

export default Header;
