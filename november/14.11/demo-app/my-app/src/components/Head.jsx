import React from "react";
import './Head.css'

import Intro from "./Intro";
import PrepTime from "./PrepTime";
const Head = () => {
    return ( 
        <div className="head">
            <img src="../../recipe-page-main/assets/images/image-omelette.jpeg" alt="" />
            <Intro />   
            <PrepTime />   
        </div>
    )
}

export default Head