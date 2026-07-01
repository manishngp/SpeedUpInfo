import { useState } from "react"


function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "bottle" },
    { id: 2, name: "notebook" }
  ]);

  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    const newprods = [...products, { id: new Date(), name: input }]
    setProducts(newprods);
  }

  function handlekey(e) {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }
  function handleDelete(e, id) {

    e.stopPropagation();
    setProducts(prev => prev.filter(p => p.id !== id));

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={input} onKeyDown={handlekey} onChange={(e) => setInput(e.target.value)} />
        <button>submit</button>
      </form>
      {
        products.map((ele) => (
          <div key={ele.id} onClick={() => console.log("vewing card")}>
            <h1 >{ele.name}</h1>
            <button onClick={(e)=>handleDelete(e, ele.id)}>delete</button>
          </div>

        ))
      }
    </div>
  )
}

export default App