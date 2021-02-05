import React from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

import { tsInfo, ejInfo } from './projectInfo';

const Projects = () => {
	return (
		<div>
			<h2 className='page-title'>projects</h2>

			<Link to='/projects/townsquare' className='project-blurb'>
				<h3>{tsInfo.title}</h3>
				<p>{tsInfo.description}</p>
				<img src={tsInfo.imgSrc} alt={tsInfo.imgAlt} />
				<p className='last'>{'>>'} more info</p>
			</Link>

			<Link to='/projects/townsquare' className='project-blurb'>
				<h3>{ejInfo.title}</h3>
				<p>{ejInfo.description}</p>
				<img src={ejInfo.imgSrc} alt={ejInfo.imgAlt} />
				<p className='last'>{'>>'} more info</p>
			</Link>
		</div>
	);
};

export default Projects;
