import React from "react";
import "./Loading.css";
import {Spinner} from "reactstrap";

const Loading = () => {
    return (
        <div className="wrapper">
            <Spinner className="spinner" />
        </div>
    );
};

export default Loading;
