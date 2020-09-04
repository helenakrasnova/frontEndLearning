import React, { Component } from "react";
import './memes.css';


class Memes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstHeader: '',
            secondHeader: '',
            fontSize: 22,
            currentImage: {
                "id": "101511",
                "name": "Don't You Squidward",
                "url": "https://i.imgflip.com/26br.jpg",
                "width": 500,
                "height": 333,
                "box_count": 2
            }
        }
        this.memesEndpoint = 'https://api.imgflip.com/get_memes';
        this.memes = [];
    }

    async getMemes() {
        let response = await fetch(`${this.memesEndpoint}`);
        let memes = await response.json();
        return memes;
    }
    async componentDidMount() {
        let response = await this.getMemes();
        this.memes = response.data.memes;
    }
    handleFirstHeaderChanged = (event) => {
        this.setState({
            firstHeader: event.target.value
        });
    }
    handleSecondHeaderChanged = (event) => {
        this.setState({
            secondHeader: event.target.value
        });
    }
    handleFontSizeChanged = (event) => {
        let newFontSize = Number(event.target.value);
        this.setState({
            fontSize: newFontSize
        });
    }
    handleGenerateMemClicked = () => {
        let imageIndex = this.randomNumber(0, this.memes.length);
        let newImage = this.memes[imageIndex];
        this.setState({
            currentImage: newImage
        });

    }
    randomNumber(min, max) {
        let random = Math.floor(min + Math.random() * (max + 1 - min));
        return random;
    }

    render() {
        return (
            <div className="memes">
                <div className="inputs">
                    <input
                        type="text"
                        className="values"
                        value={this.state.firstHeader}
                        onChange={this.handleFirstHeaderChanged} />
                    <input
                        type="text"
                        className="values"
                        value={this.state.secondHeader}
                        onChange={this.handleSecondHeaderChanged} />
                    <input
                        type="number"
                        className="values"
                        value={this.state.fontSize}
                        onChange={this.handleFontSizeChanged} />
                    <button
                        className="generate"
                        onClick={this.handleGenerateMemClicked}>Generate!</button>
                </div>
                <div className="images">
                    <h2
                        className="heading top"
                        style={{ fontSize: this.state.fontSize }}>{this.state.firstHeader}</h2>
                    <img src={this.state.currentImage.url}
                        style={{ height: this.state.currentImage.height, width: this.state.currentImage.width }}></img>
                    <h2
                        className="heading bottom"
                        style={{ fontSize: this.state.fontSize }}>{this.state.secondHeader}</h2>
                </div>
            </div>
        );
    }
}
export default Memes;