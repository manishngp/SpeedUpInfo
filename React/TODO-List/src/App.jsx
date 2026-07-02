
import { useEffect, useState } from 'react';
import Newtodo from './components/Newtodo'
import Showtodo from './components/Showtodo'



function App() {
  const [todos, setTodos] = useState(()=>{
     const saved = localStorage.getItem("todoes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=>{
    
  
 localStorage.setItem("todoes", JSON.stringify(todos))
    
  },[todos])

  //     const saved = localStorage.getItem("todos");
  //   return saved ? JSON.parse(saved) : [];
  // });
  // const [filter, setFilter] = useState("all");

  // // ✅ Save to localStorage whenever todos change
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
 
  // console.log(todos);
 
  

  return (
    <>
    
      <Newtodo  todos={todos} setTodos={setTodos} />
      <Showtodo todos = {todos} setTodos={setTodos} />

    
      
    </>
  )
}

export default App
















// import { useState, useEffect } from "react";

// // TodoForm
// function TodoForm({ onAdd }) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     onAdd(input.trim());
//     setInput("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder="What needs to be done?"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// // FilterBar
// function FilterBar({ filter, onFilter }) {
//   const filters = ["all", "active", "completed"];
//   return (
//     <div>
//       {filters.map(f => (
//         <button
//           key={f}
//           onClick={() => onFilter(f)}
//           style={{ fontWeight: filter === f ? "bold" : "normal" }}
//         >
//           {f.charAt(0).toUpperCase() + f.slice(1)}
//         </button>
//       ))}
//     </div>
//   );
// }

// // TodoItem
// function TodoItem({ todo, onToggle, onDelete }) {
//   return (
//     <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
//       <input
//         type="checkbox"
//         checked={todo.done}
//         onChange={() => onToggle(todo.id)}
//       />
//       <span>{todo.text}</span>
//       <button onClick={() => onDelete(todo.id)}>Delete</button>
//     </li>
//   );
// }

// // TodoList
// function TodoList({ todos, onToggle, onDelete }) {
//   if (todos.length === 0) return <p>No todos here!</p>;

//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={onToggle}
//           onDelete={onDelete}
//         />
//       ))}
//     </ul>
//   );
// }

// // App -- the brain
// function App() {
//   const [todos, setTodos] = useState(() => {
//     // ✅ Lazy initializer -- reads localStorage only ONCE on mount
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [filter, setFilter] = useState("all");

//   // ✅ Save to localStorage whenever todos change
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // ✅ Derived state -- NOT useState
//   const filteredTodos = todos.filter(todo => {
//     if (filter === "active") return !todo.done;
//     if (filter === "completed") return todo.done;
//     return true; // "all"
//   });

//   const remaining = todos.filter(t => !t.done).length;

//   const addTodo = (text) => {
//     setTodos(prev => [...prev, {
//       id: crypto.randomUUID(),
//       text,
//       done: false
//     }]);
//   };

//   const toggleTodo = (id) => {
//     setTodos(prev =>
//       prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(prev => prev.filter(t => t.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm onAdd={addTodo} />
//       <FilterBar filter={filter} onFilter={setFilter} />
//       <TodoList
//         todos={filteredTodos}
//         onToggle={toggleTodo}
//         onDelete={deleteTodo}
//       />
//       {/* && pattern */}
//       {todos.length > 0 && <p>{remaining} tasks remaining</p>}
//     </div>
//   );
// }

// export default App;