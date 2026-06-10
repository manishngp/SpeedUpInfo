// // import Hero_section from "./components/Hero_section"
// // import Props from "./components/Props"
// import { TodoItem } from "./components/Todo";
// import "./index.css"

import Cards from "./components/Cards";

// function App() {

//   //  const handleDelete = (id) => {
//   //   console.log("Delete", id);
//   // };

// // const user = {
// //     name: "Rahul",
// //     role: "Developer",
// //     avatar: "pic.jpg",
// //     isOnline: true,
// //   };

//   return (
//     <>
//     {/* <Hero_section /> */}
//     {/* <Props  
//     name={user.name}
//       role={user.role}
//       avatar={user.avatar}
//       isOnline={user.isOnline} */}
//       {/* /> */}
//       <TodoItem id={1} onDelete={handleDelete}  text={"raghav shastri"}/>

//     </>
//   )
// }

// export default App




function App() {

  const products = [{
    name: "laptop",
    price: 34000,
    category: "Electronics",
    rating: 4.5,
    inStock: true,
    id:345
 
  },
  {
    name: "laptop1",
    price: 80000,
    category: "Portronics",
    rating: 4.5,
    inStock: false,
    id:798
   
  }

  ];


  function addToCart(id){

      console.log("add to card ", id);
     
   
  }

  return (
    <>
  <Cards  products={products} addtocart={addToCart} />
    </>
  )
}

export default App