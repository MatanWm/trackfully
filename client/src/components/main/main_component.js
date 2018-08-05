import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/dashboard_component';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/sample' component={Dashboard}/>
    </Switch>
  </main>
);

export default Main
