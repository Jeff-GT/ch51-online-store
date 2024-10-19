import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './components/catalog';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
   return (
   <div className="App">
      <Navbar></Navbar>
      <h2>About</h2>
      <Footer></Footer>
   </div>
   );
}

export default App;
