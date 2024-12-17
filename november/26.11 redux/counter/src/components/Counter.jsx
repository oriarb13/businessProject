import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusCounter,minusCounter } from "../store/actions/CounterActions.js";

function Counter() {
  const dispatch = useDispatch();  //מקשר בין האקשיינס ל רדיוסר
  const counter = useSelector((state) => state.counter); //ניגש לקאונטר בתוך הסטייט


  return(
    <div>
        <h1>counter</h1>
        <div>
            <button onClick={()=>dispatch(plusCounter())}>+</button> 
            <div>{counter}</div>
            <button onClick={()=>dispatch(minusCounter())}>-</button>
        </div>
    </div>
  )
}

export default Counter;