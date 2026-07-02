
import { useEffect } from 'react';
import { useState } from 'react'

function Newtodo({ todos, setTodos }) {

    const [todoName, setTodoName] = useState("")




    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id: Date.now(),
            name: todoName,
            completed : false
        };


        setTodos([...todos, newTodo]);


    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Task...' value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                <button>Add Todo</button>
            </form>

        </div>
    )
}

export default Newtodo