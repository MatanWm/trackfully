import React from 'react';
import DashboardHighlights from '../../components/dashboard_highlights/dashboard_highlights_component';
import DolevsList from '../../components/dolevs_list/dolevs_list_component';
import './dashboard_page.css';

const CLASS_NAME = 'dashboard-page';

const DashboardPage = () => (
  <div className={CLASS_NAME}>
    <div>Hello Trackfully</div>
    <DashboardHighlights />
    <DolevsList />
  </div>
);

export default DashboardPage;
