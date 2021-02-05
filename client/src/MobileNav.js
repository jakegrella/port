import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const MobileNav = () => {
	return (
		<nav className='mobile-nav'>
			<Link to='/projects'>projects</Link>
			<Link to='/contact'>contact</Link>
		</nav>
	);
};

export default MobileNav;
