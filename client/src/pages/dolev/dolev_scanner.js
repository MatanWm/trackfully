import React from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios';
import './dolev_scanner.css';



class DolevScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          success: false,
          delay: 1000,
          dolevId: null
        };
        this.handleScan = this.handleScan.bind(this)
      }
    render(){
        const dolevId = this.state.dolevId;
        return (
            <div className="container">
                {dolevId ? 
                (<div className="success-scan success-text">דולב {dolevId} נסרק בהצלחה</div>)
                :
                (<div>
                    <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                    />
                </div>)

                }
            </div>
        );
    }

    async handleScan(data){
        if(data){
            const res = await axios.patch(`http://localhost:8080/api/dolev/${data}`, {status:this.props.status}); 
            this.setState({
                dolevId: data,
            })
        }
      }
}

export default DolevScanner