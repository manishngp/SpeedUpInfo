import { useEffect , useState} from "react"


function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const getUsers = async()=>{
      const users = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await users.json();
      setUsers(usersData);
      setIsLoading(false);

    }
    getUsers();

  },[])
  useEffect(()=>{
    function updateTitle(){
      const count = users.length;
      document.title = `count of users is ${count}`
    }
    updateTitle();
  },[users])
  if(isLoading) return(<p>Loading Data ...</p>)
  return (
    <>
    {
      users.map((ele)=>(
        <h1 key={ele.id}>{ele.name}</h1>
      ))
      
    }

    </>
  )
}

export default App