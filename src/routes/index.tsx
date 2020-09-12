import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MonitoringSchedule from '../pages/MonitoringSchedule';
import LogIn from '../pages/LogIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/agenda" component={MonitoringSchedule} />
    <Route path="/entrar" component={LogIn} />
  </Switch>
);

export default Routes;
