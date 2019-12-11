import allActions from '../actions/';
import React from 'react';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from "react-redux";

function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const color = useSelector(state => state.color)
    return (
        <div className="containerCounter"
            style={{
                backgroundColor: color.color,
                color: color.compColor,
                textAlign: "center",
                width: "40vw",
                height: "20vw",
                display: "flex",
                alignItems: "center",
                margin: "auto auto",
                padding:"10px",
                borderRadius: "1500px 1500px 10px 10px",
                border: "10px ridge",
                opacity: "0.8",
                
            }}>


            <div style={{
                display: "inlineBlock",
                verticalAlign: "middle",
                margin: "auto"
            }}>

                <h1>Counter : {counter}</h1>
                <Button variant="contained"
                onClick={() => dispatch(allActions.counterActions.increment())}
                    style={{
                        width: "auto",
                        height: "auto",
                        backgroundColor: color.compColor,
                        color: "white",
                        padding: "5px",
                        margin: "5px",
                        borderRadius: "5px",
                        fontSize:"1.5vw",
                        
                        

                    }}>Increase Counter</Button>
                <Button variant="contained"
                onClick={() => dispatch(allActions.counterActions.decrement())}
                    style={{
                        width: "auto",
                        height: "auto",
                        backgroundColor: color.compColor,
                        color: "white",
                        padding: "5px",
                        margin: "5px",
                        borderRadius: "5px",
                        fontSize:"1.5vw",

                    }}>Decrease Counter</Button>


            </div>

        </div>
    );
}

export default Counter;