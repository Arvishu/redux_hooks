import React from 'react';
import 'typeface-roboto';
import ColorChanger from './components/ColorChanger';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';





import { useSelector } from "react-redux";


function App() {
  const color = useSelector(state => state.color)

  return (
    <div style={{


      backgroundPosition: "center",
      backgroundImage: color.background,
      backgroundSize: "cover",
      fontSize: "1.5vw",

    }}>
      <Navbar />
      <Calendar />
      <div style={{
        display: "flex",
        alignItems: "center",
        margin: "auto auto",
        height: "175vh",
        fontSize: "1.5vw",

      }}>

        <div style={{
          display: "inlineBlock",
          verticalAlign: "middle",
          margin: "auto"
        }}>




          <Counter />

          <ColorChanger />
        </div>
      </div>
    </div>
  );
}

export default App;
