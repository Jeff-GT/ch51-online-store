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
      <div className="cart">
         
         <h1> cart </h1>
         <h5>We have {globalCart.length} Products on your cart</h5>
         
         <div className='parent'>
            <div className='cart-prod'>
               {console.log(globalCart )};
               {globalCart.map(prod => 
               <div>
                  <img src={prod.image}/>
                  <h4>{prod.title}</h4>
                  <label>${prod.price}</label>
                  <label>#{prod.quantity}</label>
                  <label>${prod.price * prod.quantity}</label>
                  <button className='btn btn-sm btn-outline-danger'>Remove</button>
               </div>)}
            </div>

            <div className='side-menu'>
               <h4>Total</h4>
               <h2>${getTotal()}</h2>
            </div>


         </div>
         


      </div>
   );
}



export default Cart;