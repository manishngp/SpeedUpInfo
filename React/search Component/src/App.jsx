
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(()=>{

    const controller = new AbortController();

    const timer = setTimeout(async()=>{
             
    setLoading(true)
    
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {signal : controller.signal});
        const data = await res.json();

        const filteredData = data.filter((ele)=> ele.name.toLowerCase().includes(query.toLowerCase()))

        setUsers(filteredData)
        setLoading(false);
      
    } catch (error) {
      console.log(error.message);
    }
 


    },500)

   return ()=>{
    clearTimeout(timer)
    controller.abort()
   }

  },[query])

  
  return (
    <>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />

       {loading && <h1>Loading...</h1>}
      {
        users.map((ele)=>(
          <div key={ele.id}>
            <h1>{ele.name}</h1>
          </div>
        ))
      }

      
    </>
  )
}

export default App
