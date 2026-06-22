
import { useState } from 'react';
import './App.css'

function App() {
  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "Beauty",
      brand: "Essence",
      price: 799,
      stock: 25,
      rating: 4.9,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      id: 2,
      title: "Eyeshadow Palette",
      category: "Beauty",
      brand: "Glamour",
      price: 1499,
      stock: 15,
      rating: 4.7,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
    },
    {
      id: 3,
      title: "Calvin Klein CK One",
      category: "Fragrances",
      brand: "Calvin Klein",
      price: 4299,
      stock: 12,
      rating: 4.8,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
    },
    {
      id: 4,
      title: "Dior J'adore",
      category: "Fragrances",
      brand: "Dior",
      price: 8999,
      stock: 10,
      rating: 4.9,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dior-jadore/1.webp"
    },
    {
      id: 5,
      title: "Apple iPhone 13",
      category: "Smartphones",
      brand: "Apple",
      price: 69999,
      stock: 8,
      rating: 4.8,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/smartphones/apple-iphone-13/1.webp"
    },
    {
      id: 6,
      title: "Samsung Galaxy S23",
      category: "Smartphones",
      brand: "Samsung",
      price: 64999,
      stock: 6,
      rating: 4.7,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s23/1.webp"
    },
    {
      id: 7,
      title: "MacBook Pro",
      category: "Laptops",
      brand: "Apple",
      price: 159999,
      stock: 5,
      rating: 4.9,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp"
    },
    {
      id: 8,
      title: "Asus Zenbook",
      category: "Laptops",
      brand: "Asus",
      price: 89999,
      stock: 9,
      rating: 4.6,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-duo/1.webp"
    },
    {
      id: 9,
      title: "Football",
      category: "Sports",
      brand: "Adidas",
      price: 999,
      stock: 30,
      rating: 4.5,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp"
    },
    {
      id: 10,
      title: "Baseball",
      category: "Sports",
      brand: "Wilson",
      price: 699,
      stock: 40,
      rating: 4.4,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/sports-accessories/baseball/1.webp"
    },
    {
      id: 11,
      title: "Red T-Shirt",
      category: "Clothing",
      brand: "Nike",
      price: 1499,
      stock: 18,
      rating: 4.6,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/tops/red-t-shirt/1.webp"
    },
    {
      id: 12,
      title: "Blue Jeans",
      category: "Clothing",
      brand: "Levi's",
      price: 2499,
      stock: 22,
      rating: 4.7,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp"
    },
    {
      id: 13,
      title: "Sunglasses",
      category: "Accessories",
      brand: "Ray-Ban",
      price: 5999,
      stock: 14,
      rating: 4.8,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/sunglasses/classic-retro-sunglasses/1.webp"
    },
    {
      id: 14,
      title: "Handbag",
      category: "Bags",
      brand: "Gucci",
      price: 12999,
      stock: 7,
      rating: 4.8,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/womens-bags/blue-women-handbag/1.webp"
    },
    {
      id: 15,
      title: "Running Shoes",
      category: "Shoes",
      brand: "Nike",
      price: 4999,
      stock: 16,
      rating: 4.7,
      qty:1,
      image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp"
    }
  ];

  const [cart, setCart] = useState([{
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "Beauty",
    brand: "Essence",
    price: 799,
    stock: 25,
    rating: 4.9,
    qty:1,
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  }])

  function addToCart(id){
    const product = products.find((elem)=>elem.id === id)
    setCart(prev =>([...prev, product]))
  }

  function remove(id){
    setCart(prev => prev.filter((ele)=>ele.id!==id));
  }

  function incQty(id){
    setCart(prev =>prev.map((ele)=> ele.id ===id ? {...ele, qty: ele.qty+1 }: ele ) )
  }

   function decQty(id){
    setCart(prev =>prev.map((ele)=> ele.id ===id && ele.qty>1 ? {...ele, qty: ele.qty-1 }: ele ) )
  }

  const totalamt = cart.reduce((acc, curr)=>{
    return acc + (curr.price * curr.qty);
  }, 0)

  return (
    <>
      {/* id: 1,
    title: "Apple iPhone 15",
    category: "Mobiles",
    brand: "Apple",
    price: 79999,
    stock: 18,
    rating: 4.8,
    image: "https://picsum.photos/300?random=1" */}
      {/* <div className='container'>
        {
          products.map((ele) => (
            <div className='card' key={ele.id}>
              <img src={ele.image} alt="product_image" />
              <h2>{ele.category}</h2>
              <h2>{ele.brand}</h2>
              <h3>{ele.price}</h3>
              <h4>{ele.rating}</h4>
              <button>Add to cart</button>
            </div>
          ))
        }

      </div> */}
      <div
  style={{
    width: "70%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "25px",
    padding: "30px",
    backgroundColor: "#f5f5f5",
    float: "left",
  }}
>
  {products.map((ele) => (
    <div
      key={ele.id}
      style={{
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <img
        src={ele.image}
        alt={ele.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "18px" }}>
        <h2
          style={{
            margin: "0",
            fontSize: "20px",
            color: "#222",
          }}
        >
          {ele.title}
        </h2>

        <p
          style={{
            margin: "8px 0",
            color: "#777",
            fontSize: "14px",
          }}
        >
          {ele.brand}
        </p>

        <p
          style={{
            color: "#999",
            marginBottom: "10px",
          }}
        >
          {ele.category}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <h3
            style={{
              color: "#2ecc71",
              margin: 0,
              fontSize: "22px",
            }}
          >
            ₹{ele.price}
          </h3>

          <span
            style={{
              background: "#f1c40f",
              padding: "4px 10px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            ⭐ {ele.rating}
          </span>
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#111827",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            
          }}
          className='addBtn'

          onClick={()=>addToCart(ele.id)}
        > 

          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
      {/* <div className='cart'>
        <h1>In your cart</h1>
        {
          cart.map((ele) => (
            <div className='cart_card' key={ele.id}>
              <div className='cartDiv1'>
                <img className='product_image_inCart' src={ele.image} alt="product_image" />
                <div>
                  <h4>{ele.title}</h4>
                  <div className='card_data_div'>

                    <h3>Price : {ele.price}</h3>
                    <div>
                      <button>-</button>
                      <span>123{ }</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          ))
        }
        <h3>Total Price</h3>
        <button>Proceed</button>
      </div> */}
      <div
  style={{
    width: "28%",
    float: "right",
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,.12)",
    minHeight: "100vh",
    position: "sticky",
    top: "20px",
  }}
>
  <h2
    style={{
      marginBottom: "25px",
      color: "#111827",
      textAlign: "center",
    }}
  >
    🛒 Your Cart
  </h2>

  {cart.map((ele) => (
    <div
      key={ele.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        borderRadius: "15px",
        padding: "12px",
        marginBottom: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <img
          src={ele.image}
          alt={ele.title}
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "12px",
            background: "#f3f4f6",
          }}
        />

        <div>
          <h4
            style={{
              margin: 0,
              color: "#111827",
            }}
          >
            {ele.title}
          </h4>

          <p
            style={{
              margin: "6px 0",
              color: "#16a34a",
              fontWeight: "bold",
            }}
          >
            ₹{ele.price}
          </p>
          <button onClick={()=>remove(ele.id)}>remove</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
        onClick={()=>decQty(ele.id)}
          style={{
            width: "32px",
            height: "32px",
            border: "none",
            borderRadius: "50%",
            background: "#ef4444",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            minWidth: "20px",
            textAlign: "center",
          }}
        >
         {ele.qty}
        </span>

        <button
        onClick={()=>incQty(ele.id)}
          style={{
            width: "32px",
            height: "32px",
            border: "none",
            borderRadius: "50%",
            background: "#22c55e",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
      
    </div>
  ))}

  <hr
    style={{
      margin: "20px 0",
      border: "1px solid #e5e7eb",
    }}
  />

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#111827",
    }}
  >
    <span>Total</span>
    <span>{totalamt}</span>
  </div>

  <button
    style={{
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: "12px",
      background: "#111827",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Proceed to Checkout
  </button>
</div>


    </>
  )
}

export default App
