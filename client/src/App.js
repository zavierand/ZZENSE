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
        <Route to='/' element={<Home />} />
        <Route to='/menswear' element={<Menswear />} />
        <Route to='/womenswear' element={<Womenswear />} />
        <Route to='/everything-else' element={<EverythingElse />} />
        <Route to='/sale' element={<Sale />} />
        <Route to='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
