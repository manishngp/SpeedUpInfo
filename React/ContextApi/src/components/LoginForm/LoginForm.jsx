import { useContext, useState, useEffect, useRef } from "react"
import { AuthContext } from "../../context/AuthContext"

function LoginForm() {
    const [name, setName] = useState("")
    const {user, setUser} = useContext(AuthContext)
    const inputRef = useRef(null);
    const handleChange = (e)=>{
        e.preventDefault();
        setUser(name)


    }


    function handleLogout(){
        console.log("logout clicked");
        setUser(null);
        setName("")
    }
      

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
   <>
   <form action="" onSubmit={handleChange}>
        <input  type="text" placeholder="Enter UserName..." ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
        <button>Submit</button>
   </form>

   {
    user && <div>
         <p>{user} is logged In</p>
         <button onClick={handleLogout}>Logout</button>


    </div>
   }
   
   </>
  )
}

export default LoginForm