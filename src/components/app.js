import React from 'react';
import { Footer } from './sections/footer';
import { Header } from './sections/header';
import { Todo } from '../pages/todo-page/todo';
import { TodoState } from '../context/todo/todo-state';
import { Home } from '../pages/home-page/home';
import { Calculator } from '../pages/calculator-page/calculator';
import { About } from '../pages/about-page/about'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

export const App = () => {
  return(
      <TodoState>
        <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/about" component={ About }/>
              <Route path="/todo" component={ Todo }/>
              <Route path="/calculator" component={ Calculator }/>
            </Switch>
        </Router>
        <Footer />
      </TodoState>
  )
}
