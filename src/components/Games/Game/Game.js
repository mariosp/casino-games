import React from "react";
import "./Game.css";

const Game = ({game}) => {

    return(
        <div className="card-wrapper">
            <img src={game.image} className="card-image" />
        </div>
    )
};

export default Game;
