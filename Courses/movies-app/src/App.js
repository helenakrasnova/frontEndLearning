import React from 'react';
import './App.css';
import MoviesListPage from './Pages/MoviesListPage';
import MovieDescriptionPage from './Pages/MovieDescriptionPage';
import NotFound from './Pages/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import { AuthService } from './services/AuthService';
//import TestTask from './components/TestTask/TestTask';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MoviesListPage} />
          <Route exact path="/movies" component={MoviesListPage} />
          <Route path="/movies/:id" component={MovieDescriptionPage} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
      {/* <Error /> */}
      {/* <TestTask/> */}
    </>

  );
}

export default App;

