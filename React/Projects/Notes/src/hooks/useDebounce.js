import { useState, useEffect } from "react";

export const useDebounce=(search , delay=500)=>{
 const [bouncedSearch, setBouncedSearch] = useState("")
     useEffect(()=>{
    const timer = setTimeout(() => {
      setBouncedSearch(search)
    }, delay);

      return () => clearTimeout(timer);
  },[search, delay])
 return bouncedSearch;
}