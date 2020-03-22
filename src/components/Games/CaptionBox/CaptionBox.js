import React from "react";
import "./CaptionBox.css";

const CaptionBox = ({caption, top = false}) =>{
    const style = top? "top-caption" : "bottom-caption";

    return(
        <>
            <div className={`text-box ${style}`}></div>
            <div className={`text-caption ${style}`}>
                {caption}
            </div>
        </>
    )
};

export default CaptionBox;
