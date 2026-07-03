import  { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import ThemeButton from './components/ThemeButton';

function App() {
  const [theme, setTheme]= useState("dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeButton/>
    </ThemeContext.Provider>   
  )
}

export default App