import React from 'react';

import './Projects.scss';

const Project = (props) => {
  const {
    title,
    description,
    gitHubLink,
    liveSiteLink,
    imgSrc,
    imgAlt,
    role,
    tools
  } = props.info;

  return (
    <div className='project'>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className='project-links'>
        <a href={gitHubLink} target='_blank' rel='noreferrer'>
          GitHub
        </a>
        <p>{`//`}</p>
        <a href={liveSiteLink} target='_blank' rel='noreferrer'>
          Live Site
        </a>
      </div>

      <img src={imgSrc} alt={imgAlt} />

      <h3>My Role</h3>
      {role.map((e) => (
        <p key={e}>{e}</p>
      ))}
      <h3>Tools</h3>
      {tools.map((e) => (
        <p key={e}>{e}</p>
      ))}
    </div>
  );
};

export default Project;
