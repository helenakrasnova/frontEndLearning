import React, { Component } from "react";
import './loginPage.css';
import { AuthService } from "../../services/AuthService";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.userNameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.authService = new AuthService();
        this.state = {
            loginError: false
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        let username = this.userNameInput.current.value;
        let password = this.passwordInput.current.value;
        let result = this.authService.logIn(username, password);
        if (result) {
            this.props.history.push('/');
        }
        else {
            this.setState({
                loginError: true
            });
        }
    }
    render() {
        return (
            <>
                <form
                    className="transparent"
                    onSubmit={this.handleFormSubmit}>
                    <div className="formFilter">
                        <h3 className="formText"> provide your credentials</h3>
                        <div className="form-inner">
                            <label htmlFor="username">UserName</label>
                            <input
                                type="text"
                                className="userName"
                                ref={this.userNameInput} />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="password"
                                ref={this.passwordInput} />
                            <label htmlFor=""></label>
                            <input
                                type="submit"
                                value="log-in"/>
                                {this.state.loginError?<div className="login-error">invalid username or password</div>:''}
                        </div> 
                    </div>
                </form>
            </>
        );
    }
}
export default LoginPage;