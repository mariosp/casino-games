import React, {useState} from "react";
import "./Game.css";
import CaptionBox from "../CaptionBox/CaptionBox";

const Game = ({game}) => {
    const [imgError, setImgError] = useState(false);

    const onError = () => setImgError(true);
    return(
        <div className="card-wrapper" >
            {!imgError? <img src={game.image} className="card-image" alt={game.name} onError={onError} />
                : <div className="card-image-fallback"></div>
            }
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
