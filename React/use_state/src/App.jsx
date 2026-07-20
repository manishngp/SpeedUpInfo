import { useEffect, useState } from 'react'

function App() {
  // const [counter, setCounter]= useState(0);
  const [bgColor, setBgColor]= useState("red");

useEffect(()=>{
  setTimeout(() => {
    setBgColor("blue")
  },5000);
},[])
  return (
    <>

    <div style={{backgroundColor:bgColor}}>
      <h2>This is heading</h2>
    </div>
    {/* <h2>Counter is {counter}</h2>
    <button onClick={()=>setCounter(counter+1)}>Add</button>
    <button  onClick={()=>setCounter(counter-1)}>substract</button>
    <button  onClick={()=>setCounter(counter*2)}>Multiply</button>
    <button  onClick={()=>setCounter(counter/2)}>Divide</button> */}
    </>
  )
}

export default App