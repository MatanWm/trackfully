import React from 'react'
import './dolev_states.css';
import { Link } from 'react-router-dom';


class DolevStates extends React.Component {

    render(){
        return(
            <div className="rectangle-2">
                <Link to="dolev/pick-up">
                    <div style="width: 100%; overflow: hidden;">
                        <div style="width: 600px; float: left;">יציאה לאיסוף</div>
                        <div style="margin-left: 620px;" className="rectangle-3 truck"></div>
                    </div>
                </Link>
                <Link to="dolev/marlog"><div className="rectangle-3 truck"></div></Link>
                <Link to="dolev/marlog"><div className="rectangle-3 truck"></div></Link>
                <Link to="dolev/marlog"><div className="rectangle-3 truck"></div></Link>
                <Link to="dolev/marlog"><div className="rectangle-3 truck"></div></Link>
                <div className="rectangle-3"><a href="/dolev/field">איסוף תוצרת</a></div>
                <div className="rectangle-3"><a href="/dolev/freeze">אכסון וקירור</a></div>
                <div className="rectangle-3"><a href="/dolev/freeze">מסירה לעמותה</a></div>
                <div className="rectangle-3"><a href="/dolev/freeze">סימון דולב פנוי</a></div>
            </div>
        );
    }
}

export default DolevStates