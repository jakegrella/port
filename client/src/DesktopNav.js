import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const DesktopNav = () => {
  return (
    <nav className='desktop'>
      <Link to='/projects'>projects</Link>
      <Link to='/contact'>contact</Link>
    </nav>
  );
};

export default DesktopNav;
