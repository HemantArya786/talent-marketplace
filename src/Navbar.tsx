// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Find Talent");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Find Talent", path: "/find" },
    { name: "Find Jobs", path: "/list" },
    { name: "AI Agents", path: "/ai-agents" },
    { name: "Companies", path: "/companies" },
    { name: "About Us", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  return (
    <div
      className={`  ${isDarkMode ? "dark bg-slate-900" : "bg-gray-50"}`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navbar */}
      <nav
        className={`w-full h-[70px]  ${
          isDarkMode
            ? "bg-slate-900/95 border-slate-700"
            : "bg-white/95 border-gray-200"
        } backdrop-blur-sm shadow-sm border-b rounded-lg sticky top-0 z-50 transition-all duration-200`}
      >
        <div className="max-w-7xl mx-auto px-16 h-full flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div
              className={`text-2xl font-semibold mr-8 cursor-pointer  ${
                isDarkMode ? "text-white" : "text-blue-400"
              } transition-colors duration-200`}
            >
              Talent Marketplace
            </div>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActiveLink(link.name)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeLink === link.name
                    ? isDarkMode
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-blue-800 border-b-2 border-blue-800"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-800"
                } hover:opacity-80`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section - Auth & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors duration-200 cursor-pointer !rounded-button whitespace-nowrap ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-slate-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <i
                className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"} text-lg`}
              ></i>
            </button>

            {/* Authentication Section */}
            {!isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-3">
                <Button
                  variant="outline"
                  className={`px-4 py-2 text-sm font-medium border transition-all duration-200 cursor-pointer !rounded-button whitespace-nowrap ${
                    isDarkMode
                      ? "border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Login
                </Button>
                <Button
                  className="px-4 py-2 text-sm font-medium bg-blue-800 text-white hover:bg-blue-900 transition-all duration-200 cursor-pointer !rounded-button whitespace-nowrap"
                  onClick={toggleLogin}
                >
                  Sign Up
                </Button>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src="https://readdy.ai/api/search-image?query=professional%20business%20person%20headshot%20with%20clean%20modern%20background%20and%20professional%20lighting%20setup&width=100&height=100&seq=avatar-001&orientation=squarish"
                        alt="User"
                      />
                      <AvatarFallback className="bg-blue-800 text-white text-sm">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`w-56 ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-gray-200"
                  }`}
                  align="end"
                >
                  <DropdownMenuLabel
                    className={isDarkMode ? "text-gray-200" : "text-gray-900"}
                  >
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator
                    className={isDarkMode ? "bg-slate-700" : "bg-gray-200"}
                  />
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-slate-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <i className="fas fa-user mr-2"></i>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-slate-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <i className="fas fa-cog mr-2"></i>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-slate-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <i className="fas fa-bell mr-2"></i>
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator
                    className={isDarkMode ? "bg-slate-700" : "bg-gray-200"}
                  />
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDarkMode
                        ? "text-gray-300 hover:bg-slate-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={toggleLogin}
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-md transition-colors duration-200 cursor-pointer !rounded-button whitespace-nowrap ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-slate-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <i
                className={`fas ${
                  isMobileMenuOpen ? "fa-times" : "fa-bars"
                } text-lg`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 w-full ${
              isDarkMode
                ? "bg-slate-900/98 border-slate-700"
                : "bg-white/98 border-gray-200"
            } backdrop-blur-sm border-b shadow-lg transition-all duration-300`}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setActiveLink(link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer !rounded-button whitespace-nowrap ${
                    activeLink === link
                      ? isDarkMode
                        ? "text-blue-400 bg-slate-800"
                        : "text-blue-800 bg-blue-50"
                      : isDarkMode
                      ? "text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                      : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                  }`}
                >
                  {link}
                </button>
              ))}

              {!isLoggedIn && (
                <div className="pt-4 border-t border-gray-200 dark:border-slate-700 space-y-3">
                  <Button
                    variant="outline"
                    className={`w-full text-sm font-medium border transition-all duration-200 cursor-pointer !rounded-button whitespace-nowrap ${
                      isDarkMode
                        ? "border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      toggleLogin();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full text-sm font-medium bg-blue-800 text-white hover:bg-blue-900 transition-all duration-200 cursor-pointer !rounded-button whitespace-nowrap"
                    onClick={() => {
                      toggleLogin();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}

      <style jsx global>{`
        .!rounded-button {
          border-radius: 8px !important;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
