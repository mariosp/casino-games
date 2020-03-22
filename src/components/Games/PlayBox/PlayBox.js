import React from "react";
import "./PlayBox.css";

const PlayBox = ({children})=>(
    <div className="image-caption">
        <div className="icon-box">
            <div className="background-box"></div>
            <i className="fa fa-play icon-style"></i>
        </div>
        {children}
    </div>
    );

export default PlayBox;
