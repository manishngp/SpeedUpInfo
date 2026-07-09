import React, { useCallback, useEffect, useState, useMemo } from 'react'
import ProductCard from './ProductCard';
import Cart from './Cart';

function DisplayCard() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products`);

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();
                setProducts(data);

            } catch (error) {
                console.log(error.message);
            }


        }

        fetchData();

    }, [])

    const productData = useMemo(() =>(
        products.filter((ele)=>ele.title.toLowerCase().includes(search.toLowerCase()))
    ), [products, search])

    function addToCart(id) {
        console.log("ad to cart runnded");
        const item = [...products].find((ele)=>ele.id === id);
        setCart(prev =>[...prev, {...item, qty : 1}]);
    }

    const onDelete = useCallback((id)=>{
        setCart(prev => prev.filter(ele=>ele.id !== id))
    },[])


    return (
        <>
            <input type="text" placeholder='searc here' value={search} onChange={(e)=>setSearch(e.target.value)} />
            {
                productData.map((ele) => (
                    <ProductCard key={ele.id} addInCart={addToCart} name={ele.title} id={ele.id} />
                ))
            }
                 <p>this is your cart</p>
            {
                cart.length > 0  &&  cart.map((ele) => (
                    <Cart key={ele.id} removeFromCart={onDelete} name={ele.title} id={ele.id} />
                ))

            }

           
        </>
    );
}

export default DisplayCard