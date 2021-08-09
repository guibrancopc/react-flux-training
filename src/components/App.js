import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import Courses from './CoursesPage';

function getPage() {
  const route = window.location.pathname;
  if (route === '/about') {
    return <AboutPage />;
  }
  if (route === '/courses') {
    return <Courses />;
  }
  return <HomePage />;
}

function App() {
  return (
    <div className="container-fluid">
      <Header />
      { getPage() }
    </div>
  )
}

export default App;
