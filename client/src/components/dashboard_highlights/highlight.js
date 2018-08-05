import React from 'react';

<<<<<<< HEAD
const Highlight = props => (
  <div className="Highlight" onClick={props.handleHighlightClick}>
    <div className={props.iconName} />
    <div className="hilights-description">
      <div className="hilights-text">{props.name}</div>
      <span className={props.buttonClass}>{props.numOfDolevs}</span>
=======
const Highlight = (props) => (
  <div className={props.isClicked ? 'Highlight clicked' : 'Highlight'} onClick={props.handleHighlightClick}>
    <div className={props.iconName}></div>
    <div className='hilights-description'>
      <div className='hilights-text'>{props.name}</div>
      <span className={`dolevs-list__status-num dolevs-list__status-num--${props.iconName}`}>&emsp;&emsp;{props.numOfDolevs}&emsp;&emsp;</span>
>>>>>>> 140b550be37609db0cb29240f03dfbb856c2dbec
    </div>
  </div>
);

export default Highlight;
