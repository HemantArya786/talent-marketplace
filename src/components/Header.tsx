import { Link } from "react-router-dom";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to={"#"}
            className="text-2xl font-bold text-blue-600"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            GTMotion
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Find talent
                <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Find work
                <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Why GTMotion
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Enterprise
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer"
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">
                Log in
              </button>
            </Link>
            <Link to={"#"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                Sign up
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line w-6 h-6 flex items-center justify-center text-2xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to={"#"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Find talent
              </Link>
              <Link
                to={"#"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Find work
              </Link>
              <Link
                to={"#"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Why GTMotion
              </Link>
              <Link
                to={"#"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Enterprise
              </Link>
              <Link
                to={"#"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </Link>
              <hr className="border-gray-200" />
              <Link
                to={"#"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Log in
              </Link>
              <Link to={"#"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer w-full">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
