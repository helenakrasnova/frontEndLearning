import React, { Component } from "react";
import "./moviesPagination.css";

class MoviesPagination extends Component {
    constructor(props) {
        super(props);

        this.pagingData = {
            limit: 10,
            offset: 0,
        };
        this.state = {
            currentPage: 1,
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.total !== prevProps.total) {
            this.setState({
                currentPage: 1,
            });
            this.pagingData.offset = 0;
        }
    }
    handleLimitChanged = (event) => {
        this.pagingData.limit = +event.target.value;
        this.props.onPaginationChanged(this.pagingData);
    }

    handlePreviousPageClicked = () => {
        let newOffset = this.pagingData.offset - this.pagingData.limit;
        newOffset = newOffset <= 0 ? 0 : newOffset;
        this.pagingData.offset = newOffset;
        this.setState((prev) => {
            let currentPage = prev.currentPage - 1;
            currentPage = currentPage < 1 ? 1 : currentPage;
            return {
                currentPage: currentPage
            }
        });

        this.props.onPaginationChanged(this.pagingData);
    }

    handleNextPageClicked = () => {
        this.pagingData.offset = this.pagingData.offset + this.pagingData.limit;
        //total toDo
        //this.props.total
        this.setState((prev) => ({
            currentPage: prev.currentPage + 1
        }));

        this.props.onPaginationChanged(this.pagingData);
    }
    handleFirstPageClicked = () => {
        this.pagingData.offset = 0;
        this.setState({
            currentPage: 1
        });
        this.props.onPaginationChanged(this.pagingData);
    }
    handleLastPageClicked = () => {
        let totalPages = Math.ceil(this.props.total / this.pagingData.limit);
        this.setState({
            currentPage: totalPages
        });
        let lastPageOffset = (totalPages-1) * this.pagingData.limit;
        this.pagingData.offset = lastPageOffset;
        this.props.onPaginationChanged(this.pagingData);
    }

    render() {
        return (
            <div className="moviesPagination">
                <div className="pagination_block"></div>
                <div className="pagination_block">
                    <ul className="pagination">
                        <li
                            onClick={this.handleFirstPageClicked}
                        >&#60;&#60;</li>
                        <li
                            onClick={this.handlePreviousPageClicked}
                        >&#60;</li>
                        <input
                            type="number"
                            name="num"
                            min="1"
                            max="999"
                            size="2"
                            value={this.state.currentPage}
                            readOnly />
                        <li
                            onClick={this.handleNextPageClicked}
                        >&#62;</li>
                        <li
                            onClick={this.handleLastPageClicked}
                        >&#62;&#62;</li>
                    </ul>
                </div>
                <div className="pagination_block block_select">
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
            </div>
        )
    }
}

export default MoviesPagination;


// стрелка на верх на сёрч
// стилизация рейтинга
// стилизация пэйджинга
// nextPage click disable чтобы не перешло на большее