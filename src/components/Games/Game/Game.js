import React, {useState} from "react";
import "./Game.css";
import CaptionBox from "../CaptionBox/CaptionBox";
import PlayBox from "../PlayBox/PlayBox";
import RibbonBox from "../RibbonBox/RibbonBox";

const Game = ({game}) => {
    const [imgError, setImgError] = useState(false);

    const onError = () => setImgError(true);
    return(
        <div className="card-wrapper" >
            {
                !imgError?
                <img src={game.image} className="card-image" alt={game.name} onError={onError} />
                :
                <div className="card-image-fallback"></div>
            }
            <CaptionBox caption={game.name} top/>
            <PlayBox>
                <CaptionBox caption={game.name}/>
            </PlayBox>
            <RibbonBox caption={"TOP"} />
        </div>
    )
};

export default Game;
