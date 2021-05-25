import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Terebovlia from './conteiners/pages/terebovlia/terebovlia';
import NotFound from './conteiners/pages/notfound';
import Home from './conteiners/pages/home';
import LinksPage from './linkspage';
import Uploadtest from './uploadtest';
import Zbarazh from './conteiners/pages/zbarazh/zbarazh';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/terebovlia" component={Terebovlia} />
        <Route path="/404" component={NotFound} />
        <Route path="/linkspage" component={LinksPage} />
        <Route path='/uploadtest' component={Uploadtest} />
        <Route path='/zbarazh' component={Zbarazh} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
