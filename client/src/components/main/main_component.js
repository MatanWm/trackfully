import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/dashboard_component';
import UpdateDolev from '../../pages/dolev/update_dolev_component';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/sample' component={Dashboard}/>
      <Route exact path='/dolev/:id' component={UpdateDolev}/>
    </Switch>
  </main>
);

export default Main
