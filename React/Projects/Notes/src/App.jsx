import { useState } from "react"


function App() {

  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    setNotes(prev => [...prev, {title, discription}])
    setTitle("");
    setDiscription("");

  }

  function deleteN(index){
     const newNotes = [...notes];
    newNotes.splice(index, 1)
    console.log(newNotes);
    setNotes(newNotes)

  }

  return (
    <>
      <div>
        <form  style={{display:"flex" , flexDirection:"column", margin:"10px", gap:"20px"}} onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Title..." value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea name="" placeholder="Enter Discription" value={discription}  onChange={(e)=>setDiscription(e.target.value)}></textarea>
          <button >Add To Notes</button>
        </form>
      </div>
      <div>
        {
          notes.map((ele, idx)=>(
            <div key={idx}>
              <h1>{ele.title}</h1>
              <h4>{ele.discription}</h4>
              <button onClick={()=>deleteN(idx)}>Delete Note</button>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default App