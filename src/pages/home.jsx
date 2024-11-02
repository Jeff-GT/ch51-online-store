import './styles/home.css'
import { Link } from 'react-router-dom';


function Home(){
   
   
   return(
      <div className="home page">
         

         <div className='home-topper'>  
            <div className='home-content'>
            
               <h1>Jeff's Produce</h1>
               <h3>Your one stop shop for everything Produce.</h3>
               <img src="/img/peach-img.jpg" alt="" />
               <img src="/img/eggplant.jpg" alt="" />
               <img src="/img/kiwi.jpg" alt="" />
               <img src="/img/bitter-mel.jpg" alt="" />
               <ul>
                  <li>
                  <Link className="homeLink" to="/catalog">- Start Shopping -</Link>
                  </li>
                  <li>
                     <Link className="homeLink" to="/About">- About Us -</Link>
                  </li>
               </ul>
         </div>
         </div>

         
      </div>
   );
}



export default Home;