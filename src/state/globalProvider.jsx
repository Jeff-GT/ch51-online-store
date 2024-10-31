import DataContext from "./dataContext";
import { useState } from "react";


function GlobalProvider(props){

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name:"uwu_Master", id: 68419});

  function addToCart(product){
    /**
     * create a copy (of an aray)
     * modify the copy
     * set the copy backl
     */
    const copy = [...cart];

    //find if the product already exists in the cart
    let found = false;
    for(let i=0; i<copy.length; i++){
      let existingProduct = copy[i];
      if(existingProduct._id === product._id){
        found = true;
        // existingProduct.quantity = existingProduct.quantity+product.quantity;
        existingProduct.quantity += product.quantity;
      }
    }
    if(!found){
      copy.push(product);
    }

    setCart(copy);
  }

  function removeFromCart(){

  }

  function clearCart(){

  }

  return(
    <DataContext.Provider value={{
      cart: cart,
      user: user,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      clearCart: clearCart,
    }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;