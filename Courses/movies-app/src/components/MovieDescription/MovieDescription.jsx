import React from "react";
import './movieDescription.css';
import defaultMovie from '../../image/defaultMovie.jpg';
import { Link } from "react-router-dom";

export default function MovieDescription(props) {
    let firstGenre = props.movie.genres ? props.movie.genres[0] : '';
    return (
        <div className="movieDescription">
            <div className="filmDescription">
                <div className="movieDescription_filter">
                    <div className="movieDescription_column1">
                        <img
                            src={props.movie.poster_path}
                            onError={e => {
                                if (e.target.src !== defaultMovie) {
                                    e.target.src = defaultMovie;
                                }
                            }}
                            alt="" />
                    </div>
                    <div className="movieDescription_column2">
                        <div className="movieDescription_row row_first">
                            <p className="movieDescription_p1">{props.movie.title}</p>
                            <div className="rating">{props.movie.vote_average}</div>
                            <Link to="/movies">
                            <button className="newSearch">search</button>
                            </Link>
                        </div>
                        <div className="movieDescription_row">
                            <p className="movieDescription_p3">{props.movie.tagline}</p>
                        </div>
                        <div className="movieDescription_row">
                            <p className="movieDescription_p2">{props.movie.release_date ? new Date(Date.parse(props.movie.release_date)).getFullYear() : ""}</p>
                        <p className="movieDescription_p2">{props.movie.runtime?`${props.movie.runtime} min`:''}</p>
                        </div>
                        <div className="movieDescription_row">
                            <p className="movieDescription_p3">
                                {props.movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filmsBy">
                        <div className="filmsByText"> Films by {firstGenre} genre - {props.total}</div>
            </div>
        </div>

    );
}
