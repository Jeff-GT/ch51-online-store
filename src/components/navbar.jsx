import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function Navbar() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  function countProducts(){
    /** countal eual to 0
     * travel the cart, get every prod
     * append the prod.quantity to count
     * 
     * return  count
     */
    let count=0;

    for(let i=0;i<cart.length;i++){
      const prod = cart[i];
      count += prod.quantity;
    }

    return count;
  }


  return (
    <div className="nav-pos">
      {/* <nav>
            <div className='menu'>
              <a href="">Log In</a>
              <a href="">Search</a>
              <a href="">Subscribe</a>
              <a href="">Menu</a>
            </div>
         </nav> */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-color nav-width">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img src="./img/logo.png" alt="" width="30" height="24"></img>
            {/* <img src='https://i.imgur.com/Lq3AkL1.png' alt="" width="30" height="24"></img> */}
          </a>
          <a className="navbar-brand nav-title-font" href="#">
            Jeff's Produce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <div className="btn btn-outline-light me-3">{user.name}</div>
              
                <Link to="/cart">
                <button type="button" className="right btn btn-primary position-relative">
                  <img src="/img/cart.svg" alt="" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {countProducts()}
                  </span>
                </button>
                </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
