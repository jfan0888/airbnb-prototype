import React from 'react';
import Sidebar from 'react-sidebar';

import SidebarToggle from '../SidebarToggle';

const CustomSidebar = ({ open, type, toggleHandler, children }) => (
  <Sidebar
    sidebarClassName="sidebar-wrapper"
    sidebar={children}
    open={open}
    onSetOpen={toggleHandler}
    pullRight={type === 'right' ? true : false}
  >
    <SidebarToggle type={type} clickHanlder={() => toggleHandler(true)} />
  </Sidebar>
);

export default CustomSidebar;
