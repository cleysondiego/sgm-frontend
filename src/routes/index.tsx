import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

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
import CreateMonitoring from '../pages/CreateMonitoring';

import Users from '../pages/Users';
import CreateUser from '../pages/CreateUser';
import ShowUser from '../pages/ShowUser';

import Presences from '../pages/Presences';

import Subjects from '../pages/Subjects';
import ShowSubjects from '../pages/ShowSubjects';
import CreateSubject from '../pages/CreateSubject';

import Reports from '../pages/Reports';

import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} user_type={[0]} />
    <Route path="/schedule" component={MonitoringSchedule} user_type={[0]} />
    <Route path="/monitor" component={BeAMonitor} user_type={[0]} />
    <Route path="/login" component={LogIn} user_type={[0]} />
    <Route path="/forgot_password" component={ForgotPassword} user_type={[0]} />
    <Route path="/reset_password" component={ResetPassword} user_type={[0]} />

    <Route
      path="/dashboard"
      component={Dashboard}
      isPrivate
      user_type={[1, 2, 3, 4]}
    />
    <Route
      path="/profile"
      component={Profile}
      isPrivate
      user_type={[1, 2, 3, 4]}
    />

    <Route
      path="/monitorings"
      component={Monitoring}
      isPrivate
      user_type={[4, 3]}
    />
    <Route
      path="/show_monitoring"
      component={ShowMonitoring}
      isPrivate
      user_type={[4, 3]}
    />
    <Route
      path="/create_monitoring"
      component={CreateMonitoring}
      isPrivate
      user_type={[4, 3]}
    />

    <Route path="/users" component={Users} isPrivate user_type={[4]} />
    <Route
      path="/create_user"
      component={CreateUser}
      isPrivate
      user_type={[4]}
    />
    <Route path="/show_user" component={ShowUser} isPrivate user_type={[4]} />

    <Route path="/presences" component={Presences} isPrivate user_type={[1]} />

    <Route
      path="/subjects"
      component={Subjects}
      isPrivate
      user_type={[3, 2, 1]}
    />
    <Route
      path="/create_subjects"
      component={CreateSubject}
      isPrivate
      user_type={[3, 2]}
    />
    <Route
      path="/show_subjects"
      component={ShowSubjects}
      isPrivate
      user_type={[3, 2, 1]}
    />

    <Route path="/reports" component={Reports} isPrivate user_type={[4]} />

    <Route path="/404" component={NotFound} user_type={[0]} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
