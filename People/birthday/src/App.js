import './App.css';
import { useState } from 'react'
import data from './data';
import People from './People';



function App() {
  const [people,setPeople] = useState(data)
  const clickHandle=()=>{
    setPeople([])
  }
  return (
    <>
      <h1>{people.length} Birthdays Today</h1>
      <People people={people}/>
      <button className='btn' onClick={clickHandle}> Clear All</button>

    </>
  );
}

export default App;
