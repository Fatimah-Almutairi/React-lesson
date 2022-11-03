import React, {useEffect, useState}from 'react'
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

function Update() {
    const [email, setEmail] = useState('' );
    const [password, setPassword] = useState( '');
    const [id, setId] = useState( '');

      const navigat = useNavigate();

    
      useEffect ( () => {
        setId(localStorage.getItem('id'));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem('password'));

      }, []);
    // const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';

    const update = () => {
        //  e.preventDefault();
        axios.put(`https://6362424b66f75177ea2a9980.mockapi.io/ToDoList/${id}`, {
              email,
              password,
          }).then( res =>{
              console.log(res.id);
              navigat("/Read");
          })
          .catch (error => {
            console.log(error);
          })
      }
  return (
    <div>
            <input className='input'  placeholder='Your Email' onChange= {(e) => {setEmail(e.target.value) }}></input>
             <input className='input' placeholder='Enter Password' onChange= {(e) => {setPassword(e.target.value) }}></input>
            <button className='btn' onClick ={update} >Update</button>
        </div>
  )
}

export default Update