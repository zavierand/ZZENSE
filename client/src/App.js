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
  Login 
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menswear' element={<Menswear />} />
        <Route path='/womenswear' element={<Womenswear />} />
        <Route path='/everything-else' element={<EverythingElse />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
