import React from 'react'
import QrReader from 'react-qr-reader'



class DolevScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          delay: 300,
          result: 'No result',
        };
        this.handleScan = this.handleScan.bind(this)
      }
    render(){
        return (
            <div>
            <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
            />
        </div>
        );
    }

    handleScan(data){
        if(data){
          this.setState({
            result: data,
          })
        }
      }
}

export default DolevScanner