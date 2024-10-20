import './styles/navbar.css';

function Navbar(){
   return(

      <div className='nav-pos'>
         {/* <nav>
            <div className='menu'>
               <a href="">Log In</a>
               <a href="">Search</a>
               <a href="">Subscribe</a>
               <a href="">Menu</a>
            </div>
         </nav> */}
         <nav class="navbar navbar-expand-lg navbar-dark navbar-color nav-width">
            <div class="container-fluid">
            <a class="navbar-brand " href="#">
                  <img src='./img/logo.png' alt="" width="30" height="24"></img>
                  {/* <img src='https://i.imgur.com/Lq3AkL1.png' alt="" width="30" height="24"></img> */}
                  </a>
               <a class="navbar-brand nav-title-font" href="#">Jeff's Produce</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <a class="nav-link" href="#">Log-in</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Subscribe</a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Menu
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a class="dropdown-item" href="#">Veggies</a></li>
                     <li><a class="dropdown-item" href="#">Fruits</a></li>
                     <li><hr class="dropdown-divider"></hr></li>
                     <li><a class="dropdown-item" href="#">Special Orders</a></li>
                  </ul>
                  </li>
               </ul>
               <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-success" type="submit">Search</button>
               </form>
            </div>
            </div>
         </nav>
      </div>

   );
}


export default Navbar;