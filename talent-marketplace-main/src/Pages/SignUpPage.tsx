// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from '@/lib/Firebase'
import { signInWithPopup } from 'firebase/auth'

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "India",
    emailConsent: true,
    termsAccepted: false,
  });
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.password.length >= 8 &&
    formData.termsAccepted;

    const navigate = useNavigate()

    //!Google login
  const handleGoogleLogin = async () => {

    try {
      const response = await signInWithPopup(auth, provider)

      const user = response.user
      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber
      }

      const apiResponse = await fetch('http://localhost:3000/api/google-login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userData)
      })

      if (!apiResponse.ok) {
        throw new Error('Failed to login.')
      }

      const responseData = await apiResponse.json()
      console.log(responseData)

      navigate('/candidate-fillup')
    } catch (error) {
      console.log(error)
    }

  }

  //! Linkedin Login
  const handleLinkedinLogin = () => {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
      redirect_uri: "http://localhost:3000/api/linkedin-login",
      scope: "openid email profile"
    })

    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div></div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">Here to hire talent?</span>
          <Link
            to={""}
            data-readdy="true"
            className="text-green-600 font-medium text-sm hover:text-green-700 cursor-pointer"
          >
            Join as a Company
          </Link>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 pb-12">
        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sign up to find work you love
          </h1>
        </div>
        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={handleLinkedinLogin}
            variant="outline"
            className="w-full h-12 border-gray-800  bg-blue-500 hover:bg-blue-300 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fab fa-apple mr-3 text-lg"></i>
            Continue with LinkedIn
          </Button>
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full h-12 border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fab fa-google mr-3 text-lg"></i>
            Continue with Google
          </Button>
        </div>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        {/* Form */}
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full h-12 border-gray-300 rounded-md px-3 text-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full h-12 border-gray-300 rounded-md px-3 text-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full h-12 border-gray-300 rounded-md px-3 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8 or more characters)"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full h-12 border-gray-300 rounded-md px-3 pr-10 text-sm focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </button>
            </div>
          </div>
          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full h-12 border-gray-300 rounded-md px-3 text-sm focus:border-green-500 focus:ring-green-500 appearance-none bg-white cursor-pointer"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
          </div>
          {/* Checkboxes */}
          <div className="space-y-4 mt-6">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="email-consent"
                checked={formData.emailConsent}
                onCheckedChange={(checked) =>
                  handleInputChange("emailConsent", checked as boolean)
                }
                className="mt-1"
              />
              <label
                htmlFor="email-consent"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Send me helpful emails to find rewarding work and job leads.
              </label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms-agreement"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) =>
                  handleInputChange("termsAccepted", checked as boolean)
                }
                className="mt-1"
              />
              <label
                htmlFor="terms-agreement"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Yes, I understand and agree to the{" "}
                <a
                  href="#"
                  className="text-green-600 underline hover:text-green-700 cursor-pointer"
                >
                  Readdy.ai Terms of Service
                </a>
                , including the{" "}
                <a
                  href="#"
                  className="text-green-600 underline hover:text-green-700 cursor-pointer"
                >
                  User Agreement
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-green-600 underline hover:text-green-700 cursor-pointer"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid}
            className={`w-full h-12 mt-8 font-medium text-white !rounded-button whitespace-nowrap cursor-pointer ${isFormValid
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Create my account
          </Button>
        </form>
        {/* Login Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="#"
              className="text-green-600 font-medium hover:text-green-700 cursor-pointer"
            >
              Log In
            </a>
          </span>
        </div>
      </main>
    </div>
  );
};
export default SignUpPage;
