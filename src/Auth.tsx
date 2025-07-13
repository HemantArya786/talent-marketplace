// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Auth: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "login" | "signup" | "role-selection"
  >("login");
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"talent" | "company" | null>(
    null
  );
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Error states
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [signupErrors, setSignupErrors] = useState<{ [key: string]: string }>(
    {}
  );
  const [generalError, setGeneralError] = useState("");

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= 8 && hasUpperCase && hasNumber && hasSpecialChar;
  };

  const validateLoginForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!loginForm.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(loginForm.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!loginForm.password) {
      errors.password = "Password is required";
    }

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateSignupForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!signupForm.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!signupForm.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(signupForm.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!signupForm.password) {
      errors.password = "Password is required";
    } else if (!validatePassword(signupForm.password)) {
      errors.password =
        "Password must be at least 8 characters with uppercase, number, and special character";
    }

    if (!acceptTerms) {
      errors.terms = "You must accept the terms and conditions";
    }

    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateLoginForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful login
      console.log("Login successful");
    }, 2000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateSignupForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful signup
      console.log("Signup successful");
    }, 2000);
  };

  const handleOAuthLogin = (provider: "google" | "github") => {
    setIsLoading(true);
    // Simulate OAuth login
    setTimeout(() => {
      setIsLoading(false);
      console.log(`${provider} login successful`);
    }, 2000);
  };

  const handleRoleSelection = (role: "talent" | "company") => {
    setSelectedRole(role);
    setShowRoleModal(false);
    setCurrentPage("signup");
  };

  const getPasswordRequirements = () => {
    const requirements = [
      { text: "At least 8 characters", met: signupForm.password.length >= 8 },
      { text: "One uppercase letter", met: /[A-Z]/.test(signupForm.password) },
      { text: "One number", met: /\d/.test(signupForm.password) },
      {
        text: "One special character",
        met: /[!@#$%^&*(),.?":{}|<>]/.test(signupForm.password),
      },
    ];
    return requirements;
  };

  // Role Selection Modal
  const RoleSelectionModal = () => (
    <Dialog open={showRoleModal} onOpenChange={setShowRoleModal}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Choose Your Role
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Select how you want to use our platform
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 mt-6">
          <Card
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
              selectedRole === "talent"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setSelectedRole("talent")}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <i className="fas fa-user text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">I'm a Talent</h3>
              <p className="text-gray-600 text-sm">
                Looking for opportunities and want to showcase my skills
              </p>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
              selectedRole === "company"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setSelectedRole("company")}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <i className="fas fa-building text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">I'm a Company</h3>
              <p className="text-gray-600 text-sm">
                Looking to hire talented individuals for my organization
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Button
            onClick={() => selectedRole && handleRoleSelection(selectedRole)}
            disabled={!selectedRole}
            className="w-full !rounded-button whitespace-nowrap"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  // Login Page
  const LoginPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="mb-6">
            <i className="fas fa-briefcase text-4xl text-blue-600"></i>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>

        <CardContent>
          {generalError && (
            <Alert className="mb-4 border-red-200 bg-red-50">
              <AlertDescription className="text-red-600">
                {generalError}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                className={`text-sm ${
                  loginErrors.email ? "border-red-500" : ""
                }`}
              />
              {loginErrors.email && (
                <p className="text-red-500 text-xs">{loginErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className={`text-sm pr-10 ${
                    loginErrors.password ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {loginErrors.password && (
                <p className="text-red-500 text-xs">{loginErrors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full !rounded-button whitespace-nowrap"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOAuthLogin("google")}
                disabled={isLoading}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fab fa-google mr-2 text-red-500"></i>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOAuthLogin("github")}
                disabled={isLoading}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fab fa-github mr-2"></i>
                GitHub
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => setShowRoleModal(true)}
              className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );

  // Signup Page
  const SignupPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="mb-6">
            <i className="fas fa-briefcase text-4xl text-blue-600"></i>
          </div>
          <CardTitle className="text-2xl font-bold">
            Create Your Account
          </CardTitle>
          <CardDescription>Join us and start your journey</CardDescription>
        </CardHeader>

        <CardContent>
          {generalError && (
            <Alert className="mb-4 border-red-200 bg-red-50">
              <AlertDescription className="text-red-600">
                {generalError}
              </AlertDescription>
            </Alert>
          )}

          {selectedRole && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center">
                <i
                  className={`fas ${
                    selectedRole === "talent" ? "fa-user" : "fa-building"
                  } text-blue-600 mr-2`}
                ></i>
                <span className="text-sm font-medium text-blue-800">
                  Signing up as{" "}
                  {selectedRole === "talent" ? "Talent" : "Company"}
                </span>
                <button
                  type="button"
                  onClick={() => setShowRoleModal(true)}
                  className="ml-auto text-blue-600 hover:text-blue-800 text-xs cursor-pointer"
                >
                  Change
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={signupForm.fullName}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, fullName: e.target.value })
                }
                className={`text-sm ${
                  signupErrors.fullName ? "border-red-500" : ""
                }`}
              />
              {signupErrors.fullName && (
                <p className="text-red-500 text-xs">{signupErrors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signupEmail">Email Address</Label>
              <Input
                id="signupEmail"
                type="email"
                placeholder="Enter your email"
                value={signupForm.email}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
                }
                className={`text-sm ${
                  signupErrors.email ? "border-red-500" : ""
                }`}
              />
              {signupErrors.email && (
                <p className="text-red-500 text-xs">{signupErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signupPassword">Password</Label>
              <div className="relative">
                <Input
                  id="signupPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={signupForm.password}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, password: e.target.value })
                  }
                  className={`text-sm pr-10 ${
                    signupErrors.password ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>

              {signupForm.password && (
                <div className="mt-2 space-y-1">
                  {getPasswordRequirements().map((req, index) => (
                    <div key={index} className="flex items-center text-xs">
                      <i
                        className={`fas ${
                          req.met
                            ? "fa-check text-green-500"
                            : "fa-times text-red-500"
                        } mr-2`}
                      ></i>
                      <span
                        className={req.met ? "text-green-600" : "text-red-600"}
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {signupErrors.password && (
                <p className="text-red-500 text-xs">{signupErrors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </Label>
              </div>
              {signupErrors.terms && (
                <p className="text-red-500 text-xs">{signupErrors.terms}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full !rounded-button whitespace-nowrap"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOAuthLogin("google")}
                disabled={isLoading}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fab fa-google mr-2 text-red-500"></i>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOAuthLogin("github")}
                disabled={isLoading}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fab fa-github mr-2"></i>
                GitHub
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setCurrentPage("login")}
              className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              Sign in
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen">
      <style jsx>{`
        .!rounded-button {
          border-radius: 8px !important;
        }

        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>

      {currentPage === "login" && <LoginPage />}
      {currentPage === "signup" && <SignupPage />}
      <RoleSelectionModal />
    </div>
  );
};

export default Auth;
