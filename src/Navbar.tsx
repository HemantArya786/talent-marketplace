import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed  top-0 left-0 w-full z-50">
      <div className="text-2xl font-bold text-blue-600">Talent Marketplace</div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
        <Link to={"/"} className="hover:text-blue-600">Home</Link>
        <Link to={"/about"} className="hover:text-blue-600">About</Link>
        <Link to={"/services"} className="hover:text-blue-600">Services</Link>
        <Link to={"/contact"} className="hover:text-blue-600">Contact</Link>

        <div className="ml-4 space-x-2">
          <Link
            to={"/login"}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <Link to={"/"} className="hover:text-blue-600">Home</Link>
          <Link to={"/about"} className="hover:text-blue-600">About</Link>
          <Link to={"/services"} className="hover:text-blue-600">Services</Link>
          <Link to={"/contact" }className="hover:text-blue-600">Contact</Link>
          <Link
            to={"/login"}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
