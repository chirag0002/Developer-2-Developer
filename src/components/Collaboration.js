import React from "react";
import side from "../Images/Collaborations_Left.png";
import partner from "../Images/D2d 4.png";
import "../styles/collaboration.css";


function Collaboration() {
    return(
        <div className="collab">
            <div className="content">
                <h1 className="c-head">Our <span className="sub">Collaborations</span></h1>
                <div className="partner">
                    <img className="side" src={side} alt="side" />
                    <img className="partner-img" src={partner} alt="partner" />
                    <img className="partner-img" src={partner} alt="partner" />
                    <img className="partner-img" src={partner} alt="partner" />
                </div>
            </div>
        </div>
    )
}

export default Collaboration;