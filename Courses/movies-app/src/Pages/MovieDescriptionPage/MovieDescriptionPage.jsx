import React, { Component } from "react";
import Preloader from "../../components/Preloader";
import MoviesPagination from "../../components/MoviesPagination";
import MoviesList from "../../components/MoviesList";
import MovieDescription from "../../components/MovieDescription"
import { MoviesService } from "../../services/MoviesService";
import { SearchRequest } from "../../models/searchRequest";

class MovieDescriptionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            similarMovies: [],
            total: 0,
            loading: false
        };
        this.moviesService = new MoviesService();
        this.request = new SearchRequest();
    }
    async componentDidMount() {
        await this.updatePage();
    }
    async componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            await this.updatePage();
        }
    }
    async updatePage() {
        this.setState({
            loading: true
        });
        let movie = await this.moviesService.getMovie(this.props.match.params.id);
        if (movie === null) {
            this.props.history.push('/notFound');
        }
        else {
            this.request.searchBy = 'genres';
            this.request.search = movie.genres ? movie.genres[0] : '';
            let similarMoviesResponse = await this.moviesService.getMovies(this.request);
            this.setState({
                movie: movie,
                similarMovies: similarMoviesResponse.data,
                total: similarMoviesResponse.total,
                loading: false
            });
        }
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
        if (this.state.loading === true) {
            return (<Preloader />)
        }
        else {
            return (
                <>
                    <MovieDescription
                        movie={this.state.movie}
                        total={this.state.total} />

                    <MoviesList
                        movies={this.state.similarMovies} />
                    <MoviesPagination
                        onPaginationChanged={this.handlePaginationChanged}
                        total={this.state.total} />
                </>
            );
        }
    }
}
export default MovieDescriptionPage;