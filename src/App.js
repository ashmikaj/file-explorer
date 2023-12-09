import React, { useState, useEffect } from 'react';
import Folder from './components/Folder';
import explorer from './data/data'
import './App.css';




const API_URL = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
const  App= () => {

  const [explorerData, setExplorerData] = useState(explorer);
  const [dataArray, setDataArray] = useState([]);


  const fetchData = async ()=>{
    const data = await fetch(API_URL);
    const response =  await data.json();
    setDataArray(response);
    console.log(dataArray);
  
  }
  


  useEffect(()=> {
    fetchData()
  }, [])


  return (
    <div className="App">
       <Folder data={explorerData}  />
     </div>
  );
}

export default App;
