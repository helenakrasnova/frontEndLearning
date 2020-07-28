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
        this.request = new SearchRequest();
        this.state = {
            movies: [],
            total: 0,
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
        this.request.offset = 0;
        this.request.searchBy = searchingParams.searchBy;
        this.request.search = searchingParams.query;

        await this.updateMovies();

    }
    handleSortByChanged = async (sortByValue) => {
        this.request.sortBy = sortByValue;
        await this.updateMovies();

    }
    handleSortOrderChanged = async (sortOrderValue) => {
        this.request.sortOrder = sortOrderValue;
        await this.updateMovies();
    }
    handlePaginationChanged = async (paginationData) => {
        this.request.limit = paginationData.limit;
        this.request.offset = paginationData.offset;
        await this.updateMovies();
    }

    updateMovies = async () => {
        let searchingMovies = await this.moviesService.getMovies(this.request);
        this.setState({
            movies: searchingMovies.data,
            total: searchingMovies.total,
        });
    }

    render() {
        return (
            <>
                <Header />
                <SearchMovies
                    onSearchClicked={this.handleSearchClicked} />
                <MoviesOrdering
                    total={this.state.total}
                    onSortByChanged={this.handleSortByChanged}
                    onSortOrderChanged={this.handleSortOrderChanged} />
                <MoviesList
                    movies={this.state.movies} />
                <MoviesPagination
                    onPaginationChanged={this.handlePaginationChanged}
                    total={this.state.total} />
                <Footer />
            </>
        );

    }

}

export default MoviesListPage;