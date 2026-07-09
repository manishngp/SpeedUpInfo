import React, { memo } from 'react'

const Cart = memo( function Cart( {removeFromCart, name , id})  {
  return (
     <div>
       
      <h1>{name}</h1>
      <button onClick={()=>removeFromCart(id)}>delete from cart</button>
    </div>
  )
}
)
export default Cart

