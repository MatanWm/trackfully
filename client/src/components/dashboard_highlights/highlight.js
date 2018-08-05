import React from 'react';
const Panel = require('react-bootstrap/lib/Panel');

const Highlight = (props) => (
  <div className='Highlight' onClick={props.handleHighlightClick}>
    <div className={props.iconName}></div>
    <div className='hilights-description'>
      <div className='hilights-text'>{props.name}</div>
      <span className={props.buttonClass}>{props.numOfDolevs}</span>
    </div>
  </div>
);

export default Highlight
