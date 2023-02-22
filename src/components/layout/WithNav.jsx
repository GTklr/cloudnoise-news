// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import NavBarOne from '../Navbar.jsx';
import { Outlet } from 'react-router';
import Footer from '../Footer.jsx';
import Transitions from '../transitions/Transition'

export default () => {
  return (
    <Transitions>
      <NavBarOne />
        <Outlet />
      <Footer> </Footer>
    </Transitions>
  );
};