import React, { useEffect, useState } from 'react'

const Time = () => {
    let[input,setInput]=useState(0)
    let[min,setMin]=useState(0)
    let[sec,setSec]=useState(0)
    let[hour,setHour]=useState(0)
    let[start,setStart]=useState(false)

    useEffect(()=>{
        if(start){
           setHour(Math.floor(input/60))
           setMin((input-Math.floor(input/60)*60)-1)
           setSec(59)
        }
    },[start])

  return (
    <div>
        <input type='number' value={input} onChange={(e)=>setInput(e.target.value)} />
        <h2>Hours :{hour}   Minutes : {min}   Seconds : {sec}</h2>
        <button onClick={()=>setStart(true)}>start</button>
        <button onClick={()=>setStart(false)}>stop</button>
    </div>
  )
}
export default Time