import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MoviesPagination from "../../components/MoviesPagination";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesOrdering from "../../components/MoviesOrdering";
import SearchMovies from '../../components/SearchMovies';


class MoviesListPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Header />
                <SearchMovies />
                <MoviesOrdering />
                <MoviesList />
                <MoviesPagination />
                <Footer />
            </>
        );

    }

}

export default MoviesListPage;