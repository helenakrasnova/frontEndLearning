import React from "react";
import './moviesOrdering.css';

export default function MoviesOrdering() {
    return (
        <div className="moviesOrdering">
            <h3 className="foundedMovies">_ movies found</h3>
            <div className="choiceOfSelected">
                <h3 className="foundedMovies">Sort By</h3>
                <select name="select1" id="select1" size="1">
                    <option value="release">release date</option>
                    <option value="rating">rating</option>
                </select>
                <select name="select2" id="select2" size="1">
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </select>
            </div>

        </div>
    );
}