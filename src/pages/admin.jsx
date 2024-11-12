import DataService from "../services/dataService";
import "./styles/admin.css";
import { useState } from "react";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  })

  function handleCouponInput(e) {
    const val = e.target.value;
    const name = e.target.name;

    console.log(name, val);

    if (name === "code") {
      //creat a copy
      //modify the copy
      //set the copy back
    }
    let copy = { ...coupon }; //... = express the copy of
    if (name === "discount") {
      copy.discount = val;
    } else {
      copy.code = val;
    }
    setCoupon(copy);
  }
  function handleProductInput(e) {
    const val = e.target.value;
    const name = e.target.name;


    let copy = {...product};
    copy[name] = val;
    setProduct(copy);

  }

  function saveCoupon() {
    console.log(coupon);
  }

  function saveProd(){
    
    console.log(product);

    let service = new DataService();

    let fixedProduct = {...product};
    fixedProduct.price = parseFloat(fixedProduct.price);

    service.saveProducts(fixedProduct);
  }

  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <div className="product-adder">
        <div className="product-mngr">
          <form action="" className="form-label">
            
          <h3>Add Product</h3>
            <div >
              <label htmlFor="">
              
                Title
              </label>
              <input name="title" className="form-control" 
              onBlur={handleProductInput}/>
            </div>

            <div>
              <label htmlFor="" className="form-label">
                Category
              </label>
              <input name="category" className="form-control" 
              onBlur={handleProductInput}/>
            </div>

            <div>
              <label htmlFor="" className="form-label">
                Price
              </label>
              <input name="price" className="form-control"
              onBlur={handleProductInput} />
            </div>

            <div>
              <label htmlFor="" className="form-label">
                Image
              </label>
              <input name="image" className="form-control" 
              onBlur={handleProductInput}/>
            </div>
          </form>

          <button className="btn btn-outline-dark" onClick={saveProd}>Save Product</button>
        </div>

        <div className="coupons form-label">
          <h3>Manage Coupon</h3>
          <form action="">
            <div>
              <label htmlFor="" className="form-label">
                Code
              </label>
              <input
                className="form-control"
                name="couponCode"
                onBlur={handleCouponInput}
              />
            </div>
            <div>
              <label htmlFor="" className="form-label">
                Discount
              </label>
              <input
                type="number"
                name="discount"
                className="form-control"
                onBlur={handleCouponInput}
              />
            </div>
          </form>

          <button className="btn btn-outline-dark" onClick={saveCoupon}>
            Save Coupon
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
