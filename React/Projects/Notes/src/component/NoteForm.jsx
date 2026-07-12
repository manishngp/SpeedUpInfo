import {  useState } from "react"



function NoteForm({onAdd}) {
  const [title, setTitle] = useState("")
  const [discription, setDiscription] = useState("")
  

   function handleSubmit(e) {
    e.preventDefault();

  //     if (!title.trim() || !discription.trim()) {
  //   alert("Please fill in all fields.");
  //   return;
  // }

     onAdd({ title, discription })
    setTitle("");
    setDiscription("");

  }
    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column", margin: "10px", gap: "20px" }} onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea name="" placeholder="Enter Discription" value={discription} onChange={(e) => setDiscription(e.target.value)} required></textarea>
                <button >Add To Notes</button>
            </form>
        </div>
    )
}

export default NoteForm;