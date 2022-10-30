import React from 'react'
import { Button } from '@chakra-ui/react'
// import React, {useState} from 'react'
// اذا استعملت الطريقه هذي اللي مسويه لها كومنت لازم اعدل اللي تحت معها 

function Hook() {
    const [counter, setCounter] = React.useState (0)
    // const [counter, setCounter] = useState (0)
    const increment = () => {
        console.log("set Counter");
        setCounter( (prev) => prev +1);
        // setCounter (counter + 1) ممكن  حل السطر اللي قبل بالشكل هذا 
    }
  return (
    <div>
        <Button onClick = {increment}>Click me</Button>
        <p>Counter : {counter}</p>
    </div>
  )
}

export default Hook