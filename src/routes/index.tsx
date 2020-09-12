import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MonitoringSchedule from '../pages/MonitoringSchedule';
// import BeAMonitor from '../pages/BeAMonitor';
import LogIn from '../pages/LogIn';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/schedule" component={MonitoringSchedule} />
    <Route path="/login" component={LogIn} />

    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
