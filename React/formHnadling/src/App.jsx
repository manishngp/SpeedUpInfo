import "./App.css"

function App() {

  const submitHandler =(e)=>{
    e.preventDefault()
     console.log("form is submitted");
  }

  return (
   
    <form action="" onSubmit={(e)=>{submitHandler(e)}}>
      <input type="text" />
      <button>Submit</button>
    </form>
  )
}

export default App