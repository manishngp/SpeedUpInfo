import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


function ThemeButton() {
    const {theme, setTheme} = useContext(ThemeContext);
    const handleClick=()=>{
        setTheme(theme === "dark" ? "light" : "dark")
    }
  return (
    <button 
        style={{backgroundColor:theme === "dark" ? "black" : "white" , color:theme !== "dark" ? "black" : "white"}}
        onClick={handleClick}>
        {theme}
    </button>
  )
}

export default ThemeButton