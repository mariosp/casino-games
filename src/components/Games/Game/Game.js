import React, {useState} from "react";
import "./Game.css";
import CaptionBox from "../CaptionBox/CaptionBox";
import PlayBox from "../PlayBox/PlayBox";
import RibbonBox from "../RibbonBox/RibbonBox";

const getRibbonCaption = (game)=> {
    if(game.categories.includes("top")) return "top";
    else if(game.categories.includes("new")) return "new";
    else return null;
};

const Game = ({game, category}) => {
    const [imgError, setImgError] = useState(false);

    const showRibbon = category !== "topgames" && category !=="newgames"? getRibbonCaption(game) : null;
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
            {showRibbon && <RibbonBox caption={showRibbon} color={showRibbon==="top"? "primary": "secondary"}/>}
        </div>
    )
};

export default Game;
