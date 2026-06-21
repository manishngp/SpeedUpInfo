import { useState } from 'react'

function App() {
  // const [num, setnum] = useState(0)
  // function upn(){
  //   setnum(num++)
  // }
  const [num, setNum] = useState(0);
  function increase(n=1){
    setNum(num+n);
    
  }
  function decrease(n=1){
    setNum(num-n);
  }
  return (
    // <div>
    //   <button onDoubleClick={()=>setnum(num=> num+1)}>{num}</button>
    //    <button onDoubleClick={()=>setnum(num=> num++)}>{num}</button>
    // </div>

    <div>
        <h1>{num}</h1>
        <button style={{padding:"10px 20px" , marginRight:"20px"}} onClick={()=>increase()}>Increase</button>
        <button style={{padding:"10px 20px" , marginRight:"20px"}} onClick={()=>decrease()}>Decrease</button>
        <button style={{padding:"10px 20px" , marginRight:"20px"}} onClick={()=>increase(5)}>Inc by 5</button>
        <button style={{padding:"10px 20px" , marginRight:"20px"}} onClick={()=>decrease(5)}>Dec by 5</button>
    </div>
  )
}

export default App