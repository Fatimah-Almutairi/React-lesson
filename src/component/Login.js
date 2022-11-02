import React , {useState} from 'react';
import axios from 'axios'


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';


    const submit = () => {
        axios.post(API , {
            email,
            password,
        }).then( (res) =>{
            console.log(res);
        })
    }
  return (
    <div className="login">
        <input placeholder='Your Email' onChange= {e => {setEmail(e.target.value) }}></input><br />
        <input placeholder='Password' onChange= {e => {setPassword(e.target.value) }}></input><br />
        <button onClick ={submit} >Submit</button>
    </div>
  )
}

export default Login