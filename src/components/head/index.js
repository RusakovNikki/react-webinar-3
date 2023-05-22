import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({title, children}) {
  console.log('Head update');
  return (
    <div className='Head'>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default React.memo(Head);
