import React from "react";
import "./RibbonBox.css";

const RibbonBox = ({caption, color="primary"}) => {
    const ribbonDiv = `ribbon-${color}`;
    const ribbonSpan = `ribbon-span-color-${color}`;
    return (
        <div className={`ribbon ribbon-top-right ${ribbonDiv}`}>
           <span className={`${ribbonSpan}`}>
               {caption}
           </span>
        </div>
    );
};

export default RibbonBox;
