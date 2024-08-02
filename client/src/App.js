// import dependencies
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import components
import Navbar from './components/Navbar.jsx';

// import pages
import { 
  Home, 
  Menswear, 
  Womenswear, 
  EverythingElse, 
  Sale, 
  Login,
  ProductPage,
  ShoppingBag,
  DesignerPage
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Navbar routes */}
        <Route path='/' element={<Home />} />
        <Route path='/men/*' element={<Menswear />} />
        <Route path='/women/*' element={<Womenswear />} />
        <Route path='/everything-else/*' element={<EverythingElse />} />
        <Route path='/sale/*' element={<Sale />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shopping-bag' element={<ShoppingBag />} />

        {/*dynamically render designers/types of clothing*/}
        <Route path='/:designer/:name' element={<ProductPage />} />
        <Route path='/:designer' element={<DesignerPage />} />

      </Routes>
    </Router>
  );
}

export default App;
