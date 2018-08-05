import React from 'react';
import './dolev_states.css';
import { Link } from 'react-router-dom';

const DolevStates = () => (
  <div className="container dolev-stats">
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="dolev/scan">
          <div>
            <div>יציאה לאיסוף</div>
            <div />
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan">
          <div>
            <div>יציאה תוצרת</div>
            <div />
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan">
          <div>
            <div>יציאה וקירור</div>
            <div />
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan">
          <div>
            <div>יציאה לעמותה</div>
            <div />
          </div>
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="dolev/scan">
          <div>
            <div>יציאה פנוי</div>
            <div />
          </div>
        </Link>
      </li>
    </ul>
  </div>
);

export default DolevStates;
