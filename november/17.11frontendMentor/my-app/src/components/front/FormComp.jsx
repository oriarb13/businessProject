import React, { useState } from 'react';
import './FormComp.css';  

import TopComp1 from './TopComp1.jsx';
import ParagraphComp1 from './ParagraphComp1.jsx';

const FormComp =(props)=>{
    //who is chosen? 
    const [selectedSpan, setSelectedSpan] = useState(null);

    const clickChoice = (e) => {
        if (selectedSpan) {
            selectedSpan.classList.remove('white-chosen');
        }    
        e.target.classList.add('white-chosen');
        setSelectedSpan(e.target);
    };

    const updateChoice=(e)=>{
        props.setUserChoice111(+e.target.innerText)
        props.setDidUserSubmit(true)
    }

    return(
        <div>
            <TopComp1/>
            <ParagraphComp1/>
            <div className="numbers">
                <span  onClick={clickChoice}>1</span>
                <span  onClick={clickChoice}>2</span>
                <span  onClick={clickChoice}>3</span>
                <span  onClick={clickChoice}>4</span>
                <span  onClick={clickChoice}>5</span>
            </div>
            <button onClick={updateChoice}>submit</button>
        </div>
    )
}
export default FormComp







