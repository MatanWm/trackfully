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

<<<<<<< HEAD
export default DolevStates;
=======
class DolevStates extends React.Component {

    render(){
        const divStyle1 = {width: '100%', overflow: 'hidden'};
        const divStyle2 = {width: '600px', float: 'left'};
        const divStyle3 = {marginLeft: '620px'};
        return(
            <div className="rectangle-2">
                <Link to="dolev/pick-up">
                    <div className="rectangle-3" style={divStyle1}>
                        <div style={divStyle2}>יציאה לאיסוף</div>
                        <div className="truck" style={divStyle3} ></div>
                    </div>
                </Link>
                <Link to="dolev/pick-up">
                    <div className="rectangle-3" style={divStyle1}>
                        <div style={divStyle2}>יציאה תוצרת</div>
                        <div style={divStyle3}></div>
                    </div>
                </Link>
                <Link to="dolev/pick-up">
                    <div className="rectangle-3" style={divStyle1}>
                        <div style={divStyle2}>יציאה וקירור</div>
                        <div style={divStyle3} ></div>
                    </div>
                </Link>
                <Link to="dolev/pick-up">
                    <div className="rectangle-3" style={divStyle1}>
                        <div style={divStyle2}>יציאה לעמותה</div>
                        <div style={divStyle3} ></div>
                    </div>
                </Link>
                <Link to="dolev/pick-up">
                    <div className="rectangle-3" style={divStyle1}>
                        <div style={divStyle2}>יציאה פנוי</div>
                        <div style={divStyle3}></div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default DolevStates
>>>>>>> 140b550be37609db0cb29240f03dfbb856c2dbec
