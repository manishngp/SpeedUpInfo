import Login from "../login/Login";
import LoginForm from "../LoginForm/LoginForm";
import Themebutton from "../themeButton/Themebutton";


function Header() {
  return (
    <>
       <LoginForm/>
       <Themebutton/>
       <Login/>
    </>
  )
}

export default Header