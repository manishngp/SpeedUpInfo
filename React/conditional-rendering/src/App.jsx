import { useState } from "react";


function App() {

    const [notification, setNotification] = useState(0);
    const [user, setUser] = useState("manish");
    const [loading, setLoading] = useState(false);
    const [error, serError] =useState(false);

    if(loading) return <h1>Loading... please wait</h1>
    if(error) return <h3>There is some issue</h3>


  return (
    <>
    {/* using logical and */}
    {user && <h1>Hi, am {user}</h1>}


    {/* using ternary */}
    {notification>0 ? <p>{notification} notification is there.</p> : <p>No notification is there</p>}

     
    </>
  );
}

export default App
