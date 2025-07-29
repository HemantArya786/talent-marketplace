import React, { useState } from "react";
import Image from "../../public/image.jpg"
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Implement validation or backend call here
  };

  return (
    <div className="flex h-screen">
 {/* Right: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={Image}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome back</h2>

          {/* Social Login */}
          <div className="flex flex-col gap-4">
            <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              Continue with LinkedIn
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Show Password */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="show-password"
                onChange={() => setShowPassword(!showPassword)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="show-password" className="text-sm text-gray-700">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Redirect */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to={"/signup"} className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

     
    </div>
  );
}
