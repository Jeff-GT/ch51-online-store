import Quantity_Picker from './quanitityPicker';
import './styles/product.css'
import { useState } from 'react';


function Product(props){
   const [quantity, setQuantity] = useState(1);

   function add(){
      console.log("Message");
      
   }
   
   function handleQuantity(qty){
      console.log("Quantity Changed", qty)
      setQuantity(qty);
   }

   function getTotal (){
      let total=props.data.price*quantity.toFixed(2)
      return total.toFixed(2)
   }

   return(
      <div className='product'>
         <img src={props.data.image} alt="" />
         

         <h3 className='font'>{props.data.title}</h3>
         <div>
            <label className='font'>${parseFloat(props.data.price).toFixed(2)}</label>
         </div>
         
         <Quantity_Picker onChange={handleQuantity}></Quantity_Picker>

         <button className='btn btn-sm btn-success' onClick={add}>Add</button>
         <div>
            <label className='total font'>Total: ${getTotal()}</label>
         </div>
      </div>
   );
}

export default Product;