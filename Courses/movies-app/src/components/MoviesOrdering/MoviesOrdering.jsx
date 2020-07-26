import React from "react";
import './moviesOrdering.css';

export default function MoviesOrdering(props) {
    return (
        <div className="moviesOrdering">
            <h3 className="foundedMovies" >{props.total} movies found</h3>
            <div className="choiceOfSelected">
                <h3 className="foundedMovies">Sort By</h3>
                <select
                    name="sortBy"
                    className="sortBy"
                    size="1"
                    onChange={event => props.onSortByChanged(event.target.value)}>
                    <option value="release_date" >release date</option>
                    <option value="vote_average" >rating</option>
                </select>
                <select
                    name="sortOrder"
                    className="sortOrder"
                    size="1"
                    onChange={event => props.onSortOrderChanged(event.target.value)}>
                    <option value="desc">desc</option>
                    <option value="asc">asc</option>
                </select>
            </div>

        </div>
    );
}