import './styles/cart.css'
import DataContext from '../state/dataContext';
import { useContext } from 'react';


function Cart(){
   
   const globalCart = useContext(DataContext).cart;

   function getTotal() {
      let total = 0;
      for(let i=0;i<globalCart.length; i++){
         const prod = globalCart[i];
         total+= (prod.quantity*prod.price);
      }

      return total.toFixed(2);
   }

   

   return(
      <div className="cart ">
         
         <h1> cart </h1>
         <h5>Please Review Your Cart</h5>
         
         <div className='parent'>

            <div className='list'>
               {console.log(globalCart )}
               {globalCart.map(prod => 
               <div  className='cart-prod'>
                  <img src={prod.image}/>
                  <h4>{prod.title}</h4>
                  <label>${prod.price}</label>
                  <label>Qty: {prod.quantity}</label>
                  <label>Subtotal: ${(prod.price * prod.quantity).toFixed(2)}</label>
                  <button className='btn btn-sm btn-outline-danger'>Remove</button>
               </div>)}
            </div>

            <div className='side-menu'>
               <h4>Summary</h4>
               <h5>Number of items:</h5>
               <h2>{globalCart.length}</h2>
               <h5>Total:</h5>
               <h2>${getTotal()}</h2>
            </div>


         </div>
         


      </div>
   );
}



export default Cart;