

function Cards({products, addtocart}) {
    
  return (
    <>
     {products.map((item, i)=>(
        <div  key={i}>
             <h1>{item.name}</h1>
        <h2>{item.category}</h2>
        <button onClick={()=> addtocart(item.id)}>add to cart</button>
        </div>
       
    )

    )
   }
    </>
  
  )
}

export default Cards