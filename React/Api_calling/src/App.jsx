
import axios from 'axios'

const App = () => {

  async function getData(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await resp.json()
    console.log(resp);
    console.log(data);
  }

  const getDataViaAxios= async()=>{
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos")
      console.log(data);
        console.log(data.data);
  }

  return (
    <>
    <button onClick={getData}>Call Data fetch</button>
    <button onClick={getDataViaAxios}>Call Data Axios</button>
    </>
  )
}

export default App