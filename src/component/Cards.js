import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Cards() {
    const [get, setGet] = useState([]);      
    const API = 'https://rickandmortyapi.com/api/character';
    // const Api_Img= 'https://image.tmdb.org/t/p/w500';


  useEffect ( () => {
    axios.get(API).then( (res) => {
      console.log(res.data.results);
      setGet(res.data.results);
    })
  }, [])
  return (
  
        <div className='card'>
        {get.map((ele) => {
          return (
          <div className='con'> 
            <img src= {ele.image} />
          </div>
          )
        })}
      </div> 
   
  )
}

export default Cards