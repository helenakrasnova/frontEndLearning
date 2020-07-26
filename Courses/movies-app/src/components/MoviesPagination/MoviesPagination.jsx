import React, { Component } from "react";
import "./moviesPagination.css";

class MoviesPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            offset: 0,
            currentPage: 1,
        };
    }
    handleLimitChanged = (event) => {
        this.setState({
            limit: event.target.value,
        });
    }
    handlePreviousPageClicked = () => {
        let newOffset = this.state.offset - this.state.limit;
        newOffset = newOffset <= 0 ? 0 : newOffset;

        let currentPage = this.state.currentPage-1;
        currentPage = currentPage < 1 ? 1 : currentPage;
        this.setState({
            offset: newOffset,
            currentPage: currentPage
        });
    }
    handleNextPageClicked = () => {
        debugger
        let newOffset = this.state.offset + this.state.limit;
        let currentPage = this.state.currentPage+1;
       //total toDo
        this.setState({
            offset: newOffset,
            currentPage:currentPage,
        });
    }
    render() {
        return (
            <div className="moviesPagination">
                <ul className="pagination">
                    <li>&#60;&#60;</li>
                    <li
                        onClick={this.handlePreviousPageClicked}
                    >&#60;</li>
                    <input type="number" name="num" min="1" max="999" size="2" value={this.state.currentPage} readOnly />
                    <li
                        onClick={this.handleNextPageClicked}
                    >&#62;</li>
                    <li>&#62;&#62;</li>
                </ul>
                <select
                    name="limit"
                    className="limit"
                    size="1"
                    onChange={this.handleLimitChanged}>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        )
    }
}

export default MoviesPagination;