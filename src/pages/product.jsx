import Quantity_Picker from './quanitityPicker';
import './styles/product.css'


function Product(props){

   function add(){
      console.log("Message");
      
   }
   
   return(
      <div className='product'>

         <img src={props.data.image} alt="" />

         <h3>{props.data.title}</h3>
         <span>props.key</span>
         <label htmlFor="">$Total</label>
         <label htmlFor="">${props.price}</label>
         <Quantity_Picker></Quantity_Picker>
         <button className='btn btn-sm btn-success' onClick={add}>Add</button>

      </div>
   );
}

export default Product;