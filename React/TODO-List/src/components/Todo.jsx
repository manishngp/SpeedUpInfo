import React from 'react'

  

const Todo = ({title, id,completed, setTodos}) => {
      function handleDelete(e, id){
        e.stopPropagation()
        setTodos(prev=>prev.filter(ele=>ele.id !== id))


    }

    function handleChecked(e, id){
    //    if(e.target.checked){
        //   setTodos(prev=>{
        //     const previous = [...prev];
        //     const toUpdate = previous.find(ele=>ele.id == id)
        //     const filtered = previous.filter(ele=>ele.id!==id)
        //     const newToAdd = {...toUpdate,  completed : true}
        //     const newFiltered = [...filtered, newToAdd]

        //     return newFiltered

        //     //   [...prev, {...prev.find(ele=>ele.id == id), completed : true}]
        //   }  )
        //  }   
        setTodos(prev=>prev.map((ele)=>
            ele.id === id ? { ...ele, completed: e.target.checked } : ele
        ))
       
    }
  return (
    <div>
        <h1>{title} <span>{}</span></h1>
        <input type="checkbox" name="" id="" checked={completed?true :false} onChange={(e)=>handleChecked(e, id)} />
        <p>{completed?"Task Completed !" :"Not Completed X"}</p>
        <button onClick={(e)=>handleDelete(e,id)}>Delete</button>
    </div>
  )
}

export default Todo