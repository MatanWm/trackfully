import React from 'react';
import axios from 'axios';

import DashboardHighlights from '../../components/dashboard_highlights/dashboard_highlights_component';
import DolevsList from '../../components/dolevs_list/dolevs_list_component';
import './dashboard_page.css';

const CLASS_NAME = 'dashboard-page';

class DashboardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      dolevs: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/dolev').then((res) => {
      const dolevs = res.data;
      this.setState({ dolevs });
    });
  }

  render() {
    console.log(this.state.dolevs);

    const { dolevs } = this.state;
    // todo: add spinner
    if (!dolevs) return (<div>בטעינה</div>);

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
