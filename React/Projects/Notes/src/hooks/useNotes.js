/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import useLocalStorege from "./useLocalStorege";
export function useNotes(){

   const [notes, setNotes] =useLocalStorege({ noteskey: "localNotes" })
    
  const addNote = useCallback(({title, discription}) => {
    if (!title.trim()) return;
    setNotes(prev => [...prev, {
      id: crypto.randomUUID(),
      title,
      discription,
      pinned: false,
      
    }]);
   }, []);

  const deleteNote = useCallback((id)=>{
            setNotes(prev=>[...prev].filter((ele)=>ele.id!== id));
  },[])

  const updateNote =  useCallback((id, updates)=>{
    setNotes(prev => [...prev].map((n)=>n.id === id ? {...n, ...updates}: n));
 
    
  },[])
  
  

  


 

      return {notes, setNotes, addNote, deleteNote, updateNote}
}