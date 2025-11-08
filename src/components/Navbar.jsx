import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { categories } from "../data/extendedData";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900 z-50">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
            <img src="../logo.png" className="h-14" alt="Logo" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          {categories.map((category) => (
            <NavLink key={category} to={`/category/${category.replace("'", "").replace(" ", "-")}`}>
              <p className="capitalize">{category}</p>
            </NavLink>
          ))}
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex justify-center items-center animate-bounce text-sm">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;