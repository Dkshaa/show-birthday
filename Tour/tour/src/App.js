import './App.css';
import {useEffect, useState} from 'react'
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [tours,setTours] = useState([])

  const fetchTour=async()=>{
    try{
      const response= await fetch(url)
      const tours= await response.json()
      setTours(tours)

    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchTour()
  }, [])
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
}

export default App;
