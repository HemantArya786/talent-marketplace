import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/ContextApi";


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { user, userLoginned, setUser, setUserLoginned } = useAuth();

  const navigate = useNavigate()

  async function handleLogout() {

    try {
      await fetch('http:localhost:3000/auth/api/logout', { method: 'POST', credentials: 'include' });

      setUser(null);
      setUserLoginned(false);
      navigate(`/`)
    }
    catch (error) {
      console.error("Logout failed", error);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to={"/"}
            className="text-2xl font-bold text-blue-600"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            GTMotion
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Find talent
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Find work
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Why GTMotion
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Enterprise
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!userLoginned ? (
              <>
                <Link to={"/login"}>
                  <button className="text-gray-700 hover:text-blue-600 font-medium">
                    Log in
                  </button>
                </Link>
                <Link to={"/role-selection"}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={user?.profilePic}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">
                    {user?.name}
                  </span>
                  <i className="ri-arrow-down-s-line"></i>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg py-2 z-50">
                    <Link
                      to={"/portfolio"}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      View Portfolio
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Find talent
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Find work
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Why GTMotion
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Enterprise
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </Link>
              <hr className="border-gray-200" />
              {!isLoggedIn ? (
                <>
                  <Link
                    to={"/login"}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Log in
                  </Link>
                  <Link to={"/role-selection"}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
                      Sign up
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/portfolio"}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    View Portfolio
                  </Link>
                  <button
                    onClick={() => {
                      // TODO: Logout logic here
                    }}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Log out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
