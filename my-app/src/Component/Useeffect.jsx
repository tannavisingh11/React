import React, { useEffect, useState } from 'react'
import { Button, Alert } from 'react-bootstrap';

function UseEffect() {
const[counter,setCounter]=useState(0);

useEffect(()=>{
    setTimeout(()=>{
        setCounter((counter)=>counter+1)
    },1000)
});



  return (
    <>
    <h2>UseEffect</h2>
    
    <h3>{Counter}</h3>
    
    </>
  )
}

export default UseEffect