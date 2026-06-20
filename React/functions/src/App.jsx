
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




// | Syntax                                | Used?   | When                                               |
// | ------------------------------------- | ------- | -------------------------------------------------- |
// | `onClick={clik}`                      | ✅⭐⭐⭐⭐⭐  | Most common when only the event is needed          |
// | `onClick={(e) => clik(e)}`            | ✅⭐⭐⭐⭐⭐  | Very common when adding logic or passing arguments |
// | `onClick={function(e){ clik(e) }}`    | ✅       | Works, but less common than arrow functions        |
// | `onClick={() => clik("Manish")}`      | ✅⭐⭐⭐⭐⭐  | Standard for passing custom arguments      |
// | `onClick={clik.bind(null, "Manish")}` | ⚠️ Rare | Mostly seen in older React codebases               |
// | `onClick={clik()}`                    | ❌       | Incorrect for event handlers                       |
