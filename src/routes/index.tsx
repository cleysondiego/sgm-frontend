import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import MonitoringSchedule from '../pages/MonitoringSchedule';
import Monitor from '../pages/Monitor';
import LogIn from '../pages/LogIn';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/schedule" component={MonitoringSchedule} />
    <Route path="/monitor" component={Monitor} />
    <Route path="/login" component={LogIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
