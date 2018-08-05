import React from 'react'
import Highlight from './highlight'

const IDLE_STATUS = 0;
const IN_FIELD_STATUS = 1;
const FRIDGE_STATUS = 6;
const ASSOCIATION_STATUS = 8;

const DashboardHighlights = (props) => {
  return (
    <div className='hilights-block'>
      <Highlight name='דולבים פנויים'
                 numOfDolevs={props.dolevs.filter(dolev => dolev.status === IDLE_STATUS).length}
                 iconName = 'dolev'
                 buttonClass='badge badge-success'
                 handleHighlightClick={() => props.onHighlightClick(IDLE_STATUS)}/>
      <Highlight name='דולבים בשטח'
                 iconName = 'wheat'
                 buttonClass='badge badge-warning'
                 numOfDolevs={props.dolevs.filter(dolev => dolev.status === IN_FIELD_STATUS).length}
                 handleHighlightClick={() => props.onHighlightClick(IDLE_STATUS)}/>
      <Highlight name='בקירור'
                 iconName='fridge'
                 buttonClass='badge badge-info'
                 numOfDolevs={props.dolevs.filter(dolev => dolev.status === FRIDGE_STATUS).length}
                 handleHighlightClick={() => props.onHighlightClick(FRIDGE_STATUS)}/>
      <Highlight name='בעמותה'
                 iconName = 'amuta'
                 buttonClass='badge badge-primary'
                 numOfDolevs={props.dolevs.filter(dolev => dolev.status === ASSOCIATION_STATUS).length}
                 handleHighlightClick={() => props.onHighlightClick('ASSOCIATION_STATUS')}/>
    </div>
  );
};

export default DashboardHighlights
