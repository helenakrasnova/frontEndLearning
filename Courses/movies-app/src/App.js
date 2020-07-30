import React from 'react';
import './App.css';

import MoviesListPage from './Pages/MoviesListPage';
import MovieDescriptionPage from './Pages/MovieDescriptionPage';
import NotFound from './Pages/NotFound';
import Error from './Pages/Error';



function App() {
  return (
    <>
      {/* <MoviesListPage /> */}
      <MovieDescriptionPage/> 
      {/* <NotFound /> */}
      {/* <Error /> */}
    </>

  );
}

export default App;

