import { useEffect, useState } from "react";
import "./App.css"

function App() {

  const [data, setData] = useState({
    title :"",
    price:"",
    description :""
    
  })

  const [products, setProducts]=useState([]);

  useEffect(()=>{
   async function fetchData(){
     try {
       const productsData = await fetch("https://fakestoreapi.com/products");
      const productJsonData = await productsData.json();
      setProducts(productJsonData);
     } catch (error) {
      console.log(error)
     }
    

   }
   fetchData();
  },[])

  const submitHandler =async(e)=>{
    e.preventDefault()
     
     try {
     const res = await fetch("https://fakestoreapi.com/products" , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title : data.title,
        description:data.description,
        price:data.price
      })
     });
     
     const resData = await res.json();
     console.log("data sended", resData);
      
     } catch (error) {
      console.log(error);
     }
  }

  function handleChange(e){
        setData({...data,
          [e.target.name]:e.target.value
         })
  }

  return (
   
   

    <>
     <form action="" onSubmit={(e)=>{submitHandler(e)}}>
      <input type="text" value={data.title} name="title" onChange={(e)=>{

         console.log(e.target.value);
          handleChange(e)
      }} />
       <input type="text" value={data.price} name="price" onChange={(e)=>{
     
         console.log(e.target.value);
         handleChange(e)
      }} /> <input type="text" value={data.description} name="description" onChange={(e)=>{
      
         console.log(e.target.value);
          handleChange(e)
      }} />
      <button>Submit</button>
    </form>

    <div>
      {products.map((product)=>(
        <div>
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>
        </div>
      ))}
    </div>
    </>
  )

 

}

export default App