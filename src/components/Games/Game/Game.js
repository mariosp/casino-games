import React from "react";
import "./Game.css";
import CaptionBox from "../CaptionBox/CaptionBox";

const Game = ({game}) => {

    return(
        <div className="card-wrapper" >
            <img src={game.image} className="card-image" alt={game.name} />
            <CaptionBox caption={game.name} top/>
            <div className="image-caption">
                <div className="icon-box">
                    <div className="background-box"></div>
                    <i className="fa fa-play icon-style"></i>
                </div>
                <CaptionBox caption={game.name}/>
            </div>
        </div>
    )
};

export default Game;
