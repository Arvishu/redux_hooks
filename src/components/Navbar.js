import React from 'react';
import Button from '@material-ui/core/Button';

export default function Navbar() {
    return (
        <div style ={{
            display:"flex",
            justifyContent:'space-around',
            height:"15vh",
            backgroundColor:"#26abc9",
            opacity:"0.75"
        }}>
            <Button variant="fullWidth" style ={{
            backgroundColor:"#26abc9",
            opacity:"0.75"
        }}>logo</Button>
            <Button variant="fullWidth"style ={{
            backgroundColor:"#26abc9",
            opacity:"0.75"
        }}>Register</Button>
            <Button variant="fullWidth"style ={{
            backgroundColor:"#26abc9",
            opacity:"0.75"
        }}>Login</Button>
            <Button variant="fullWidth"style ={{
            backgroundColor:"#26abc9",
            opacity:"0.75"
        }}>Logout</Button>
        </div>
    )
}
