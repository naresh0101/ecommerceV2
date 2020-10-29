import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './layouts';
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/Register';


function App() {
  return (
    <AppLayout>
      <Switch>
        <Route  path="/login" exact component={Login} />
        <Route  path="/signup" exact component={SignUp} />
        <PrivateRoute  path="/" component={Dashboard} />

      </Switch>
    </AppLayout>
  );
}

export default App;