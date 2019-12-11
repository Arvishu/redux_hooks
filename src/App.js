import React from 'react';
import ColorChanger from './components/ColorChanger';
import Counter from './components/Counter';



import { useSelector} from "react-redux";


function App() {
  const color = useSelector(state => state.color)

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      margin: "auto auto",
      height: "100vh",
      backgroundPosition:"center",
      backgroundImage: color.background,
      backgroundSize: "cover",
      fontSize:"1.5vw",

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
  );
}

export default App;
