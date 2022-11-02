import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Cards() {
    const [get, setGet] = useState([]);      
    const API = '  https://newsapi.org/v2/top-headlines?country=sa&apiKey=2e17dffe5e274272a9cd25a881f7ce29&category=business';
    // const Api_Img= 'https://image.tmdb.org/t/p/w500';


  useEffect ( () => {
    axios.get(API).then( (res) => {
      console.log(res.data.articles);
      setGet(res.data.articles);
    })
  }, [])
  return (
  
        <div className='card'>
        {get.map((ele) => {
          return (
          <div className='con'> 
            <img src= {ele.urlToImage} />
          </div>
          )
        })}
      </div> 
   
  )
}

export default Cards