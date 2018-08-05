import React from 'react'
import Highlight from './highlight'

const IDLE_STATUS = 0;
const IN_FIELD_STATUS = 1;
const FRIDGE_STATUS = 6;
const ASSOCIATION_STATUS = 8;

const DashboardHighlights = (props) => {
  const { dolevs, clickedStatus } = props;
  return (
    <div className='hilights-block'>
      <Highlight name='דולבים פנויים'
                 isClicked = {clickedStatus === IDLE_STATUS}
                 numOfDolevs={dolevs.filter(dolev => dolev.status === IDLE_STATUS).length}
                 iconName = 'dolev'
                 buttonClass='badge badge-success'
                 handleHighlightClick={() => props.onHighlightClick(IDLE_STATUS)}/>
      <Highlight name='דולבים בשטח'
                 isClicked = {clickedStatus === IN_FIELD_STATUS}
                 iconName = 'wheat'
                 buttonClass='badge badge-warning'
                 numOfDolevs={dolevs.filter(dolev => dolev.status === IN_FIELD_STATUS).length}
                 handleHighlightClick={() => props.onHighlightClick(IN_FIELD_STATUS)}/>
      <Highlight name='בקירור'
                 isClicked = {clickedStatus === FRIDGE_STATUS}
                 iconName='fridge'
                 buttonClass='badge badge-info'
                 numOfDolevs={dolevs.filter(dolev => dolev.status === FRIDGE_STATUS).length}
                 handleHighlightClick={() => props.onHighlightClick(FRIDGE_STATUS)}/>
      <Highlight name='בעמותה'
                 isClicked = {clickedStatus === ASSOCIATION_STATUS}
                 iconName = 'amuta'
                 buttonClass='badge badge-primary'
                 numOfDolevs={dolevs.filter(dolev => dolev.status === ASSOCIATION_STATUS).length}
                 handleHighlightClick={() => props.onHighlightClick(ASSOCIATION_STATUS)}/>
    </div>
  );
};

export default DashboardHighlights
