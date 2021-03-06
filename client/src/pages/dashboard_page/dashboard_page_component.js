import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DashboardHighlights from '../../components/dashboard_highlights/dashboard_highlights_component';
import DolevsList from '../../components/dolevs_list/dolevs_list_component';

import './dashboard_page.css';

const Header = () => (
  <div className="container-fluid leket-logo">
    <nav className="navbar navbar-expand-lg leket-logo">
      <ul className="navbar-nav">
        <li className="navbar-brand">
          <Link className="nav-link " to="/">
            <img alt="" src={'./assets/img/leket_logo.png'} />
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

    this.state = {
      dolevs: null,
      statusFilter: null,
    };
  }

  componentDidMount() {
    axios.get('http://trackfully.westeurope.cloudapp.azure.com:8080/api/dolev').then((res) => {
      const dolevs = res.data;
      this.setState({ dolevs });
    });
  }

  onHighlightClick(status) {
    const newStatusFilter = this.state.statusFilter !== status ? status : null;
    this.setState({ statusFilter: newStatusFilter });
  }

  render() {
    const { dolevs, statusFilter } = this.state;
    // todo: add spinner
    if (!dolevs) return <div>בטעינה</div>;
    return (
      <div className="container dashboard-page cont">
        <Header />
        <DashboardHighlights
          class={'col-lg-12'}
          clickedStatus = {statusFilter}
          dolevs={dolevs}
          onHighlightClick={this.onHighlightClick.bind(this)}
        />
        <DolevsList dolevs={dolevs} statusFilter={statusFilter} />
      </div>
    );
  }
}

export default DashboardPage;
