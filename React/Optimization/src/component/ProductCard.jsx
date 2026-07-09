import React from 'react'

function ProductCard({addInCart, name, id}) {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>addInCart(id)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard