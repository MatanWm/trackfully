import React from 'react'
import axios from 'axios';
class UpdateDolev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          dolevId: props.match.params.id,
          getPosition: function (options) {
            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
          },
          location: {
            lat: 0,
            lng: 0
          }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount() {
        axios.get(`http://localhost:8080/api/dolev/${this.state.location}`)
        .then(response => {
            this.setState({
                dolveId: response.data.dolevId
            });
        })
        .catch(error => {
            this.setState({
                error
            });
        });
        
        this.state.getPosition()
        .then(position => {
            let location = Object.assign({}, this.state.location);   
            location.lat = position.coords.latitude;
            location.lng = position.coords.longitude;
            this.setState({location});
        })
        .catch(err => {
            console.log(err);
        })

        
      }

      render() {
        const { dolevId } = this.state;
        return(
            <div>
                <div>{dolevId} דולב מספר</div>
                <input type="text" name="name"/> שם<br/>
                <input type="text" name="status"/> סטאטוס<br/>
                <input type="text" name="content"/> תכולה<br/>
                <input type="text" name="quantity"/> כמות<br/>
                <button onClick={this.handleSubmit}>שליחה</button>
                
            </div>
        );
      }

      handleSubmit(){
        const { location } = this.state;
        const name = document.getElementsByName("name")[0].value;
        const status = document.getElementsByName("status")[0].value;
        const content = document.getElementsByName("content")[0].value;
        const quantity = document.getElementsByName("quantity")[0].value;
        console.log({name, status, content, quantity, location
        });
      }

}

export default UpdateDolev
