import allActions from '../actions';
import React from 'react';

import { useSelector, useDispatch } from "react-redux";

function ColorChanger() {
  
  const color = useSelector(state => state.color)
  const colorName = useSelector(state => state.colorName)


  const dispatch = useDispatch();

  return (
    <div className= "containerColorChanger"
    style={{
      backgroundColor: color.color,
      color: color.compColor,
      textAlign: "center",
      height:"33vh",
      width:"40vw",
      display: "flex",
      alignItems: "center",
      margin:"10px auto auto",
      borderRadius:"10px 35px",
      border:"5px solid",
      border: "10px ridge",
      opacity:"0.8"
      
     
    }}>
     
        <div style = {{
          display:"inlineBlock",
          verticalAlign: "middle",
          margin:"auto"
          
        }}>
         
          <h1>Color : {color.colorName}</h1>
          
          <button onClick={() => dispatch(allActions.colorActions.red())}
           style={{
            backgroundColor: color.compColor,
            color: "white",
            padding:"5px",
            margin:"5px",
            borderRadius:"5px"}}>change to Chi-gong red</button>
          <button onClick={() => dispatch(allActions.colorActions.yellow())}
          style={{
            backgroundColor: color.compColor,
            color: "white",
            padding:"5px",
            margin:"5px",
            borderRadius:"5px"}}>change to Sour lemon yellow</button>
        </div>
     
    </div>
  );
}

export default ColorChanger;