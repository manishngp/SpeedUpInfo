/* eslint-disable no-unused-vars */
import { useState } from "react";


function App({status}) {

    const [notification, setNotification] = useState(0);
    const [user, setUser] = useState("manish");
    const [loading, setLoading] = useState(false);
    const [items, setItems]= useState([])
    
    const [error, setError] =useState(false);

    if(loading) return <h1>Loading... please wait</h1>
    if(error) return <h3>There is some issue</h3>

    const MESSAGE_VIEW={
      loading : <p>Loading</p>,
      error :<p>Some error occured </p>,
      success: <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>,

    }


  return (
    <>
    {/* using logical and */}
    {user && <h1>Hi, am {user}</h1>}


    {/* using ternary */}
    {notification>0 ? <p>{notification} notification is there.</p> : <p>No notification is there</p>}

     {MESSAGE_VIEW[status]}
    </>
  );
}

export default App
