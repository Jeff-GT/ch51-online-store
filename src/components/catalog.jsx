import "./styles/catalog.css";
import Product from "../pages/product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(function () {
    loadCatalog();
    loadCategories();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
  }

  function loadCategories() {
    let service = new DataService();
    let cats = service.getCategories();
    setCategories(cats);
  }

  function applyFilter(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="catalog page">
      <br />
      <h3 className="top-msg">
        We have {products.length} new Products for you!
      </h3>

      <div className="filters">
        {categories.map((cat) => (
          <button
            onClick={() => applyFilter(cat)}
            className="btn btn-sm btn-outline-success"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="catalog-controller">
        {products
          .filter(
            (prod) => prod.category === selectedCategory || !selectedCategory
          )
          .map((item) => (
            <Product key={item._id} data={item}></Product>
          ))}
      </div>
    </div>
  );
}

export default Catalog;
