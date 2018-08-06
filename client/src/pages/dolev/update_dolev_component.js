import React from 'react';
import axios from 'axios';
import QrReader from 'react-qr-reader';

class UpdateDolev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      dolevId: props.match.params.id,
      getPosition(options) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      },
      location: {
        lat: 0,
        lng: 0,
      },
      delay: 300,
      result: 'No result',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }
  componentDidMount() {
    axios
      .get(`http://trackfully.westeurope.cloudapp.azure.com:8080/api/dolev/${this.state.location}`)
      .then((response) => {
        this.setState({
          dolveId: response.data.dolevId,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });

    this.state
      .getPosition()
      .then((position) => {
        const location = Object.assign({}, this.state.location);
        location.lat = position.coords.latitude;
        location.lng = position.coords.longitude;
        this.setState({ location });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { dolevId } = this.state;
    return (
      <div className="container-fluid col-lg-6">
        <div className="form-group">
          <label>שם</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <div className="form-group">
          <label>סטאטוס</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <div className="form-group">
          <label>תכולה</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <div className="form-group">
          <label>כמות</label>
          <input className="form-control" type="text" name="name" />
        </div>

        <button className="btn btn-success" onClick={this.handleSubmit}>
          שליחה
        </button>
        <div>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '30%' }}
          />
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }

  handleSubmit() {
    const { location } = this.state;
    const name = document.getElementsByName('name')[0].value;
    const status = document.getElementsByName('status')[0].value;
    const content = document.getElementsByName('content')[0].value;
    const quantity = document.getElementsByName('quantity')[0].value;
    console.log({
      name,
      status,
      content,
      quantity,
      location,
    });
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      });
    }
  }
}

export default UpdateDolev;
