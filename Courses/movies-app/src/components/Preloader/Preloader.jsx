import React from "react";
import './preloader.css';


export default function Preloader(props) {
    return (
        <>
            <div className="overlay-loader">
                <div className="load-container">
                    <div className="load-zenith"></div>
                </div>
            </div>
        </>
    );
}
