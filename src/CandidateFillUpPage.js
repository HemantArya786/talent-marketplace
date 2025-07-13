import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const CandidateFillUpPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedinProfile: "",
        portfolioUrl: "",
        coverLetter: "",
        resumeFile: null,
        acceptTerms: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const companyData = {
        name: "TechCorp Solutions",
        logo: "https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20geometric%20shapes%20and%20clean%20design%20on%20white%20background%20minimalist%20corporate%20branding&width=80&height=80&seq=tech1&orientation=squarish",
    };
    const jobsData = [
        {
            id: "senior-fullstack",
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$120,000 - $160,000",
            description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
            requirements: [
                "5+ years React/Node.js experience",
                "Cloud platform expertise",
                "Agile development experience",
            ],
        },
        {
            id: "product-manager",
            title: "Product Manager",
            department: "Product",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$130,000 - $170,000",
            description: "Lead product strategy and roadmap development for our flagship SaaS platform.",
            requirements: [
                "3+ years product management",
                "SaaS platform experience",
                "Data-driven decision making",
            ],
        },
        {
            id: "ux-ui-designer",
            title: "UX/UI Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            salary: "$90,000 - $120,000",
            description: "Create intuitive and beautiful user interfaces for our digital products.",
            requirements: [
                "Portfolio of design work",
                "Figma/Sketch proficiency",
                "User research experience",
            ],
        },
        {
            id: "devops-engineer",
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$110,000 - $150,000",
            description: "Manage cloud infrastructure and deployment pipelines using AWS and Kubernetes.",
            requirements: [
                "AWS/Azure experience",
                "Kubernetes expertise",
                "CI/CD pipeline knowledge",
            ],
        },
        {
            id: "data-scientist",
            title: "Data Scientist",
            department: "Analytics",
            location: "Hybrid",
            type: "Full-time",
            salary: "$115,000 - $155,000",
            description: "Analyze complex datasets and build machine learning models to drive business insights.",
            requirements: [
                "Python/R proficiency",
                "Machine learning experience",
                "Statistical analysis skills",
            ],
        },
    ];
    const selectedJobData = jobsData.find((job) => job.id === selectedJob);
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        }
        else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === "application/pdf" || file.type.includes("document")) {
                handleInputChange("resumeFile", file);
            }
        }
    };
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleInputChange("resumeFile", e.target.files[0]);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.acceptTerms || !selectedJob)
            return;
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Application submitted successfully!");
        }, 2000);
    };
    const isFormValid = () => {
        return (formData.fullName &&
            formData.email &&
            formData.phone &&
            formData.location &&
            selectedJob &&
            formData.acceptTerms);
    };
    return (_jsx("div", { className: `min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`, children: _jsxs("div", { className: "w-full max-w-9xl mx-auto", children: [_jsx("header", { className: `sticky top-0 z-50 border-b transition-colors duration-300 ${darkMode
                        ? "bg-gray-900 border-gray-700"
                        : "bg-white border-gray-200"}`, children: _jsx("div", { className: "px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("a", { href: "https://readdy.ai/home/466648b8-c495-41c8-965f-d0b9f457ee7c/a8f6c8ef-f53e-4dff-b8c3-7e4d46d551ca", "data-readdy": "true", className: "cursor-pointer", children: _jsxs(Button, { variant: "outline", size: "sm", className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fas fa-arrow-left mr-2" }), "Back to Company"] }) }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs(Avatar, { className: "w-10 h-10 border border-gray-200", children: [_jsx(AvatarImage, { src: companyData.logo, alt: `${companyData.name} logo`, className: "object-cover" }), _jsx(AvatarFallback, { className: `text-sm font-bold ${darkMode
                                                                ? "bg-gray-700 text-gray-300"
                                                                : "bg-gray-100 text-gray-600"}`, children: "TC" })] }), _jsxs("h1", { className: `text-xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: ["Job Application - ", companyData.name] })] })] }), _jsxs(Button, { onClick: toggleDarkMode, variant: "outline", size: "sm", className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: `fas ${darkMode ? "fa-sun" : "fa-moon"} mr-2` }), darkMode ? "Light Mode" : "Dark Mode"] })] }) }) }), _jsx("main", { className: "px-6 py-8", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [_jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-gray-200"}`, children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-briefcase mr-2 text-blue-600" }), "Select Position"] }), _jsx(CardDescription, { className: `transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "Choose the position you would like to apply for" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs(Select, { value: selectedJob, onValueChange: setSelectedJob, children: [_jsx(SelectTrigger, { className: `w-full ${darkMode
                                                            ? "bg-gray-700 border-gray-600 text-white"
                                                            : "bg-white border-gray-300"}`, children: _jsx(SelectValue, { placeholder: "Select a position..." }) }), _jsx(SelectContent, { className: darkMode
                                                            ? "bg-gray-700 border-gray-600"
                                                            : "bg-white border-gray-300", children: jobsData.map((job) => (_jsx(SelectItem, { value: job.id, className: `cursor-pointer ${darkMode
                                                                ? "text-white hover:bg-gray-600"
                                                                : "text-gray-900 hover:bg-gray-100"}`, children: _jsxs("div", { className: "flex items-center justify-between w-full", children: [_jsx("span", { className: "font-medium", children: job.title }), _jsxs("span", { className: `text-sm ml-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: [job.department, " \u2022 ", job.location] })] }) }, job.id))) })] }), selectedJobData && (_jsxs("div", { className: `p-4 rounded-lg border transition-colors duration-300 ${darkMode
                                                    ? "bg-gray-700 border-gray-600"
                                                    : "bg-gray-50 border-gray-200"}`, children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { children: [_jsx("h3", { className: `text-lg font-semibold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: selectedJobData.title }), _jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [_jsx(Badge, { variant: "outline", className: `text-xs ${darkMode
                                                                                    ? "border-gray-500 text-gray-300"
                                                                                    : "border-gray-300 text-gray-700"}`, children: selectedJobData.department }), _jsx(Badge, { variant: "outline", className: `text-xs ${darkMode
                                                                                    ? "border-gray-500 text-gray-300"
                                                                                    : "border-gray-300 text-gray-700"}`, children: selectedJobData.location }), _jsx(Badge, { variant: "outline", className: `text-xs ${darkMode
                                                                                    ? "border-gray-500 text-gray-300"
                                                                                    : "border-gray-300 text-gray-700"}`, children: selectedJobData.type })] })] }), _jsx(Badge, { variant: "secondary", className: `font-semibold ${darkMode
                                                                    ? "bg-green-900 text-green-200"
                                                                    : "bg-green-100 text-green-800"}`, children: selectedJobData.salary })] }), _jsx("p", { className: `text-sm mb-3 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: selectedJobData.description }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Key Requirements:" }), _jsx("ul", { className: "space-y-1", children: selectedJobData.requirements.map((req, index) => (_jsxs("li", { className: `text-sm flex items-start transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: [_jsx("i", { className: "fas fa-check text-green-500 mr-2 mt-0.5 text-xs" }), req] }, index))) })] })] }))] })] }), _jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-gray-200"}`, children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-user mr-2 text-blue-600" }), "Personal Information"] }), _jsx(CardDescription, { className: `transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "Please provide your contact details and basic information" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fullName", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Full Name *" }), _jsx(Input, { id: "fullName", type: "text", placeholder: "Enter your full name", value: formData.fullName, onChange: (e) => handleInputChange("fullName", e.target.value), className: `${darkMode
                                                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                                    : "bg-white border-gray-300 text-gray-900"} text-sm`, required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Email Address *" }), _jsx(Input, { id: "email", type: "email", placeholder: "Enter your email address", value: formData.email, onChange: (e) => handleInputChange("email", e.target.value), className: `${darkMode
                                                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                                    : "bg-white border-gray-300 text-gray-900"} text-sm`, required: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Phone Number *" }), _jsx(Input, { id: "phone", type: "tel", placeholder: "Enter your phone number", value: formData.phone, onChange: (e) => handleInputChange("phone", e.target.value), className: `${darkMode
                                                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                                    : "bg-white border-gray-300 text-gray-900"} text-sm`, required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "location", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Current Location *" }), _jsx(Input, { id: "location", type: "text", placeholder: "City, State/Country", value: formData.location, onChange: (e) => handleInputChange("location", e.target.value), className: `${darkMode
                                                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                                    : "bg-white border-gray-300 text-gray-900"} text-sm`, required: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "linkedin", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "LinkedIn Profile" }), _jsx(Input, { id: "linkedin", type: "url", placeholder: "https://linkedin.com/in/yourprofile", value: formData.linkedinProfile, onChange: (e) => handleInputChange("linkedinProfile", e.target.value), className: `${darkMode
                                                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                                    : "bg-white border-gray-300 text-gray-900"} text-sm` })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "portfolio", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Portfolio URL" }), _jsx(Input, { id: "portfolio", type: "url", placeholder: "https://yourportfolio.com", value: formData.portfolioUrl, onChange: (e) => handleInputChange("portfolioUrl", e.target.value), className: `${darkMode
                                                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                                    : "bg-white border-gray-300 text-gray-900"} text-sm` })] })] })] })] }), _jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-gray-200"}`, children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-file-upload mr-2 text-blue-600" }), "Resume Upload"] }), _jsx(CardDescription, { className: `transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "Upload your resume in PDF, DOC, or DOCX format (Max 5MB)" })] }), _jsx(CardContent, { children: _jsxs("div", { className: `border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${dragActive
                                                ? darkMode
                                                    ? "border-blue-400 bg-blue-900/20"
                                                    : "border-blue-400 bg-blue-50"
                                                : darkMode
                                                    ? "border-gray-600 hover:border-gray-500"
                                                    : "border-gray-300 hover:border-gray-400"}`, onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, onClick: () => document.getElementById("resume-upload")?.click(), children: [_jsx("input", { id: "resume-upload", type: "file", accept: ".pdf,.doc,.docx", onChange: handleFileChange, className: "hidden" }), formData.resumeFile ? (_jsxs("div", { className: "space-y-2", children: [_jsx("i", { className: "fas fa-file-check text-4xl text-green-500" }), _jsx("p", { className: `font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: formData.resumeFile.name }), _jsxs("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: [(formData.resumeFile.size / 1024 / 1024).toFixed(2), " MB"] }), _jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: (e) => {
                                                                e.stopPropagation();
                                                                handleInputChange("resumeFile", null);
                                                            }, className: "!rounded-button whitespace-nowrap cursor-pointer mt-2", children: [_jsx("i", { className: "fas fa-trash mr-2" }), "Remove File"] })] })) : (_jsxs("div", { className: "space-y-2", children: [_jsx("i", { className: "fas fa-cloud-upload-alt text-4xl text-gray-400" }), _jsx("p", { className: `font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Drag and drop your resume here" }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: "or click to browse files" }), _jsx("p", { className: `text-xs transition-colors duration-300 ${darkMode ? "text-gray-500" : "text-gray-400"}`, children: "Supported formats: PDF, DOC, DOCX (Max 5MB)" })] }))] }) })] }), _jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-gray-200"}`, children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-edit mr-2 text-blue-600" }), "Cover Letter"] }), _jsx(CardDescription, { className: `transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "Tell us why you are interested in this position and what makes you a great fit" })] }), _jsx(CardContent, { className: "space-y-4", children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "coverLetter", className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Your Message" }), _jsx(Textarea, { id: "coverLetter", placeholder: "Dear Hiring Manager,\n\nI am writing to express my interest in the [position title] role at TechCorp Solutions. With my experience in [relevant skills/experience], I believe I would be a valuable addition to your team.\n\n[Explain why you are interested in this role and company]\n\n[Highlight your relevant experience and achievements]\n\n[Conclude with enthusiasm and next steps]\n\nThank you for considering my application.\n\nBest regards,\n[Your name]", value: formData.coverLetter, onChange: (e) => handleInputChange("coverLetter", e.target.value), className: `min-h-48 resize-y ${darkMode
                                                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                                        : "bg-white border-gray-300 text-gray-900"} text-sm`, maxLength: 2000 }), _jsxs("div", { className: `text-right text-xs transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: [formData.coverLetter.length, "/2000 characters"] })] }) })] }), _jsx(Card, { className: `transition-colors duration-300 ${darkMode
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-gray-200"}`, children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(Checkbox, { id: "terms", checked: formData.acceptTerms, onCheckedChange: (checked) => handleInputChange("acceptTerms", checked), className: `mt-1 ${darkMode ? "border-gray-600" : "border-gray-300"}` }), _jsxs(Label, { htmlFor: "terms", className: `text-sm leading-relaxed cursor-pointer transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: ["I agree to the", " ", _jsx("a", { href: "#", className: `underline hover:no-underline transition-colors duration-300 ${darkMode
                                                                    ? "text-blue-400 hover:text-blue-300"
                                                                    : "text-blue-600 hover:text-blue-700"}`, children: "Terms and Conditions" }), " ", "and", " ", _jsx("a", { href: "#", className: `underline hover:no-underline transition-colors duration-300 ${darkMode
                                                                    ? "text-blue-400 hover:text-blue-300"
                                                                    : "text-blue-600 hover:text-blue-700"}`, children: "Privacy Policy" }), ". I consent to the processing of my personal data for recruitment purposes."] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [_jsx(Button, { type: "submit", disabled: !isFormValid() || isSubmitting, className: `flex-1 bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? "animate-pulse" : ""}`, children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("i", { className: "fas fa-spinner fa-spin mr-2" }), "Submitting Application..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fas fa-paper-plane mr-2" }), "Submit Application"] })) }), _jsxs(Button, { type: "button", variant: "outline", className: "!rounded-button whitespace-nowrap cursor-pointer", onClick: () => {
                                                            if (confirm("Are you sure you want to save this application as a draft?")) {
                                                                alert("Application saved as draft!");
                                                            }
                                                        }, children: [_jsx("i", { className: "fas fa-save mr-2" }), "Save Draft"] })] }), _jsxs("div", { className: `text-center text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: [_jsx("i", { className: "fas fa-info-circle mr-1" }), "Your application will be reviewed within 5-7 business days. You will receive a confirmation email shortly."] })] }) }) })] }) }), _jsx("footer", { className: `border-t mt-16 transition-colors duration-300 ${darkMode
                        ? "bg-gray-900 border-gray-700"
                        : "bg-white border-gray-200"}`, children: _jsx("div", { className: "px-6 py-8", children: _jsxs("div", { className: "text-center space-y-4", children: [_jsxs("div", { className: "flex items-center justify-center space-x-6", children: [_jsxs("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-600 hover:text-gray-900"}`, children: [_jsx("i", { className: "fas fa-question-circle mr-1" }), "Application Help"] }), _jsxs("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-600 hover:text-gray-900"}`, children: [_jsx("i", { className: "fas fa-envelope mr-1" }), "Contact HR"] }), _jsxs("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-600 hover:text-gray-900"}`, children: [_jsx("i", { className: "fas fa-shield-alt mr-1" }), "Privacy Policy"] })] }), _jsxs("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: ["\u00A9 2024 ", companyData.name, ". All rights reserved. | Equal Opportunity Employer"] })] }) }) })] }) }));
};
export default CandidateFillUpPage;
