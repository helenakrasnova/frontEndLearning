import React from 'react';
import { Component } from "react";
import './wizard.css';
import FirstComponent from '../components/FirstComponent';
import SecondComponent from '../components/SecondComponent';
import ThirdComponent from '../components/ThirdComponent';
import ForthComponent from '../components/ForthComponent';
import FifthComponent from '../components/FifthComponent';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            value1: 1,
            email: '',
            firstName: '',
            lastName: '',
            tel: '',
            contractNumber: '',
            time: null,
            payment: ''
        };
    }
    clickedPreviousPage = () => {
        if (this.state.page != 1) {
            let newPage = this.state.page - 1;
            this.setState({
                page: newPage
            });
        }
    }
    clickedNextPage = () => {
        if (this.state.page != 5) {
            let newPage = this.state.page + 1;
            this.setState({
                page: newPage
            });
        }

    }
    handleFirstValueChanged = () => {
        if (this.state.value1 < 10) {
            let newValue = this.state.value1 + 1;
            this.setState({
                value1: newValue
            });
        }
    }
    handleFirstValueChangedMinus = () => {
        if (this.state.value1 > 1) {
            let newValue = this.state.value1 - 1;
            this.setState({
                value1: newValue
            });
        }
    }
    handleEmailChanged = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    handleFirstNameChanged = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }
    handleLastNameChanged = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }
    handleTelChanged = (event) => {
        this.setState({
            tel: event.target.value
        });
    }
    handleContractNumberChanged = (event) => {
        this.setState({
            contractNumber: event.target.value
        });
    }
    handleNumberChanged = (event) => {
        this.setState({
            value1: event.target.value
        });
    }
    handleTimeChanged = (event) => {
        let newTime = +event.target.value;
        this.setState({
            time: newTime
        });
    }
    handlePaymentChanged = (event) => {
        let newPayment = event.target.value;
        this.setState({
            payment: newPayment
        })
    }
    render() {
        let component = null;
        switch (this.state.page) {
            case 1: component =
                <FirstComponent
                    value1={this.state.value1}
                    onNumberChanged={this.handleNumberChanged}
                    onFirstValueChange={this.handleFirstValueChanged}
                    onFirstValueChangeMinus={this.handleFirstValueChangedMinus}
                />
                break;
            case 2: component =
                <SecondComponent
                    email={this.state.email}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    tel={this.state.tel}
                    contractNumber={this.state.contractNumber}

                    onEmailChanged={this.handleEmailChanged}
                    onFirstNameChanged={this.handleFirstNameChanged}
                    onLastNameChanged={this.handleLastNameChanged}
                    onTelChanged={this.handleTelChanged}
                    onContractNumberChanged={this.handleContractNumberChanged} />
                break;
            case 3: component =
                <ThirdComponent
                    time={this.state.time}
                    onTimeChanged={this.handleTimeChanged}
                />
                break;
            case 4: component =
                <ForthComponent
                    payment={this.state.payment}
                    onPaymentChanged={this.handlePaymentChanged} />
                break;
            case 5: component = <FifthComponent />
                break;
        }
        return (
            <>
                <div className="mainPage">
                    {component}
                    <div className="buttons">
                        <button className="button-1"
                            onClick={this.clickedPreviousPage}>previous page</button>
                        <button
                            onClick={this.clickedNextPage} className="button-1">next page</button>
                    </div>

                </div>
            </>
        );
    }
}
export default Wizard;