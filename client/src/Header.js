import React from 'react';
import DesktopNav from './DesktopNav';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<Link to='/'>
				<h1>jake grella</h1>
			</Link>

			<Hamburger className='hamburger' />

			<DesktopNav className='desktop' />
		</header>
	);
};

export default Header;
