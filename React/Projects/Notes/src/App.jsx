// import { useEffect, useMemo, useState } from "react"
import NotesPage from "./pages/NotesPage";


function App() {

  // const [title, setTitle] = useState("");
  // const [discription, setDiscription] = useState("");
  // const [notes, setNotes] = useState(() => {
  //    const localStoredNotes = JSON.parse(localStorage.getItem("localNotes"))
  //    if(localStoredNotes) return localStoredNotes;
  //    return [];
  // });

  // const [debouncedSearch, setDebouncedSearch] = useState("");
  // const [editing, SetEditing] = useState(false);
  // const [search, setSearch]=useState("")
  // const [eid, setEid] = useState();
  // const [etitle, seteTitle] = useState("");
  // const [ediscription, seteDiscription] = useState("");

  // useEffect(()=>{
  //   const timer = setTimeout(() => {
  //     setDebouncedSearch(search)
  //   }, 500);

  //     return () => clearTimeout(timer);
  // },[search])

  // useEffect(()=>{
  //   localStorage.setItem("localNotes", JSON.stringify(notes));
  // },[notes])

  // function handleSubmit(e) {
  //   e.preventDefault();

  //     if (!title.trim() || !discription.trim()) {
  //   alert("Please fill in all fields.");
  //   return;
  // }

  //   setNotes(prev => [...prev, { title, discription }])
  //   setTitle("");
  //   setDiscription("");

  // }

  // function deleteN(index) {
  //   const newNotes = [...notes];
  //   newNotes.splice(index, 1)
  //   console.log(newNotes);
  //   setNotes(newNotes)

  // }

  // function editN(index) {
  //   SetEditing(true);
  //   const edi = notes.find((elem) => notes.indexOf(elem) === index)
  //   console.log(edi);

  //   seteTitle(edi.title)
  //   seteDiscription(edi.discription)
  //   setEid(index);
  // }

  // function update() {

  //   const edited = { title: etitle, discription: ediscription };
  //   const editedData = [...notes]
  //   editedData.splice(eid, 1, edited)
  //   setNotes(editedData);
  //   console.log(editedData, "this is edited data");
  //   SetEditing(false)


  // }

  // const filtered_onSearch= useMemo(()=>{
  //    return [...notes].filter((ele)=>ele.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  //    || 
  //    ele.discription.toLowerCase().includes(debouncedSearch.toLowerCase())
  //   )
  
  // },[debouncedSearch, notes])

  return (
    // <>
    //   <div>
    //     <form style={{ display: "flex", flexDirection: "column", margin: "10px", gap: "20px" }} onSubmit={handleSubmit}>
    //       <input type="text" placeholder="Enter Title..." value={title} onChange={(e) => setTitle(e.target.value) } required />
    //       <textarea name="" placeholder="Enter Discription" value={discription} onChange={(e) => setDiscription(e.target.value)} required></textarea>
    //       <button >Add To Notes</button>
    //     </form>
    //   </div>
    //   <div>
    //     <div>
    //       <input type="text" placeholder="search notes ..." value={search} onChange={(e)=>setSearch(e.target.value)} />
    //     </div>
    //     {
    //       filtered_onSearch.map((ele, idx) => (
    //         <div key={idx}>
    //           <h1>{ele.title}</h1>
    //           <h4>{ele.discription}</h4>
    //           <button onClick={() => editN(idx)}>Edit</button>
    //           <button onClick={() => deleteN(idx)}>Delete Note</button>
    //         </div>
    //       ))
    //     }
    //   </div>

    //   {
    //     editing && <div >
    //       <input value={etitle} onChange={(e) => seteTitle(e.target.value)} type="text" name="" id="" />
    //       <textarea value={ediscription} onChange={(e) => seteDiscription(e.target.value)} name="" id=""></textarea>
    //       <button onClick={() => update()}>update</button>
    //     </div>
    //   }

    // </>
    <NotesPage/>
  )
}

export default App