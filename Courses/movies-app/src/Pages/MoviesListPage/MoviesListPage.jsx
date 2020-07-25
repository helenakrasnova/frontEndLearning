import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MoviesPagination from "../../components/MoviesPagination";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesOrdering from "../../components/MoviesOrdering";
import SearchMovies from '../../components/SearchMovies';
import { MoviesService } from '../../services/MoviesService';
import { SearchRequest } from "../../models/searchRequest";

class MoviesListPage extends Component {
    constructor() {
        super();
        this.state = { movies: [] };
        this.moviesService = new MoviesService();
    }
    async componentDidMount() {
        let movies = await this.moviesService.getMovies();
        this.setState({
            movies: movies.data
        });
    }
    handleSearchClicked = async (searchingParams) => {
        let searchRequest = new SearchRequest();
        searchRequest.searchBy = searchingParams.searchBy;
        searchRequest.search = searchingParams.query;
        let searchingMovies = await this.moviesService.getMovies(searchRequest);
        this.setState({
            movies: searchingMovies.data
        });
    }
    render() {
        return (
            <>
                <Header />
                <SearchMovies onSearchClicked={this.handleSearchClicked} />
                <MoviesOrdering />
                <MoviesList movies={this.state.movies} />
                <MoviesPagination />
                <Footer />
            </>
        );

    }

}

export default MoviesListPage;