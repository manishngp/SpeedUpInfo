import { useState } from "react"
import { ThemeContext } from "./context/ThemeContext";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/header/Header";


function App() {

  const [theme,setTheme] = useState("dark");
  const [user, setUser] = useState(null)
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <AuthContext.Provider value={{user, setUser}}>
        <div style={{"backgroundColor":theme ==="dark"?"black":"white", color:theme ==="dark"?"white":"black"}}>
          <Header/>
        </div>
       
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App