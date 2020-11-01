import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './layouts';
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/Register';

import { Provider } from "react-redux";
import store from "./store"


var authenticated = false;
if(localStorage.getItem("token")){
  authenticated = true
}

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
      <Switch>
        <Route  path="/login" exact component={Login} />
        <Route  path="/signup" exact component={SignUp} />
        <PrivateRoute authenticated={authenticated}  path="/" component={Dashboard} />
      </Switch>
    </AppLayout>
    </Provider>
    
  );
}

export default App;