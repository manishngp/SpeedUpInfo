import { useState } from "react"


function App() {
  const [toggle, setToggle]=useState(false);
  function toggled(){
    setToggle( toggle => !toggle)
  }
  return (
    <>
      <div>
        <h1 onClick={()=>toggled()} style={{color:toggle ? "blue":"grey"}} >{toggle ? "ON":"OFF"}</h1>
      </div>

    </>
  )
}

export default App