
import './App.css'

function App() {

  const element = (
  <>
    <div id="div1"  key={123}>
      <h1>manish</h1>
      <h2>nagpure</h2>
    </div>

    <div id="div2">
      <p>this is para</p>
    </div>
  </>
);

console.log(element);

  return (
    <>
     <div id='div1' key={234}>
      <h1>manish</h1>
      <h2>nagpure</h2>
     </div>
     <div  id='div1'  key={567}>
      <p>this is para</p>
     </div>
    </>
  )
}

export default App
