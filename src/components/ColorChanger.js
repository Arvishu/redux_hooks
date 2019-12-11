import allActions from '../actions';
import React from 'react';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from "react-redux";

function ColorChanger() {
  
  const color = useSelector(state => state.color)
 

  const dispatch = useDispatch();

  return (
    <div className= "containerColorChanger"
    style={{
      backgroundColor: color.color,
      color: color.compColor,
      textAlign: "center",
      width: "40vw",
      height:"20vw",
      display: "flex",
      alignItems: "center",
      margin:"10px auto auto",
      padding:"10px",
      borderRadius:"10px 10px 1000px 1000px",
      border: "10px ridge",
      opacity:"0.8"
      
     
    }}>
     
        <div style = {{
          display:"inlineBlock",
          verticalAlign: "middle",
          margin:"auto"
          
        }}>
         
          <h1>Color : {color.colorName}</h1>
          
          <Button variant="contained"
          onClick={() => dispatch(allActions.colorActions.red())}
           style={{
            backgroundColor: color.compColor,
            color: "white",
            padding:"5px",
            margin:"5px",
            borderRadius:"5px",
            fontSize:"1.5vw",
          
          }}
            >change to<br/> Chi-gong red</Button>

          <Button variant="contained"
          onClick={() => dispatch(allActions.colorActions.yellow())}
          style={{
            backgroundColor: color.compColor,
            color: "white",
            padding:"5px",
            margin:"5px",
            borderRadius:"5px",
            fontSize:"1.5vw",
          }}
            >change to Sour<br/> lemon yellow</Button>

        </div>
     
    </div>
  );
}

export default ColorChanger;