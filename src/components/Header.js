import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Facebook logo */}
        {/* Search input */}
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>User Name</h4>
        </div>
        {/* Header icons */}
      </div>
    </div>
  );
}

export default Header;
