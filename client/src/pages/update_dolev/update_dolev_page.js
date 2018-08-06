import React from 'react';
import axios from 'axios';


import './update_dolev_page.css';

class DashboardPage extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  onSubmit() {
    axios.get('http://trackfully.westeurope.cloudapp.azure.com:8080/api/dolev').then((res) => {
      const dolevs = res.data;
      this.setState({ dolevs });
    });
  }

  render() {
  return (<div></div>);
  }
}

export default DashboardPage;
