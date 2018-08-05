import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from '../../../pages/dashboard_page/dashboard_page_component';
import UpdateDolev from '../../../pages/update_dolev/update_dolev_page';
import DolevStates from '../../../pages/dolev/dolev_states_component';
import DolevScanner from '../../../pages/dolev/dolev_scanner';

const Main = () => (
  <main>
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/sample" component={DashboardPage} />
      <Route exact path="/dolev" component={DolevStates} />
      <Route exact path="/dolev/update/:dolev_id" component={UpdateDolev} />
=======
      <Route exact path='/' component={DashboardPage}/>
      <Route exact path='/sample' component={DashboardPage}/>
      <Route exact path='/dolev' component={DolevStates}/>
      <Route exact path='/dolev/scan' component={DolevScanner}/>
      <Route exact path='/dolev/:id' component={UpdateDolev}/>
>>>>>>> 140b550be37609db0cb29240f03dfbb856c2dbec
    </Switch>
  </main>
);

export default Main;
