import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Main from './components/views/main';
import Repositories from './components/views/repositories';
import Header from './components/ui-components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <Header />
          <Switch>
            <Route exact path="/" component={ Main }></Route>
            <Route path="/repos/:id" component={ Repositories }></Route>
          </Switch>
        </Provider>
      </div>
    );
  };
};

export default App;