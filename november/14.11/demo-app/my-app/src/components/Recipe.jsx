import React from "react";
import './Recipe.css'

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
const Recipe = () => {
    return ( 
        <div className="recipe">
            recipe
            <Ingredients />
            <Instructions />
            <Nutrition />
        </div>
    )
}

export default Recipe