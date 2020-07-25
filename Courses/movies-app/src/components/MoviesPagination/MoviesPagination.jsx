import React from "react";
import "./moviesPagination.css";

export default function MoviesPagination() {
    return (
        <div className="moviesPagination">
            <ul className="pagination">
                <li>&#60;&#60;</li>
                <li>&#60;</li>
                <input type="number" name="num" min="1" max="999" size="2" />
                <li>&#62;</li>
                <li>&#62;&#62;</li>
            </ul>
        </div>
    );
}