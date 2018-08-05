import React from 'react';
import axios from 'axios';

import DashboardHighlights from '../../components/dashboard_highlights/dashboard_highlights_component';
import DolevsList from '../../components/dolevs_list/dolevs_list_component';
import './dashboard_page.css';

const CLASS_NAME = 'dashboard-page';

class DashboardPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/dolev').then((res) => {
      const dolves = res.data;
      this.setState({ dolves });
    });
  }

  render() {
    console.log(this.state.dolves);
    return (
      <div className={CLASS_NAME}>
        <div>Hello Trackfully</div>
        <DashboardHighlights />
        <DolevsList />
      </div>
    );
  }
}

export default DashboardPage;
