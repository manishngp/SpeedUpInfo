import { useEffect, useState } from "react"

function useLocalStorege({ noteskey}) {
 const [notes, setNotes]= useState(()=>{
    const localStoredNotes = JSON.parse(localStorage.getItem(noteskey))
    if (localStoredNotes) {
        return localStoredNotes;
    }
    else {
       return []
    }

 })
    useEffect(() => {
        localStorage.setItem(noteskey, JSON.stringify(notes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notes])

    return [notes, setNotes]
}

export default useLocalStorege