import React, {useEffect, useState} from "react";
import "./Game.css";
import CaptionBox from "../CaptionBox/CaptionBox";
import PlayBox from "../PlayBox/PlayBox";
import RibbonBox from "../RibbonBox/RibbonBox";

const getRibbonCaption = (game)=> {
    if(game.categories.includes("top")) return "top";
    else if(game.categories.includes("new")) return "new";
    else return null;
};

const Game = ({game, category, jackpot = null}) => {
    const [imgError, setImgError] = useState(false);
    const [showRibbon, setRibbon] = useState(null);
    useEffect(()=>{
       setRibbon(category !== "topgames" && category !=="newgames"? getRibbonCaption(game) : null);
    },[category]);

    useEffect(()=> {

    },[jackpot]);
    const onError = () => setImgError(true);
    console.log("RENDER AGAIN")

    const jackpotToPounds = jackpot && new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(jackpot.amount);
    return(
        <div className="card-wrapper" >
            {
                !imgError?
                <img src={game.image} className="card-image" alt={game.name} onError={onError} />
                :
                <div className="card-image-fallback"></div>
            }
            { jackpotToPounds && <CaptionBox caption={jackpotToPounds} top/>}
            <PlayBox>
                <CaptionBox caption={game.name}/>
            </PlayBox>
            {showRibbon && <RibbonBox caption={showRibbon} color={showRibbon==="top"? "primary": "secondary"}/>}
        </div>
    )
};

export default Game;
