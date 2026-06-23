import { useState } from "react";
import "./App.css"

function App() {

  const [title, setTitle] = useState("")

  const submitHandler =(e)=>{
    e.preventDefault()
     
     console.log("form is submitted by ",title);
     setTitle("")
  }

  return (
   
    <form action="" onSubmit={(e)=>{submitHandler(e)}}>
      <input type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value) 
         console.log(e.target.value);
      }} />
      <button>Submit</button>
    </form>
  )

 

}

export default App