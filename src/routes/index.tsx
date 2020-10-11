import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import MonitoringSchedule from '../pages/MonitoringSchedule';
import BeAMonitor from '../pages/BeAMonitor';
import LogIn from '../pages/LogIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Monitoring from '../pages/Monitoring';
import ShowMonitoring from '../pages/ShowMonitoring';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/schedule" component={MonitoringSchedule} />
    <Route path="/monitor" component={BeAMonitor} />
    <Route path="/login" component={LogIn} />
    <Route path="/forgot_password" component={ForgotPassword} />
    <Route path="/reset_password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/monitorings" component={Monitoring} isPrivate />
    <Route path="/show_monitoring" component={ShowMonitoring} isPrivate />
  </Switch>
);

export default Routes;
