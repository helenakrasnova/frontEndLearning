import React from "react";
import "./moviesList.css";
import defaultMovie from '../../image/defaultMovie.jpg';

export default function MoviesList(props) {
    if (props.movies.length === 0) {
        return (
            <div className="noFilmsFound">No Films Found</div>
        );
    }
    else {
        return (
            <div className="moviesList">
                <div className="allMovies">
                    {props.movies.map((movie) => (
                        <div className="movie" key={movie.id}>
                            <img src={movie.poster_path}
                                onError={(e) => {
                                    if (e.target.src !== defaultMovie) {
                                        e.target.src = defaultMovie;
                                    }
                                }}
                                alt="" />
                            <div className="movieRow">
                                <h4 className="movieName">{movie.title}</h4>
                                <div className="movieYear">{movie.release_date ? new Date(Date.parse(movie.release_date)).getFullYear() : ""}</div>
                            </div>
                            <div className="movieRow">
                                <h5 className="movieGenre">{movie.genres.join(', ')}</h5>
                                <p className="movieRating">{movie.vote_average}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}