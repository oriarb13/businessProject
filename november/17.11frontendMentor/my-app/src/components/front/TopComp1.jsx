import React from "react";
import './TopComp1.css';  
import star from '../../images/icon-star.svg'
const TopComp1 = () => {
    return ( 
        <div className="Top-Comp1">
            <div className="star-wrap"> 
                <img src={star} alt="" />
            </div>
            <h1>how did we do?</h1>
        </div>
    )
}
export default TopComp1