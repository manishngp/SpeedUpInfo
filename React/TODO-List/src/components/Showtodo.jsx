import React from 'react'
import Todo from './Todo'
import { useState, useEffect } from 'react'

function Showtodo({ todos, setTodos }) {
    const [listTodos, setListTodos] = useState([])

    useEffect(() => {
    setListTodos(todos);
}, [todos]);

    function handleChange(e){
        if(e.target.value === 'completed'){
             setListTodos(todos.filter(ele=>ele.completed===true))
        }
        else if(e.target.value==='notcompleted'){
             setListTodos(todos.filter(ele=>ele.completed===false))
        }
        else{
             setListTodos(todos);
        }
    }
    console.log(listTodos, "ttt");
    return (
        <>
        <select name="" id="" onChange={handleChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Completed</option>
        </select>
            <div>
                {
                    listTodos.map((ele) => (

                        <Todo key={ele.id} title={ele.name} id={ele.id} completed={ele.completed} setTodos={setTodos} />

                    ))
                }


            </div>
        </>

    )
}

export default Showtodo