import allActions from '../actions/';
import React from 'react';

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
                height: "33vh",
                width: "40vw",
                display: "flex",
                alignItems: "center",
                margin: "10px auto auto",
                borderRadius: "35px 10px",
                border: "10px ridge",
                opacity:"0.8"

            }}>


            <div style={{
                display: "inlineBlock",
                verticalAlign: "middle",
                margin: "auto"
            }}>

                <h1>Counter : {counter}</h1>
                <button onClick={() => dispatch(allActions.counterActions.increment())}
                    style={{
                        backgroundColor: color.compColor,
                        color: "white",
                        padding:"5px",
                        margin:"5px",
                        borderRadius:"5px"
                    }}>Increase Counter</button>
                <button onClick={() => dispatch(allActions.counterActions.decrement())}
                    style={{
                        backgroundColor: color.compColor,
                        color: "white",
                        padding:"5px",
                        margin:"5px",
                        borderRadius:"5px"
                       
                    }}>Decrease Counter</button>


            </div>

        </div>
    );
}

export default Counter;