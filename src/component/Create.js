import axios from 'axios'
import React, {useState} from 'react'

function Create() {
        const [fName, setfName] = useState()
        const [lName, setlName] = useState()
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

        const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';

        const postData = () => {
            axios.post(API , {
                fName,
                lName,
                email,
                password,
            }).then( (res) =>{
                console.log(res);
            })
        }

  return (
    <div>
        <input placeholder='first name' onChange= {e => { setfName(e.target.value)}}></input> <br />
        <input placeholder='last name' onChange= {e => {setlName(e.target.value) }}></input> <br />
        <input placeholder='Your Email' onChange= {e => {setEmail(e.target.value) }}></input><br />
        <input placeholder='Password' onChange= {e => {setPassword(e.target.value) }}></input><br />
        <button onClick ={postData} >Submit</button>
    </div>
  )
}

export default Create