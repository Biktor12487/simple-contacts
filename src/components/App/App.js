import React from 'react';
import {
  BrowserRouter, Route, Router, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Contacts, AddContacts } from '../../pages';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route exact path="/contacts" componet={Contacts} />
        <Route exact path="/add-contact" componet={AddContacts} />
        <Route component={Contacts} />
      </Switch>
    </Router>
  </BrowserRouter>
);
export default App;
