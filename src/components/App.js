import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import NotFoundPage from './NotFoundPage';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Redirect from="about-page" to="about" />
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App;
