import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Chart from './d3-animation';

function App() {

  const[data,setData] = useState("")

const getData = async ()=>{
  const response = await axios.get( "https://neutrino-12.herokuapp.com/api/get_data_animation")
  setData(response.data) 
}


  useEffect(()=>{
   getData()   
  },[])

  return (
    <div>
    <Chart data={data}/>
    </div>
  );
}

export default App;
