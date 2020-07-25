import React from "react";
import "./moviesList.css";


export default function MoviesList(props) {
    return (

        <div className="moviesList">
            <div className="allMovies">
                {props.movies.map((movie) => (
                    <div className="movie" key={movie.id}>
                        <img src={movie.poster_path} alt="" />
                        <div className="movieRow">
                            <h4 className="movieName">{movie.title}</h4>
                            <div className="movieYear">{movie.release_date? new Date(Date.parse(movie.release_date)).getFullYear():""}</div>
                        </div>
                        <h5 className="movieGenre">{movie.genres.join(', ')}</h5>
                    </div>
                ))}
            </div>
        </div>


    );

}