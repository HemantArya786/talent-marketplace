// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUpOptionPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl font-semibold text-gray-900 text-center mb-16">
            Join as a company or AI/GTM expert
          </h1>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Company Card */}
            <div
              className={`relative p-8 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedRole === "company"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedRole("company")}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-briefcase text-2xl text-gray-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    I'm a company, hiring for a project
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedRole === "company"
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedRole === "company" && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Card */}
            <div
              className={`relative p-8 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedRole === "expert"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedRole("expert")}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-laptop text-2xl text-gray-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    I'm an AI/GTM expert, looking for work
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedRole === "expert"
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedRole === "expert" && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Account Button */}
          <div className="flex justify-center mb-8">
            <Link to={"/signup-page"}>
              <Button
                className={`px-12 py-3 text-lg font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                  selectedRole
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedRole}
              >
                Create Account
              </Button>
            </Link>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              to={"/login"}
              className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpOptionPage;
