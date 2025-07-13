import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
const ListOfCompanyAndJobs = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const jobsData = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            budget: "$5,000 - $8,000",
            description: "We are looking for an experienced full stack developer to join our dynamic team. You will be responsible for developing scalable web applications using modern technologies and frameworks.",
            tags: ["React", "Node.js", "TypeScript", "MongoDB"],
            company: "TechCorp Solutions",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            budget: "$3,500 - $5,500",
            description: "Join our creative team as a UI/UX designer where you will create intuitive and beautiful user interfaces for our digital products. Experience with design systems is a plus.",
            tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
            company: "Design Studio Pro",
        },
        {
            id: 3,
            title: "DevOps Engineer",
            budget: "$6,000 - $9,000",
            description: "We need a skilled DevOps engineer to help us streamline our deployment processes and maintain our cloud infrastructure. AWS experience is highly preferred.",
            tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            company: "CloudTech Innovations",
        },
        {
            id: 4,
            title: "Mobile App Developer",
            budget: "$4,000 - $6,500",
            description: "Develop cutting-edge mobile applications for iOS and Android platforms. You will work closely with our product team to deliver exceptional user experiences.",
            tags: ["React Native", "Flutter", "iOS", "Android"],
            company: "MobileFirst Inc",
        },
        {
            id: 5,
            title: "Data Scientist",
            budget: "$5,500 - $8,500",
            description: "Analyze complex datasets and build machine learning models to drive business insights. Strong background in statistics and programming required.",
            tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
            company: "DataDriven Analytics",
        },
        {
            id: 6,
            title: "Product Manager",
            budget: "$7,000 - $10,000",
            description: "Lead product strategy and roadmap development for our flagship SaaS platform. Experience in B2B software products is essential for this role.",
            tags: ["Product Strategy", "Agile", "Analytics", "Leadership"],
            company: "SaaS Innovations",
        },
    ];
    const companiesData = [
        {
            id: 1,
            name: "TechCorp Solutions",
            industry: "Software Development",
            jobsCount: 15,
            logo: "https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20geometric%20shapes%20and%20clean%20design%20on%20white%20background%20minimalist%20corporate%20branding&width=80&height=80&seq=tech1&orientation=squarish",
        },
        {
            id: 2,
            name: "Design Studio Pro",
            industry: "Creative Agency",
            jobsCount: 8,
            logo: "https://readdy.ai/api/search-image?query=creative%20design%20agency%20logo%20with%20artistic%20elements%20and%20vibrant%20colors%20on%20white%20background%20modern%20branding&width=80&height=80&seq=design1&orientation=squarish",
        },
        {
            id: 3,
            name: "CloudTech Innovations",
            industry: "Cloud Computing",
            jobsCount: 22,
            logo: "https://readdy.ai/api/search-image?query=cloud%20computing%20company%20logo%20with%20cloud%20symbols%20and%20tech%20elements%20on%20white%20background%20professional%20corporate%20design&width=80&height=80&seq=cloud1&orientation=squarish",
        },
        {
            id: 4,
            name: "MobileFirst Inc",
            industry: "Mobile Technology",
            jobsCount: 12,
            logo: "https://readdy.ai/api/search-image?query=mobile%20technology%20company%20logo%20with%20smartphone%20icons%20and%20modern%20design%20on%20white%20background%20clean%20corporate%20branding&width=80&height=80&seq=mobile1&orientation=squarish",
        },
        {
            id: 5,
            name: "DataDriven Analytics",
            industry: "Data Science",
            jobsCount: 18,
            logo: "https://readdy.ai/api/search-image?query=data%20analytics%20company%20logo%20with%20chart%20graphs%20and%20data%20visualization%20elements%20on%20white%20background%20professional%20design&width=80&height=80&seq=data1&orientation=squarish",
        },
        {
            id: 6,
            name: "SaaS Innovations",
            industry: "Software as a Service",
            jobsCount: 25,
            logo: "https://readdy.ai/api/search-image?query=saas%20software%20company%20logo%20with%20modern%20geometric%20patterns%20and%20tech%20elements%20on%20white%20background%20corporate%20branding&width=80&height=80&seq=saas1&orientation=squarish",
        },
    ];
    return (_jsx("div", { className: `min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`, children: _jsxs("div", { className: "w-full max-w-9xl mx-auto", children: [_jsx("main", { className: "px-6 py-8", children: _jsxs(Tabs, { defaultValue: "jobs", className: "w-full", children: [_jsxs(TabsList, { className: `grid w-full grid-cols-2 mb-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`, children: [_jsxs(TabsTrigger, { value: "jobs", className: `text-lg font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-briefcase mr-2" }), "Jobs"] }), _jsxs(TabsTrigger, { value: "companies", className: `text-lg font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-building mr-2" }), "Companies"] })] }), _jsxs(TabsContent, { value: "jobs", className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: `text-3xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Available Jobs" }), _jsxs("p", { className: `text-lg transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: [jobsData.length, " positions available"] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: jobsData.map((job) => (_jsxs(Card, { className: `transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${darkMode
                                                ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                                                : "bg-white border-gray-200 hover:shadow-xl"}`, children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx(CardTitle, { className: `text-xl font-bold mb-2 line-clamp-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: job.title }), _jsx("p", { className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: job.company })] }), _jsx(Badge, { variant: "secondary", className: `ml-2 font-semibold ${darkMode
                                                                    ? "bg-blue-900 text-blue-200"
                                                                    : "bg-blue-100 text-blue-800"}`, children: job.budget })] }) }), _jsxs(CardContent, { className: "pb-4", children: [_jsx(CardDescription, { className: `text-sm line-clamp-3 mb-4 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: job.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: job.tags.map((tag, index) => (_jsx(Badge, { variant: "outline", className: `text-xs transition-colors duration-300 ${darkMode
                                                                    ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                                                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"}`, children: tag }, index))) })] }), _jsx(CardFooter, { children: _jsx(Link, { to: "/job-apply", "data-readdy": "true", className: "w-full", children: _jsxs(Button, { className: "w-full bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300", size: "sm", children: [_jsx("i", { className: "fas fa-paper-plane mr-2" }), "Apply Now"] }) }) })] }, job.id))) })] }), _jsxs(TabsContent, { value: "companies", className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: `text-3xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Featured Companies" }), _jsxs("p", { className: `text-lg transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: [companiesData.length, " companies hiring"] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: companiesData.map((company) => (_jsxs(Card, { className: `transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${darkMode
                                                ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                                                : "bg-white border-gray-200 hover:shadow-xl"}`, children: [_jsxs(CardHeader, { className: "text-center pb-4", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsxs(Avatar, { className: "w-20 h-20 border-2 border-gray-200", children: [_jsx(AvatarImage, { src: company.logo, alt: `${company.name} logo`, className: "object-cover" }), _jsx(AvatarFallback, { className: `text-xl font-bold ${darkMode
                                                                            ? "bg-gray-700 text-gray-300"
                                                                            : "bg-gray-100 text-gray-600"}`, children: company.name.charAt(0) })] }) }), _jsx(CardTitle, { className: `text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: company.name }), _jsxs(Badge, { variant: "secondary", className: `mx-auto ${darkMode
                                                                ? "bg-gray-700 text-gray-300"
                                                                : "bg-gray-100 text-gray-700"}`, children: [_jsx("i", { className: "fas fa-industry mr-1" }), company.industry] })] }), _jsx(CardContent, { className: "text-center pb-4", children: _jsxs("div", { className: `flex items-center justify-center space-x-2 text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: [_jsx("i", { className: "fas fa-briefcase" }), _jsxs("span", { children: [company.jobsCount, " open positions"] })] }) }), _jsx(CardFooter, { children: _jsx(Link, { to: "/company-page", "data-readdy": "true", className: "w-full", children: _jsxs(Button, { variant: "outline", className: `w-full !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300 ${darkMode
                                                                ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                                                                : "border-gray-300 text-gray-700 hover:bg-gray-50"}`, size: "sm", children: [_jsx("i", { className: "fas fa-eye mr-2" }), "View Profile"] }) }) })] }, company.id))) })] })] }) }), _jsx("footer", { className: `border-t mt-16 transition-colors duration-300 ${darkMode
                        ? "bg-gray-900 border-gray-700"
                        : "bg-white border-gray-200"}`, children: _jsxs("div", { className: "px-6 py-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs("div", { className: "col-span-1 md:col-span-2", children: [_jsx("h3", { className: `text-xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "JobBoard Pro" }), _jsx("p", { className: `text-sm leading-relaxed transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "Connect talented professionals with amazing opportunities. Find your dream job or discover exceptional talent for your team." })] }), _jsxs("div", { children: [_jsx("h4", { className: `font-semibold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "For Job Seekers" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                                ? "text-gray-400 hover:text-white"
                                                                : "text-gray-600 hover:text-gray-900"}`, children: "Browse Jobs" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                                ? "text-gray-400 hover:text-white"
                                                                : "text-gray-600 hover:text-gray-900"}`, children: "Career Advice" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                                ? "text-gray-400 hover:text-white"
                                                                : "text-gray-600 hover:text-gray-900"}`, children: "Resume Builder" }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: `font-semibold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "For Employers" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                                ? "text-gray-400 hover:text-white"
                                                                : "text-gray-600 hover:text-gray-900"}`, children: "Post a Job" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                                ? "text-gray-400 hover:text-white"
                                                                : "text-gray-600 hover:text-gray-900"}`, children: "Browse Talent" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                                ? "text-gray-400 hover:text-white"
                                                                : "text-gray-600 hover:text-gray-900"}`, children: "Pricing" }) })] })] })] }), _jsxs("div", { className: `border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300 ${darkMode ? "border-gray-700" : "border-gray-200"}`, children: [_jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "\u00A9 2024 JobBoard Pro. All rights reserved." }), _jsxs("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [_jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                    ? "text-gray-400 hover:text-white"
                                                    : "text-gray-600 hover:text-gray-900"}`, children: "Privacy Policy" }), _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                    ? "text-gray-400 hover:text-white"
                                                    : "text-gray-600 hover:text-gray-900"}`, children: "Terms of Service" }), _jsx("a", { href: "#", className: `text-sm hover:underline transition-colors duration-300 ${darkMode
                                                    ? "text-gray-400 hover:text-white"
                                                    : "text-gray-600 hover:text-gray-900"}`, children: "Contact Us" })] })] })] }) })] }) }));
};
export default ListOfCompanyAndJobs;
