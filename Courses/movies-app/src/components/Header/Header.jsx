import React from "react";
import './header.css';
import logo from '../../image/logo.png';

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <header className="App-header">
                <h1>NetflixRoulette</h1>
            </header>
        </div>

    );
}
