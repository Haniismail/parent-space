import React from 'react';
import { Link } from 'react-router-dom';
import ImLogo from '../../assets/img/logo.svg';

const Index = ({ handleDrawerToggle, mobileOpen }) => {
  return (
    <Link
      to="/"
      className="logo"
      onClick={() => {
        if (mobileOpen === true) {
          handleDrawerToggle();
        }
      }}
    >
      <img alt="logo" src={ImLogo} />
      <span>TakiAcademy</span>
    </Link>
  );
};

export default Index;
