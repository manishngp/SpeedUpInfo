import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Themebutton() {
    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <button onClick={()=>setTheme(theme==="dark" ? "light": "dark")}>
        {theme==="dark" ? "Use Light Theme": "Use Dark Theme"}
    </button>
  )
}

export default Themebutton