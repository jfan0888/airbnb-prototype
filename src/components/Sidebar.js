import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarToggle from './SidebarToggle';

const CustomSidebar = ({ open, type, toggleHandler }) => (
  <Sidebar
    sidebar={<div className="sidebar-content">{type} Sidebar Content</div>}
    open={open}
    onSetOpen={toggleHandler}
    styles={{ sidebar: { background: 'white' } }}
    pullRight={type === 'right' ? true : false}
  >
    <SidebarToggle type={type} clickHanlder={() => toggleHandler(true)} />
  </Sidebar>
);

export default CustomSidebar;
