import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register'
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Todos from './components/todos/Todos';
import {  Provider  } from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
 }



const App = () => {
  useEffect(() => {
    //   // Init Materialize JS
       M.AutoInit();
        store.dispatch(loadUser())
     }, []);

    return (
  <Provider store={store}> 
    <Router> 
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Alert/>
        <Switch>
          <Route exact path="/api/todos" component={Todos}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </section>
    </Fragment>
    </Router>
    </Provider>
    
)};

export default App;
