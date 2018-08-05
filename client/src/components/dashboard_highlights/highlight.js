import React from 'react';
const Panel = require('react-bootstrap/lib/Panel');

const Highlight = (props) => (
  <div className={props.isClicked ? 'Highlight clicked' : 'Highlight'} onClick={props.handleHighlightClick}>
    <div className={props.iconName}></div>
    <div className='hilights-description'>
      <div className='hilights-text'>{props.name}</div>
      <span className={`dolevs-list__status-num dolevs-list__status-num--${props.iconName}`}>&emsp;&emsp;{props.numOfDolevs}&emsp;&emsp;</span>
    </div>
  </div>
);

export default Highlight
