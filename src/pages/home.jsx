import './styles/home.css'
import { Link } from 'react-router-dom';


function Home(){
   
   
   return(
      <div className="home page">
         <div>

            <div className='home-topper'>  
               <img src="https://object-storage.shipt.com/cms/ExpertShoppers_702a9895337b6905e71e4efb38d85dd4.png?fio=true&auto=webp&format=pjpg&quality=75%2C75&width=1920" alt="" />
            </div> 
            <h1>Jeff's Produce</h1>
            <h3>Your one stop shop for everything Produce.</h3>
         </div>

         <ul>
            <li className="nav-item">
               <Link to="/catalog">- Start Shopping -</Link>
            </li>
            <li className="nav-item">
               <Link  to="/About">- About Us -</Link>
            </li>
         </ul>
      </div>
   );
}



export default Home;