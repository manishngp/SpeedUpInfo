import {  useMemo, useState } from "react"
import SearchBar from "../component/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import NoteForm from "../component/NoteForm";
import { useNotes } from "../hooks/useNotes";
import Notecard from "../component/Notecard";


function NotesPage() {

  const [search, setSearch] = useState("");
 const  {notes, addNote, deleteNote, updateNote} = useNotes();


 

  
  const bouncedSearch = useDebounce(search, 500)



  // console.log(bouncedSearch.toLowerCase());

  const filteredNotes = useMemo(
    () =>  notes.filter(n =>
      n.title.toLowerCase().includes(bouncedSearch.toLowerCase()) 
      ||
      n.discription.toLowerCase().includes(bouncedSearch.toLowerCase())
    ),
    [notes, bouncedSearch]
  );



  return (
    <>

     <NoteForm onAdd={addNote} />

      <div>
    
        <SearchBar search={search} setSearch={setSearch} />


        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
     {/* {notes.map((ele)=> <h1>{ele.title}</h1>)} */}
        {filteredNotes.map(note => (
          <Notecard
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={updateNote}
            
          />
        ))}
      </div>
      </div>

      {/* {
        editing && <div >
          <input value={etitle} onChange={(e) => seteTitle(e.target.value)} type="text" name="" id="" />
          <textarea value={ediscription} onChange={(e) => seteDiscription(e.target.value)} name="" id=""></textarea>
          <button onClick={() => update()}>update</button>
        </div>
      } */}

    </>
  )
}

export default NotesPage