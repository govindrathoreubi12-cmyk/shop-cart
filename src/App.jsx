import Navbar from "./components/Navbar"
import {Routes} from "react-router-dom";
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';


function App() {
  

  return (
    <div>
      <Navbar/>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/category/:category" element={<CategoryPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
