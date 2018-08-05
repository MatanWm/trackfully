import React, { Component } from 'react';
import Main from '../main/main_component';

class TrackfullyBackofficeApp extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(console.error);
  }

  callApi = async () => {
    const resp = await fetch('/api');

    window._resp = resp;

    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  render() {
    const { message } = this.state;
    console.log("message =", message);
    // an example to header component (for navigating between links) cna be found here:
    // https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
    return (
      <Main />
    );
  }
}

export default TrackfullyBackofficeApp;
