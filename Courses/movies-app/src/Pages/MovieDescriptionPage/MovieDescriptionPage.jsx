import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MoviesPagination from "../../components/MoviesPagination";
import MoviesList from "../../components/MoviesList";
import MovieDescription from "../../components/MovieDescription"
import { MoviesService } from "../../services/MoviesService";
import { SearchRequest } from "../../models/searchRequest";

class MovieDescriptionPage extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            similarMovies: [],
            total: 0
        };
        this.moviesService = new MoviesService();
        this.request = new SearchRequest();
    }
    async componentDidMount() {
        let movie = await this.moviesService.getMovie(153158);
        this.request.searchBy = 'genres';
        this.request.search = movie.genres ? movie.genres[0] : '';
        let similarMoviesResponse = await this.moviesService.getMovies(this.request);
        this.setState({
            movie: movie,
            similarMovies: similarMoviesResponse.data,
            total: similarMoviesResponse.total
        });

    }
    handlePaginationChanged = async (paginationData) => {
        this.request.limit = paginationData.limit;
        this.request.offset = paginationData.offset;
        await this.updateMovies();
    }
    updateMovies = async () => {
        let similarMovies = await this.moviesService.getMovies(this.request);
        this.setState({
            similarMovies: similarMovies.data,
            total: similarMovies.total
        });
    }
    render() {
        return (
            <>
                <Header />
                <MovieDescription
                    movie={this.state.movie}
                    total={this.state.total} />

                <MoviesList
                    movies={this.state.similarMovies} />
                <MoviesPagination
                    onPaginationChanged={this.handlePaginationChanged}
                    total={this.state.total} />
                <Footer />
            </>
        );
    }
}
export default MovieDescriptionPage;