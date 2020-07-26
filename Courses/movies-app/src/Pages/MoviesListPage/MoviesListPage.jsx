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
        let request = new SearchRequest();
        this.state = {
            movies: [],
            total: 0,
            request: request,
        };
        this.moviesService = new MoviesService();
    }
    async componentDidMount() {
        let response = await this.moviesService.getMovies();
        this.setState({
            movies: response.data,
            total: response.total,
        });

    }
    handleSearchClicked = async (searchingParams) => {
        let request = this.state.request;
        request.searchBy = searchingParams.searchBy;
        request.search = searchingParams.query;
        this.setState({
            request: request
        });
        await this.updateMovies();

    }
    handleSortByChanged = async (sortByValue) => {
        let request = this.state.request;
        request.sortBy = sortByValue;
        this.setState({
            request: request
        })
        await this.updateMovies();

    }
    handleSortOrderChanged = async (sortOrderValue) => {
        let request = this.state.request;
        request.sortOrder = sortOrderValue;
        this.setState({
            request: request
        })
        await this.updateMovies();
    }

    updateMovies = async () => {
        let searchingMovies = await this.moviesService.getMovies(this.state.request);
        this.setState({
            movies: searchingMovies.data,
            total: searchingMovies.total,
        });
    }

    render() {
        return (
            <>
                <Header />
                <SearchMovies onSearchClicked={this.handleSearchClicked} />
                <MoviesOrdering
                    total={this.state.total}
                    onSortByChanged={this.handleSortByChanged}
                    onSortOrderChanged={this.handleSortOrderChanged}
                />
                <MoviesList movies={this.state.movies} />
                <MoviesPagination />
                <Footer />
            </>
        );

    }

}

export default MoviesListPage;