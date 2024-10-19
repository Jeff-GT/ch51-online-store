
import './styles/catalog.css';
import Product from '../pages/product';
import DataService from '../services/dataService';
import { useState, useEffect } from 'react'

function Catalog(){
   
   const[products, setProducts] = useState([])
   const [categories, setCategories] = useState([])

   useEffect(function(){
      loadCatalog();
   },[]);

   function loadCatalog(){
      let service = new DataService();
      let prods = service.getProducts();
      setProducts(prods);
   }

   function loadCategories(){
      let service = new DataService();
      let cats = service.getCategories();
      setCategories(cats);
   }

   return (

      
      <div className='catalog'> <h3>We have {products.length} new Products for your!</h3> 
      <div className='filters'>{categories.map(cat => <button>test</button>)}</div>
      <br/>

         {

            products.map((item)=>(
               <Product key={item._id} data={item}></Product>
            ))
         /* <Product name="Title 1" price="3.99"/>
         <Product name="Title 2" price="2.99"/>
         <Product name="Title 3" price="5.99"/>
         <Product name="Title 4" price="100.99"/> */}

      </div>

   );
}

export default Catalog;