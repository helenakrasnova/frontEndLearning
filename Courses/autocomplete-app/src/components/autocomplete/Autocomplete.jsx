import React, { Component } from 'react';
import { countries } from '../../countries.js';
import './autocomplete.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundedCountries: [],
            query: '',
            suggestions: 0
        }
    }
    handleCountryChanged = (event) => {
        if (event.target.value) {
            let stringCountry = event.target.value[0].toUpperCase() + event.target.value.slice(1).toLowerCase();
            let result = countries.filter(item => item.includes(stringCountry));
            let newSuggestions = result.length;
            this.setState({
                query: event.target.value,
                foundedCountries: result,
                suggestions: newSuggestions
            });
        }
        else {
            this.setState({
                query: '',
                suggestions: 0,
                foundedCountries: []
            });
        }
    }
    handleCountryClicked = (event) => {

        this.setState({
            query: event.target.textContent,
            suggestions: 0,
            foundedCountries: []
        });
    }
    render() {
        return (
            <div className="main">
                <div className="autocomplete">
                    <h2>Auto Complete</h2>
                    <input type="text"
                        name="country"
                        value={this.state.query}
                        onChange={this.handleCountryChanged}
                        id="query" />
                    {this.state.foundedCountries.map((country) => (
                        <div
                            className="country"
                            key={country}
                            onClick={this.handleCountryClicked}>
                            {country}
                        </div>
                    ))}
                    <button>Suggestions: {this.state.suggestions}</button>
                </div>
            </div>
        );
    }
}
export default Autocomplete;