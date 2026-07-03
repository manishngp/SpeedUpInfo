import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const handleFocus = ()=>{
     inputRef.current.focus()
  }
  const handleClear=()=>{
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" placeholder='Enter' ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleClear}>clear</button>
    </div>
  )
}

export default App
// ✅ useRef for timer ID -- persists without re-render
// function App() {
//   const [time, setTime] = useState(0);
//   // const intervalRef = useRef(null);  // stores interval ID
//  let timer;
//   const start = () => {
//    timer = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 1000);
//   };

//   const stop = () => {
//     clearInterval(timer);  // access stored ID
//   };

//   return (
//     <div>
//       <p>{time}s</p>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   );
// }
// export default App