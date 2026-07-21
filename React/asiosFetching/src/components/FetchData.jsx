import axios from "axios";
import { useEffect } from "react";



function FetchData() {

    useEffect(()=>{

        async function getUserData() {
            
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

      
    getUserData();
    },[])
  return (
    <div>
        <h1>Fetching users with axios</h1>

    </div>
  )
}

export default FetchData