import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './components/catalog';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import GlobalProvider from './state/globalProvider';

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
