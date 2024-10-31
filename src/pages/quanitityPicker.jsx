import { useState } from 'react';
import './styles/quantityPicker.css'


function Quantity_Picker(props){
   const [quantity, setQuantity] = useState(1);

   function increase(){   
      console.log("Increasing");
      const val = quantity+1; 
      setQuantity(val);
      props.testMethod(val);
   }

   function decrease(){
      if(quantity>1){

         const val=quantity-1;
         setQuantity(val);
         props.testMethod(val);
      }
   }
   return(
      <div className = 'qt-picker'>


            <button className='btn btn-sm btn-outline-dark' onClick={decrease} disabled={quantity==1}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-outline-dark' 
            onClick={increase}>+</button>
            

      </div>
   );
}

export default Quantity_Picker;