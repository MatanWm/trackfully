import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashboardPage from '../../../pages/dashboard_page/dashboard_page_component';
import UpdateDolev from '../../../pages/dolev/update_dolev_component';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={DashboardPage}/>
      <Route exact path='/sample' component={DashboardPage}/>
      <Route exact path='/dolev/:id' component={UpdateDolev}/>
    </Switch>
  </main>
);

export default Main
