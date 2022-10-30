import React from 'react'
import { Button, Input } from '@chakra-ui/react'
// import React, {useState} from 'react'
// اذا استعملت الطريقه هذي اللي مسويه لها كومنت لازم اعدل اللي تحت معها 

function Hook() {
    const [counter, setCounter] = React.useState (0)
    const [num , setNum] = React.useState(20)
    const [todo, setTodo] = React.useState ('')
    const [list, setList] = React.useState ([])
    // const [counter, setCounter] = useState (0)
    const increment = () => {
        console.log("set Counter");
        setCounter( (prev) => prev +1);
        // setCounter (counter + 1) ممكن  حل السطر اللي قبل بالشكل هذا 
    }
    const descrement = () => {
        setNum ((pre) => pre -1 );
    }
    const todoList = () => {
        setList ([...list], todo)
    }
  return (
    <div>
        <Button onClick = {increment}>Increment</Button>
        <p>Counter : {counter}</p>
        <p>__________________</p>
        <Button onClick={descrement}> Descrement</Button>
        <p>Descrement : {num}</p>
        <Input onChange= {(e) => {setTodo(e.target.value)}}> </Input>
        <Button onClick={todoList}>Add Task</Button>  
        <p>{list.map(items =>
            <ul>
                <li>
                    {items}
                </li>
            </ul>)}
        </p> 
         </div>
  )
}

export default Hook