import React, {useEffect, useState}from 'react'
import axios from 'axios';
import {Link } from "react-router-dom"

function Read() {
    // const [email, setEmail] = useState( )
    // const [password, setPassword] = useState( )
    const [get, setGet] = useState([] )

    const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';

     useEffect (() => {
        axios.get('https://6362424b66f75177ea2a9980.mockapi.io/ToDoList').then ( (res) => {
            console.log(res.data);
            setGet(res.data);
        })
     }, []) 

   const onRemove = (id) => {
    console.log(id)
    axios.delete(`https://6362424b66f75177ea2a9980.mockapi.io/ToDoList/${id}`)
    .then (res => {
        setGet(get.filter(ele => {
            return ele.id != id
        }))
    })
   };
  return (
    <div>

        {get.map((ele , index) => {
          return (
            <div key={index}>
          <p>Email: {ele.email}</p>
          <p>Password: {ele.password}</p>
          <button className='btn' onClick={() => {onRemove (ele.id)}}>Delete</button>
          <Link to ='/Update'><button className='btn' onClick={() => localStorage.setItem("id", ele.id)}>Update</button></Link>
          <p>_____________</p>
          </div>)
        })}

    </div>
  )
}

export default Read