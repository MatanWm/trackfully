import React from 'react';
import './dolev_states.css';
import { Link } from 'react-router-dom';

const LIST_ITEM_CLASS_NAME = 'list-item';
const LIST_ITEM_ICON_CLASS_NAME = `${LIST_ITEM_CLASS_NAME}__icon`;

const DolevStates = () => (
  <div className="dolev-stats">
    <div>
      <img src="./assets/img/leket_logo.png" alt="" />
    </div>
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="dolev/scan/1">
          <div className={LIST_ITEM_CLASS_NAME}>
            <div className={`${LIST_ITEM_ICON_CLASS_NAME} ${LIST_ITEM_ICON_CLASS_NAME}--starting-collection`}/>
            <div>יציאה לאיסוף</div>
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan/2">
          <div className={LIST_ITEM_CLASS_NAME}>
            <div className={`${LIST_ITEM_ICON_CLASS_NAME} ${LIST_ITEM_ICON_CLASS_NAME}--production-collection`}/>
            <div>איסוף תוצרת</div>
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan/3">
          <div className={LIST_ITEM_CLASS_NAME}>
            <div className={`${LIST_ITEM_ICON_CLASS_NAME} ${LIST_ITEM_ICON_CLASS_NAME}--cooling`}/>
            <div>אכסון וקירור</div>
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan/4">
          <div className={LIST_ITEM_CLASS_NAME}>
            <div className={`${LIST_ITEM_ICON_CLASS_NAME} ${LIST_ITEM_ICON_CLASS_NAME}--delivering-to-association`}/>
            <div>מסירה לעמותה</div>
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan/5">
          <div className={LIST_ITEM_CLASS_NAME}>
            <div className={`${LIST_ITEM_ICON_CLASS_NAME} ${LIST_ITEM_ICON_CLASS_NAME}--tagging-available-dolev`}/>
            <div>סימון דולב פנוי</div>
          </div>
        </Link>
      </li>
    </ul>
  </div>
);

export default DolevStates;
