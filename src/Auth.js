import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
const Auth = () => {
    const [currentPage, setCurrentPage] = useState("login");
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
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
    const [loginErrors, setLoginErrors] = useState({});
    const [signupErrors, setSignupErrors] = useState({});
    const [generalError, setGeneralError] = useState("");
    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= 8 && hasUpperCase && hasNumber && hasSpecialChar;
    };
    const validateLoginForm = () => {
        const errors = {};
        if (!loginForm.email) {
            errors.email = "Email is required";
        }
        else if (!validateEmail(loginForm.email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!loginForm.password) {
            errors.password = "Password is required";
        }
        setLoginErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const validateSignupForm = () => {
        const errors = {};
        if (!signupForm.fullName.trim()) {
            errors.fullName = "Full name is required";
        }
        if (!signupForm.email) {
            errors.email = "Email is required";
        }
        else if (!validateEmail(signupForm.email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!signupForm.password) {
            errors.password = "Password is required";
        }
        else if (!validatePassword(signupForm.password)) {
            errors.password =
                "Password must be at least 8 characters with uppercase, number, and special character";
        }
        if (!acceptTerms) {
            errors.terms = "You must accept the terms and conditions";
        }
        setSignupErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setGeneralError("");
        if (!validateLoginForm())
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Simulate successful login
            console.log("Login successful");
        }, 2000);
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        setGeneralError("");
        if (!validateSignupForm())
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Simulate successful signup
            console.log("Signup successful");
        }, 2000);
    };
    const handleOAuthLogin = (provider) => {
        setIsLoading(true);
        // Simulate OAuth login
        setTimeout(() => {
            setIsLoading(false);
            console.log(`${provider} login successful`);
        }, 2000);
    };
    const handleRoleSelection = (role) => {
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
    const RoleSelectionModal = () => (_jsx(Dialog, { open: showRoleModal, onOpenChange: setShowRoleModal, children: _jsxs(DialogContent, { className: "max-w-md mx-auto", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "text-center text-2xl font-bold", children: "Choose Your Role" }), _jsx(DialogDescription, { className: "text-center text-gray-600", children: "Select how you want to use our platform" })] }), _jsxs("div", { className: "grid grid-cols-1 gap-4 mt-6", children: [_jsx(Card, { className: `cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${selectedRole === "talent"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"}`, onClick: () => setSelectedRole("talent"), children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "mb-4", children: _jsx("i", { className: "fas fa-user text-4xl text-blue-600" }) }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "I'm a Talent" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Looking for opportunities and want to showcase my skills" })] }) }), _jsx(Card, { className: `cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${selectedRole === "company"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"}`, onClick: () => setSelectedRole("company"), children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "mb-4", children: _jsx("i", { className: "fas fa-building text-4xl text-blue-600" }) }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "I'm a Company" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Looking to hire talented individuals for my organization" })] }) })] }), _jsx("div", { className: "mt-6", children: _jsx(Button, { onClick: () => selectedRole && handleRoleSelection(selectedRole), disabled: !selectedRole, className: "w-full !rounded-button whitespace-nowrap", children: "Continue" }) })] }) }));
    // Login Page
    const LoginPage = () => (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: _jsxs(Card, { className: "w-full max-w-md shadow-lg", children: [_jsxs(CardHeader, { className: "text-center pb-6", children: [_jsx("div", { className: "mb-6", children: _jsx("i", { className: "fas fa-briefcase text-4xl text-blue-600" }) }), _jsx(CardTitle, { className: "text-2xl font-bold", children: "Welcome Back" }), _jsx(CardDescription, { children: "Sign in to your account to continue" })] }), _jsxs(CardContent, { children: [generalError && (_jsx(Alert, { className: "mb-4 border-red-200 bg-red-50", children: _jsx(AlertDescription, { className: "text-red-600", children: generalError }) })), _jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", placeholder: "Enter your email", value: loginForm.email, onChange: (e) => setLoginForm({ ...loginForm, email: e.target.value }), className: `text-sm ${loginErrors.email ? "border-red-500" : ""}` }), loginErrors.email && (_jsx("p", { className: "text-red-500 text-xs", children: loginErrors.email }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "password", type: showPassword ? "text" : "password", placeholder: "Enter your password", value: loginForm.password, onChange: (e) => setLoginForm({ ...loginForm, password: e.target.value }), className: `text-sm pr-10 ${loginErrors.password ? "border-red-500" : ""}` }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer", children: _jsx("i", { className: `fas ${showPassword ? "fa-eye-slash" : "fa-eye"}` }) })] }), loginErrors.password && (_jsx("p", { className: "text-red-500 text-xs", children: loginErrors.password }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "remember", checked: rememberMe, onCheckedChange: (checked) => setRememberMe(checked) }), _jsx(Label, { htmlFor: "remember", className: "text-sm text-gray-600", children: "Remember me" })] }), _jsx("button", { type: "button", className: "text-sm text-blue-600 hover:text-blue-800 cursor-pointer", children: "Forgot password?" })] }), _jsx(Button, { type: "submit", className: "w-full !rounded-button whitespace-nowrap", disabled: isLoading, children: isLoading ? (_jsxs(_Fragment, { children: [_jsx("i", { className: "fas fa-spinner fa-spin mr-2" }), "Signing in..."] })) : ("Sign In") })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-300" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-white text-gray-500", children: "or continue with" }) })] }), _jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [_jsxs(Button, { type: "button", variant: "outline", onClick: () => handleOAuthLogin("google"), disabled: isLoading, className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fab fa-google mr-2 text-red-500" }), "Google"] }), _jsxs(Button, { type: "button", variant: "outline", onClick: () => handleOAuthLogin("github"), disabled: isLoading, className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fab fa-github mr-2" }), "GitHub"] })] })] })] }), _jsx(CardFooter, { className: "text-center", children: _jsxs("p", { className: "text-sm text-gray-600", children: ["Don't have an account?", " ", _jsx("button", { onClick: () => setShowRoleModal(true), className: "text-blue-600 hover:text-blue-800 font-medium cursor-pointer", children: "Sign up" })] }) })] }) }));
    // Signup Page
    const SignupPage = () => (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: _jsxs(Card, { className: "w-full max-w-md shadow-lg", children: [_jsxs(CardHeader, { className: "text-center pb-6", children: [_jsx("div", { className: "mb-6", children: _jsx("i", { className: "fas fa-briefcase text-4xl text-blue-600" }) }), _jsx(CardTitle, { className: "text-2xl font-bold", children: "Create Your Account" }), _jsx(CardDescription, { children: "Join us and start your journey" })] }), _jsxs(CardContent, { children: [generalError && (_jsx(Alert, { className: "mb-4 border-red-200 bg-red-50", children: _jsx(AlertDescription, { className: "text-red-600", children: generalError }) })), selectedRole && (_jsx("div", { className: "mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200", children: _jsxs("div", { className: "flex items-center", children: [_jsx("i", { className: `fas ${selectedRole === "talent" ? "fa-user" : "fa-building"} text-blue-600 mr-2` }), _jsxs("span", { className: "text-sm font-medium text-blue-800", children: ["Signing up as", " ", selectedRole === "talent" ? "Talent" : "Company"] }), _jsx("button", { type: "button", onClick: () => setShowRoleModal(true), className: "ml-auto text-blue-600 hover:text-blue-800 text-xs cursor-pointer", children: "Change" })] }) })), _jsxs("form", { onSubmit: handleSignup, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fullName", children: "Full Name" }), _jsx(Input, { id: "fullName", type: "text", placeholder: "Enter your full name", value: signupForm.fullName, onChange: (e) => setSignupForm({ ...signupForm, fullName: e.target.value }), className: `text-sm ${signupErrors.fullName ? "border-red-500" : ""}` }), signupErrors.fullName && (_jsx("p", { className: "text-red-500 text-xs", children: signupErrors.fullName }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "signupEmail", children: "Email Address" }), _jsx(Input, { id: "signupEmail", type: "email", placeholder: "Enter your email", value: signupForm.email, onChange: (e) => setSignupForm({ ...signupForm, email: e.target.value }), className: `text-sm ${signupErrors.email ? "border-red-500" : ""}` }), signupErrors.email && (_jsx("p", { className: "text-red-500 text-xs", children: signupErrors.email }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "signupPassword", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "signupPassword", type: showPassword ? "text" : "password", placeholder: "Create a password", value: signupForm.password, onChange: (e) => setSignupForm({ ...signupForm, password: e.target.value }), className: `text-sm pr-10 ${signupErrors.password ? "border-red-500" : ""}` }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer", children: _jsx("i", { className: `fas ${showPassword ? "fa-eye-slash" : "fa-eye"}` }) })] }), signupForm.password && (_jsx("div", { className: "mt-2 space-y-1", children: getPasswordRequirements().map((req, index) => (_jsxs("div", { className: "flex items-center text-xs", children: [_jsx("i", { className: `fas ${req.met
                                                            ? "fa-check text-green-500"
                                                            : "fa-times text-red-500"} mr-2` }), _jsx("span", { className: req.met ? "text-green-600" : "text-red-600", children: req.text })] }, index))) })), signupErrors.password && (_jsx("p", { className: "text-red-500 text-xs", children: signupErrors.password }))] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-start space-x-2", children: [_jsx(Checkbox, { id: "terms", checked: acceptTerms, onCheckedChange: (checked) => setAcceptTerms(checked), className: "mt-1" }), _jsxs(Label, { htmlFor: "terms", className: "text-sm text-gray-600 leading-relaxed", children: ["I agree to the", " ", _jsx("button", { type: "button", className: "text-blue-600 hover:text-blue-800 cursor-pointer", children: "Terms of Service" }), " ", "and", " ", _jsx("button", { type: "button", className: "text-blue-600 hover:text-blue-800 cursor-pointer", children: "Privacy Policy" })] })] }), signupErrors.terms && (_jsx("p", { className: "text-red-500 text-xs", children: signupErrors.terms }))] }), _jsx(Button, { type: "submit", className: "w-full !rounded-button whitespace-nowrap", disabled: isLoading, children: isLoading ? (_jsxs(_Fragment, { children: [_jsx("i", { className: "fas fa-spinner fa-spin mr-2" }), "Creating account..."] })) : ("Create Account") })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-300" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-white text-gray-500", children: "or continue with" }) })] }), _jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [_jsxs(Button, { type: "button", variant: "outline", onClick: () => handleOAuthLogin("google"), disabled: isLoading, className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fab fa-google mr-2 text-red-500" }), "Google"] }), _jsxs(Button, { type: "button", variant: "outline", onClick: () => handleOAuthLogin("github"), disabled: isLoading, className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fab fa-github mr-2" }), "GitHub"] })] })] })] }), _jsx(CardFooter, { className: "text-center", children: _jsxs("p", { className: "text-sm text-gray-600", children: ["Already have an account?", " ", _jsx("button", { onClick: () => setCurrentPage("login"), className: "text-blue-600 hover:text-blue-800 font-medium cursor-pointer", children: "Sign in" })] }) })] }) }));
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("style", { jsx: true, children: `
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
      ` }), currentPage === "login" && _jsx(LoginPage, {}), currentPage === "signup" && _jsx(SignupPage, {}), _jsx(RoleSelectionModal, {})] }));
};
export default Auth;
