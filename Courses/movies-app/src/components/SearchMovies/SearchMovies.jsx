import React, { Component } from "react";
import './searchMovies.css';

class SearchMovies extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="searchMovies" >

                <div className="filter">
                    <h1 className="findYourMovie">Find your movie</h1>
                    <input type="text" className="findMovies" />
                    <div className="searchBy">
                        <div className="searchByChoice">
                            Search by
                            <button className="searchMoviesBy">Title</button>
                            <button className="searchMoviesBy">Genre</button>
                            </div>
                        <button className="searchMoviesButton">Search</button>
                        </div>

                </div>
            </div>
        );

    }

}

export default SearchMovies;