import React, { Component } from "react";
import './testTask.css';

class TestTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
        };
    }
    handleChange = (event) => {
        this.setState({
            query: event.target.value,

        });

    }
    inputStateHandler = () => {
        if (this.state.query) {
            this.setState({
                query: '',
                items: [...this.state.items, this.state.query]
            });
        }

    }
    deletedItem = (event) => {
        let index = event.target.dataset.index;
        this.state.items.splice(+index, 1);
        this.setState({
            items: this.state.items
        });
    }

    render() {
        return (
            <div className="testTask">
                <input type="text"
                    value={this.state.query}
                    onChange={this.handleChange} />
                <button className="testTaskButton"
                    onClick={this.inputStateHandler}>
                    <span>ADD</span>
                </button>
                {this.state.items.map((item, index) =>
                    <div key={index}>
                        {item}
                        <button className="testTaskButton"
                            data-index={index}
                            onClick={this.deletedItem}>delete</button>
                    </div>)}
            </div>
        );

    }

}

export default TestTask;