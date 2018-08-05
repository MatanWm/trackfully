import React from 'react';

const CLASS_NAME = 'dolevs-status';
const ProgressBar
const DolevsStatus = ({ dolevs }) => (
  <div className={`${CLASS_NAME} col-lg-3`}>
    {dolevs.map((dolev, index) => (
      <div key={index}>{dolev.id} מספר דולב</div>
    ))}
  </div>
);

export default DolevsStatus;
 