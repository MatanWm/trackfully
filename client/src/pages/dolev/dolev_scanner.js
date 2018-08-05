import React from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios';



class DolevScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          success: false,
          delay: 1000,
          result: 'No result',

        };
        this.handleScan = this.handleScan.bind(this)
      }
    render(){
        const isSuccess = this.state.success;
        return (
            <div>
                {isSuccess ? 
                (<div>דולב נסרק בהצלחה</div>)
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
            console.log(data);
            const res = await axios.patch(`http://localhost:8080/api/dolev/${data}`, {status:this.props.status}); 
            //console.log(res);
            this.setState({
                success: true,
            })
        }
      }
}

export default DolevScanner