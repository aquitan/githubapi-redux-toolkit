import React from 'react';
import './index.css';
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
