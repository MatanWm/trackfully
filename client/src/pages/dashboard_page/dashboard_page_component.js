import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DashboardHighlights from '../../components/dashboard_highlights/dashboard_highlights_component';
import DolevsList from '../../components/dolevs_list/dolevs_list_component';

import './dashboard_page.css';

const Header = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/dolev').then((res) => {
      const dolevs = res.data;
      this.setState({ dolevs });
    });
  }

  render() {
    const { dolevs } = this.state;
    // todo: add spinner
    if (!dolevs) return <div>בטעינה</div>;

    return (
      <div className="container-fluid dashboard-page">
        <Header />
        <DashboardHighlights class={'col-lg-12'} />
        <DolevsList />
      </div>
    );
  }
}

export default DashboardPage;
