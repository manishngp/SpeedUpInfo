
import './App.css'

function App() {


  function clik(e){
    console.log("cliked", e.target.value);
  }

  return (
    <>
    {/* <button onClick={function(e){clik(e);}} className='bg-gray-300 border rounded border-black px-3 py-1'>ok</button> */}

    
      <input type="text"onChange={function (e){
        clik(e)
      }} />
    </>
  )
}

export default App
