
import { useState } from 'react';
import './App.css';
import Numbers from './Components/Numbers';
import NumbersClass from './Components/NumbersClass';

function App() {
  let [number, set] = useState(0)
  return (
    <div>
      <Numbers number={number} set={set} />
      <NumbersClass/>
    </div>
    
  );
}

export default App;
