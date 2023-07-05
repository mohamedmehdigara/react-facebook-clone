import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <h4>User Name</h4>
      </div>
      <div className="sidebar__menu">
        {/* Sidebar menu items */}
      </div>
    </div>
  );
}

export default Sidebar;

