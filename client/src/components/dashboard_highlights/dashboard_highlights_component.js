import React from 'react'
import Highligh from './highlight'

const CLASS_NAME = 'Dashboard-highlights';

const IDLE_STATUS = 0;
const IN_FIELD_STATUS = 1;
const FRIDGE_STATUS = 6;
const ASSOCIATION_STATUS = 8;

const DashboardHighlights = (props) => {
  const dolevsByStatusObject = getNumOfDolevsByStatusObject(props.dolevs);
  return (
    <div className='hilights-block'>
      <Highligh name='דולבים פנויים'
                numOfDolevs={allDolevs.filter(dolev => dolev.status === IDLE_STATUS).length}
                iconName = 'dolev'
                buttonClass='badge badge-success'
                handleHighlightClick={() => props.onHighlightClick(IDLE_STATUS)}/>
      <Highligh name='דולבים בשטח'
                iconName = 'wheat'
                buttonClass='badge badge-warning'
                numOfDolevs={allDolevs.filter(dolev => dolev.status === IN_FIELD_STATUS).length}
                handleHighlightClick={() => props.onHighlightClick(IDLE_STATUS)}/>
      <Highligh name='בקירור'
                iconName='fridge'
                buttonClass='badge badge-info'
                numOfDolevs={allDolevs.filter(dolev => dolev.status === FRIDGE_STATUS).length}
                handleHighlightClick={() => props.onHighlightClick(FRIDGE_STATUS)}/>
      <Highligh name='בעמותה'
                iconName = 'amuta'
                buttonClass='badge badge-primary'
                numOfDolevs={allDolevs.filter(dolev => dolev.status === ASSOCIATION_STATUS).length}
                handleHighlightClick={() => props.onHighlightClick('ASSOCIATION_STATUS')}/>
    </div>
  );
};

export default DashboardHighlights
