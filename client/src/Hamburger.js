import React, { useState } from 'react';
import MobileNav from './MobileNav';

import './nav.scss';

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState('false');

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavClick = () => {
    setShowMenu('false');
  };

  // if urlparams change, set showmenu to false

  return (
    <div>
      <button className='hamburger' onClick={handleClick}>
        {showMenu ? <h2>=</h2> : <h2>x</h2>}
      </button>
      <div onClick={handleNavClick}>
        {showMenu ? null : <MobileNav onClick={handleNavClick} />}
      </div>
    </div>
  );
};

export default Hamburger;
