// import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Image} from '@chakra-ui/react';
import Create from './component/Create';
import Rout from './component/Rout';


function App() {
  const [get, setGet] = useState([]);      
  const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';



  useEffect ( () => {
    axios.get(API).then( (res) => {
      console.log(res.data);
      setGet(res.data);
    })
  }, [])

  return (

    <div>

 
       <Create />
      <div>
        {get.map(ele => {
          return (
            <div>
          <p>First Name: {ele.fName}</p>
          <p>Last Name: {ele.lName}</p>
          <p>Email: {ele.email}</p>
          <p>PAssword: {ele.password}</p>
          <p>_____________</p>
          </div>)
        })}
      </div> 
 
 
{/* <Rout>

</Rout> */}
    </div>

  );
}

export default App;
