import React from 'react';

import './Contact.scss';

const Contact = () => {
  return (
    <div>
      <h2 className='page-title'>contact</h2>
      <p>
        If you'd like to contact me, you can find me on all social media{' '}
        <a
          href='https://twitter.com/jakegrella'
          target='_blank'
          rel='noreferrer'>
          @jakegrella
        </a>
        .
      </p>
      <p>
        You can also reach me at{' '}
        <a href='mailto:jake@jakegrella.com'>jake@jakegrella.com</a>
      </p>
    </div>
  );
};

export default Contact;
