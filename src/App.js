import React from 'react';
import Timer from './component/timer.js';
import './App.css';


const clock={time:5555555588888800}

function App() {
  return (
    <div className="App">
      <Timer clock={clock}/>
    </div>
  );
}

export default App;
