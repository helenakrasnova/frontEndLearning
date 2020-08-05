import React from "react";
import './notFound.css';
import { Link } from "react-router-dom";


export default function NotFound(props) {
    return (
        <>
            <div className="notFound">
                Error 404: Page not found.
            <Link to="/movies">
                    <button className="homePage">Home page</button>
                </Link>
            </div>
        </>
    );
}
