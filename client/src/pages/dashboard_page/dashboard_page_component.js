import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DashboardHighlights from '../../components/dashboard_highlights/dashboard_highlights_component';
import DolevsList from '../../components/dolevs_list/dolevs_list_component';
import DolevsStatus from '../../components/dolevs_status/dolev_status_component';

import './dashboard_page.css';

const Header = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="navbar-brand">
          <Link className="nav-link " to="/backoffice/admin/new">
            <img src={'./assets/img/leket_logo.png'} />
          </Link>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
);

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
    return (
      <div className="container-fluid">
        <Header />
        <DashboardHighlights />
        <DolevsList />
        <DolevsStatus dolevs={this.state.dolevs} />
      </div>
    );
  }
}

export default DashboardPage;
