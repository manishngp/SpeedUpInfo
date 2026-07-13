import { BrowserRouter, Route, Routes,  Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {


  return (
    <>
       {/* <a href="/about">aboutpage</a> */}
   <BrowserRouter>
      <Link to="/about"  >About</Link> 
      <Link to="/contact">Contact</Link>
       <Link to="/">Home</Link>
   <Routes>
    <Route path="/" element={<Home/> } />
    <Route path="/about" element={<About/>} />
 <Route path="/contact" element={<Contact/>} />
    
   </Routes>
   </BrowserRouter>
    </>
   
  )
}

export default App
