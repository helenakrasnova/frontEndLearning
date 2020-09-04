import React, { Component }  from 'react';
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
            bottlesCount: 1,
            email: '',
            firstName: '',
            lastName: '',
            tel: '',
            contractNumber: '',
            time: null,
            payment: 'cash',
            date: null,
            step2notValid: false,
            step3notValid: false,
            invalidTel: false
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
            if (this.state.page === 1 || this.state.page === 4) {
                let newPage = this.state.page + 1;
                this.setState({
                    page: newPage
                });
            }
            if (this.state.page === 2) {
                let telNumberRegExp = /^\+\d{12}$/gi;
                if (this.state.email && this.state.firstName && this.state.lastName && this.state.tel && this.state.contractNumber) {
                    let matchResult = this.state.tel.match(telNumberRegExp);
                    if (matchResult === null) {
                        this.setState({
                            invalidTel: true
                        });
                    }
                    else {
                        let newPage = this.state.page + 1;
                        this.setState({
                            page: newPage,
                            step2notValid: false,
                            invalidTel: false
                        });
                    }
                }
                else {
                    this.setState({
                        step2notValid: true
                    });
                }
            }
            if (this.state.page === 3) {
                if (this.state.time && this.state.time) {
                    let newPage = this.state.page + 1;
                    this.setState({
                        page: newPage,
                        step3notValid: false
                    });
                }
                else {
                    this.setState({
                        step3notValid: true
                    });
                }
            }
        }

    }
    handleFirstValueChanged = () => {
        if (this.state.bottlesCount < 10) {
            let newValue = this.state.bottlesCount + 1;
            this.setState({
                bottlesCount: newValue
            });
        }
    }
    handleFirstValueChangedMinus = () => {
        if (this.state.bottlesCount > 1) {
            let newValue = this.state.bottlesCount - 1;
            this.setState({
                bottlesCount: newValue
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
        });
    }
    handleDateChanged = (event) => {
        this.setState({
            date: event.target.value
        });
    }
    render() {
        let component = null;
        switch (this.state.page) {
            case 1: component =
                <FirstComponent
                    bottlesCount={this.state.bottlesCount}
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
                    invalidTel={this.state.invalidTel}
                    step2notValid={this.state.step2notValid}
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
                    date={this.state.date}
                    onTimeChanged={this.handleTimeChanged}
                    onDateChanged={this.handleDateChanged}
                    step3notValid={this.state.step3notValid}
                />
                break;
            case 4: component =
                <ForthComponent
                    payment={this.state.payment}
                    onPaymentChanged={this.handlePaymentChanged} />
                break;
            case 5: component = <FifthComponent
                bottlesCount={this.state.bottlesCount}
                email={this.state.email}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                tel={this.state.tel}
                contractNumber={this.state.contractNumber}
                time={this.state.time}
                payment={this.state.payment}
                date={this.state.date} />
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