import React from 'react';
import ColorChanger from './components/ColorChanger';
import Counter from './components/Counter';





function App() {
  

  return (
    <div style={{
      height:"100vh",
      backgroundImage: " url('https://www.voyageavecnous.fr/wp-content/uploads/2015/01/plage-paradisiaque-maldives.jpg')",
      backgroundSize: "100%"
    }}>
     <Counter/>
     
    <ColorChanger/>
    </div>
  );
}

export default App;
