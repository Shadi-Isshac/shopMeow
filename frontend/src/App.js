import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
  <Router>
   <Navbar click={() => setSideToggle(true)} />
   <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
   <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
        <Route exact path="/product/:id" element={<ProductScreen/>}/>
        <Route exact path="/cart" element={<CartScreen/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
