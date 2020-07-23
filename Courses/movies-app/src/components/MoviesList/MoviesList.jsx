import React from "react";
import "./moviesList.css";
import killbill from '../../image/killbill.jpg';
import killbill2 from '../../image/killbill2.jpg';
import pulpFiction from '../../image/pulpFiction.png';
import theHatefulEight from '../../image/theHatefulEight.jpeg';
import jackieBrown from '../../image/jackieBrown.png';
import reservoirDogs from '../../image/reservoirDogs.jpg';
import fourRooms from '../../image/fourRooms.jpg';
import django from '../../image/django.jpg';

export default function MoviesList() {
    return (
        <div className="moviesList">
            <div className="movie movie1">
                <img src={killbill2} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">killbill2</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie2">
                <img src={killbill} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">killbill</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie3">
                <img src={pulpFiction} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">pulpFiction</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie4">
                <img src={theHatefulEight} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">theHatefulEight</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie5">
                <img src={jackieBrown} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">jackieBrown</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie6">
                <img src={reservoirDogs} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">reservoirDogs</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie7">
                <img src={fourRooms} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">fourRooms</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
            <div className="movie movie8">
                <img src={django} alt="" />
                <div className="movieRow">
                    <h4 className="movieName">django</h4>
                    <div className="movieYear">2000</div>
                </div>
                <h5 className="movieGenre">Adventure, criminal</h5>
            </div>
        </div>
    );
}