import React from "react";
import './header.css';
import logo from '../../image/logo.png';
import { Link } from "react-router-dom";
import { AuthService } from "../../services/AuthService";

export default function Header(props) {
    let authService = new AuthService();
    let isAuthenticated = authService.isAuthenticated();
    return (
        <div className="header">
            <div className="App-header">
                <img src={logo} alt="logo" />
                <h1 className="netflix">netflixRoulette</h1>
            </div>
            <div className="App-header headerLogin">

                {isAuthenticated ?
                    (<>
                        <div className="login">
                            Hello, {authService.userName}
                        </div>
                        <button
                            className="login"
                            onClick={() => { 
                                authService.logOut();
                                debugger
                                props.history.push('/login'); }}>
                            logOut
                        </button>
                    </>)
                    : (<Link to="/login">
                        <button className="login">login</button>
                    </Link>)}

            </div>
        </div>
    );
}
