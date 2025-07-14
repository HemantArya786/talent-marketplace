// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState("Talent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearchFilterToggle = () => {
    const filters = ["Talent", "Jobs", "Projects"];
    const currentIndex = filters.indexOf(searchFilter);
    const nextIndex = (currentIndex + 1) % filters.length;
    setSearchFilter(filters[nextIndex]);
  };

  return (
    <div className=" sticky bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Link to="/">
                    <span className="ml-2 text-xl font-bold text-gray-900">
                      Talent Marketplace
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Center Section - Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Find Talent Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
                  onClick={() => handleDropdownToggle("findTalent")}
                >
                  Find Talent
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                {activeDropdown === "findTalent" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-code mr-3 text-green-500"></i>
                      AI Developers
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-chart-line mr-3 text-green-500"></i>
                      GTM Experts
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-building mr-3 text-green-500"></i>
                      Agencies
                    </a>
                  </div>
                )}
              </div>

              {/* Find Work Dropdown */}
              <div className="relative">
                <Link to={"/find-work"}>
                  <button
                    className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
                    onClick={() => handleDropdownToggle("findWork")}
                  >
                    Find Work
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </button>
                </Link>

                {activeDropdown === "findWork" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white  rounded-md shadow-lg border border-gray-200 py-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-search mr-3 text-green-500"></i>
                      Browse Projects
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-paper-plane mr-3 text-green-500"></i>
                      Apply to Jobs
                    </a>
                  </div>
                )}
              </div>

              {/* Why Readdy.ai Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
                  onClick={() => handleDropdownToggle("whyReaddy")}
                >
                  Why Talent Marketplace
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                {activeDropdown === "whyReaddy" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-cogs mr-3 text-green-500"></i>
                      How it Works
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-star mr-3 text-green-500"></i>
                      Benefits
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-trophy mr-3 text-green-500"></i>
                      Success Stories
                    </a>
                  </div>
                )}
              </div>

              {/* What's New Dropdown */}
              <div className="relative ">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
                  onClick={() => handleDropdownToggle("whatsNew")}
                >
                  What's New
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                {activeDropdown === "whatsNew" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-blog mr-3 text-green-500"></i>
                      Blog
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-bell mr-3 text-green-500"></i>
                      Updates
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      <i className="fas fa-users mr-3 text-green-500"></i>
                      Community
                    </a>
                  </div>
                )}
              </div>

              {/* Pricing */}
              {/* <a
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Pricing
              </a> */}
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center px-3 py-2 border-r border-gray-200">
                    <button
                      onClick={handleSearchFilterToggle}
                      className="flex items-center text-sm w-16 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap"
                    >
                      {searchFilter}
                      <i className="fas fa-chevron-down ml-1 text-xs"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 bg-transparent border-none outline-none text-sm w-48"
                  />
                  <button className="px-3 py-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-search text-sm"></i>
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900 hover:border hover:border-blue-600 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Log in
                </Button>
              </Link>

              {/* Sign up Button */}
              <Link to="/signup-options">
                <Button className="bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-black text-white !rounded-button whitespace-nowrap cursor-pointer">
                  Sign up
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 cursor-pointer"
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
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 px-3 py-2">
                    Find Talent
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      AI Developers
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      GTM Experts
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Agencies
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 px-3 py-2">
                    Find Work
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Browse Projects
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Apply to Jobs
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 px-3 py-2">
                    Why Readdy.ai
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      How it Works
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Benefits
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Success Stories
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 px-3 py-2">
                    What's New
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Updates
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 py-1 cursor-pointer"
                    >
                      Community
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  className="block text-sm font-medium text-gray-900 px-3 py-2 cursor-pointer"
                >
                  Pricing
                </a>

                <div className="px-3 pt-4 space-y-3">
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      className="text-gray-700 hover:text-gray-900 hover:border hover:border-blue-600 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Log in
                    </Button>
                  </Link>

                  <Link to={"/signup-options"}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
