import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  return (
    <div>
      <h3>
        Currently seeking a place to use my web development and engineering
        skills to really make a difference.
      </h3>
      <h3>
        Some challenges that inspire me most are climate change, autonomous
        vehicles, blockhain tech and crypto, and ecommerce.
      </h3>
      <h3>
        I learned most of my software skills at{' '}
        <span className='lambda'>Lambda School</span> and before that I studied
        business at the{' '}
        <span className='uic'>University of Illinois at Chicago</span>. I picked
        up everything else that makes me who I am along the way.
      </h3>
      <h3>
        I enjoy working with JavaScript, React, and Node for web, React Native
        for mobile, and Python for software.
      </h3>
      {/* <h3>
				While I search for my next opportunity, I am building ____ for _______.
			</h3> */}
      <h3>Here’s a few projects that I’m most proud of:</h3>
      <Link to='/projects/townsquare' className='project-blurb'>
        <h3>TownSquare</h3>
        <p>
          Allow citizens of a community the opportunity to have their voices
          heard
        </p>
        <p className='last'>{'>>'} more info</p>
      </Link>
      <Link to='/projects/expat-journal' className='project-blurb'>
        <h3>Expat Journal</h3>
        <p>A place for international travelers to journal their experiences</p>
        <p className='last'>{'>>'} more info</p>
      </Link>
      <h3>
        Reach out{' '}
        <a
          href='https://twitter.com/jakegrella'
          target='_blank'
          rel='noreferrer'>
          <span className='at'>@jakegrella</span>
        </a>
      </h3>
    </div>
  );
};

export default Home;
