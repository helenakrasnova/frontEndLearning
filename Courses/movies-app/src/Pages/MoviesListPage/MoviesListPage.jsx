import React, { Component } from "react";
import Preloader from "../../components/Preloader";
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
            loading: false
        };
        this.moviesService = new MoviesService();
    }
    async componentDidMount() {
        await this.updateMovies();

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
        // await this.updateMovies();
        let searchingMovies = await this.moviesService.getMovies(this.request);
        this.setState({
            movies: searchingMovies.data,
            total: searchingMovies.total,
            // loading: false
        });
    }

    updateMovies = async () => {
        // this.setState({
        //     loading: true
        // });
        let searchingMovies = await this.moviesService.getMovies(this.request);
        this.setState({
            movies: searchingMovies.data,
            total: searchingMovies.total,
            // loading: false
        });
    }

    render() {
        if (this.state.loading === true) {
            return (<Preloader />)
        }
        else {
            return (
                <>
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
                </>
            );
        }
    }
}

export default MoviesListPage;