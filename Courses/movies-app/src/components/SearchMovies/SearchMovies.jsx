import React, { Component } from "react";
import './searchMovies.css';

class SearchMovies extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '', searchBy: 'title' };
    }
    handleChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    }
    handleTitleClicked = () => {
        this.setState({
            searchBy: 'title'
        });
    }
    handleGenreClicked = () => {
        this.setState({
            searchBy: 'genre'
        })
    }
    handleSearchClicked = ()=>{
        this.props.onSearchClicked(this.state);
    }

    render() {
        return (
            <div className="searchMovies" >

                <div className="filter">
                    <div className="searching">
                        <h1 className="findYourMovie">Find your movie</h1>
                        <input
                            type="text"
                            className="findMovies"
                            value={this.state.query}
                            onChange={this.handleChange} />
                        <div className="searchBy">
                            <div className="searchByChoice">
                                Search by
                                <button
                                    onClick={this.handleTitleClicked}
                                    className={`searchMoviesBy ${this.state.searchBy === 'title' ? "buttonClicked" : ''}`}>
                                    Title
                                </button>
                                <button
                                    onClick={this.handleGenreClicked}
                                    className={`searchMoviesBy ${this.state.searchBy === 'genre' ? "buttonClicked" : ''}`}>
                                    Genre
                                </button>
                            </div>
                            <button 
                                onClick={this.handleSearchClicked}
                                className="searchMoviesButton">
                                Search
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default SearchMovies;