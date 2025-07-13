import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useToast } from "@/hooks/use-toast";
// import { Toaster } from "@/components/ui/toaster";
const CompanyPofilePage = () => {
    //   const [darkMode, setDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState("about");
    //   const [isFollowing, setIsFollowing] = useState(false);
    //   const { toast } = useToast();
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById("share-dropdown");
            const shareButton = document.getElementById("share-button");
            if (dropdown &&
                !dropdown.contains(event.target) &&
                shareButton &&
                !shareButton.contains(event.target)) {
                dropdown.classList.add("hidden");
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    //   const handleFollowClick = () => {
    //     setIsFollowing(!isFollowing);
    //     if (!isFollowing) {
    //       toast({
    //         title: "Success!",
    //         description:
    //           "Successfully followed TechCorp Solutions! You'll receive updates about new job openings and company news.",
    //         duration: 3000,
    //       });
    //     }
    //   };
    //   const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //   };
    const companyData = {
        name: "TechCorp Solutions",
        industry: "Software Development",
        logo: "https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20geometric%20shapes%20and%20clean%20design%20on%20white%20background%20minimalist%20corporate%20branding&width=80&height=80&seq=tech1&orientation=squarish",
        description: "Leading software development company specializing in cutting-edge web and mobile applications. We transform innovative ideas into powerful digital solutions that drive business growth.",
        employees: 250,
        founded: 2015,
        location: "San Francisco, CA",
        website: "www.techcorp-solutions.com",
        mission: "To revolutionize the digital landscape by creating innovative software solutions that empower businesses and enhance user experiences worldwide.",
        values: [
            "Innovation and creativity in everything we do",
            "Commitment to excellence and quality",
            "Collaborative teamwork and respect",
            "Continuous learning and growth",
            "Customer-centric approach",
        ],
    };
    const jobsData = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$120,000 - $160,000",
            description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
        },
        {
            id: 2,
            title: "Product Manager",
            department: "Product",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$130,000 - $170,000",
            description: "Lead product strategy and roadmap development for our flagship SaaS platform.",
        },
        {
            id: 3,
            title: "UX/UI Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            salary: "$90,000 - $120,000",
            description: "Create intuitive and beautiful user interfaces for our digital products.",
        },
        {
            id: 4,
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$110,000 - $150,000",
            description: "Manage cloud infrastructure and deployment pipelines using AWS and Kubernetes.",
        },
        {
            id: 5,
            title: "Data Scientist",
            department: "Analytics",
            location: "Hybrid",
            type: "Full-time",
            salary: "$115,000 - $155,000",
            description: "Analyze complex datasets and build machine learning models to drive business insights.",
        },
    ];
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            department: "Executive",
            image: "https://readdy.ai/api/search-image?query=professional%20business%20woman%20ceo%20executive%20portrait%20in%20modern%20office%20setting%20with%20clean%20background%20confident%20leadership%20style&width=200&height=200&seq=ceo1&orientation=squarish",
        },
        {
            name: "Michael Chen",
            role: "CTO",
            department: "Technology",
            image: "https://readdy.ai/api/search-image?query=professional%20male%20technology%20executive%20portrait%20in%20modern%20office%20with%20clean%20background%20confident%20tech%20leader&width=200&height=200&seq=cto1&orientation=squarish",
        },
        {
            name: "Emily Rodriguez",
            role: "VP of Product",
            department: "Product",
            image: "https://readdy.ai/api/search-image?query=professional%20female%20product%20manager%20portrait%20in%20modern%20workspace%20with%20clean%20background%20innovative%20leader&width=200&height=200&seq=vp1&orientation=squarish",
        },
        {
            name: "David Kim",
            role: "Head of Engineering",
            department: "Engineering",
            image: "https://readdy.ai/api/search-image?query=professional%20male%20software%20engineer%20portrait%20in%20tech%20office%20environment%20with%20clean%20background%20technical%20leader&width=200&height=200&seq=eng1&orientation=squarish",
        },
        {
            name: "Lisa Thompson",
            role: "Head of Design",
            department: "Design",
            image: "https://readdy.ai/api/search-image?query=professional%20female%20designer%20portrait%20in%20creative%20workspace%20with%20clean%20background%20artistic%20leader&width=200&height=200&seq=des1&orientation=squarish",
        },
        {
            name: "James Wilson",
            role: "VP of Sales",
            department: "Sales",
            image: "https://readdy.ai/api/search-image?query=professional%20male%20sales%20executive%20portrait%20in%20business%20office%20with%20clean%20background%20confident%20sales%20leader&width=200&height=200&seq=sales1&orientation=squarish",
        },
    ];
    const cultureImages = [
        "https://readdy.ai/api/search-image?query=modern%20tech%20office%20workspace%20with%20open%20floor%20plan%20collaborative%20environment%20natural%20lighting%20and%20contemporary%20furniture%20professional%20atmosphere&width=400&height=300&seq=office1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=diverse%20team%20meeting%20in%20modern%20conference%20room%20with%20glass%20walls%20collaborative%20discussion%20professional%20business%20environment&width=400&height=300&seq=meeting1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=tech%20company%20team%20building%20event%20casual%20office%20party%20employees%20socializing%20in%20modern%20break%20room%20friendly%20atmosphere&width=400&height=300&seq=event1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=modern%20office%20kitchen%20and%20break%20area%20with%20comfortable%20seating%20natural%20light%20contemporary%20design%20employee%20wellness%20space&width=400&height=300&seq=kitchen1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=tech%20office%20recreational%20area%20with%20games%20and%20relaxation%20space%20modern%20furniture%20creative%20environment%20work%20life%20balance&width=400&height=300&seq=rec1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=professional%20development%20workshop%20in%20modern%20training%20room%20employees%20learning%20collaborative%20education%20environment&width=400&height=300&seq=training1&orientation=landscape",
    ];
    const benefits = [
        {
            icon: "fa-heart",
            title: "Health & Wellness",
            description: "Comprehensive medical, dental, and vision insurance with wellness programs",
        },
        {
            icon: "fa-calendar-alt",
            title: "Flexible Time Off",
            description: "Unlimited PTO policy with encouraged vacation time and mental health days",
        },
        {
            icon: "fa-graduation-cap",
            title: "Learning & Development",
            description: "Annual learning budget, conference attendance, and skill development programs",
        },
        {
            icon: "fa-home",
            title: "Remote Work",
            description: "Flexible hybrid work options with full remote work capabilities",
        },
        {
            icon: "fa-chart-line",
            title: "Stock Options",
            description: "Equity participation program for all full-time employees",
        },
        {
            icon: "fa-baby",
            title: "Family Support",
            description: "Generous parental leave and family care assistance programs",
        },
    ];
    return (_jsx("div", { className: `min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`, children: _jsxs("div", { className: "w-full max-w-9xl mx-auto", children: [_jsx("section", { className: `border-b transition-colors duration-300 ${darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"}`, children: _jsx("div", { className: "px-6 py-12", children: _jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8", children: [_jsxs(Avatar, { className: "w-20 h-20 border-2 border-gray-200", children: [_jsx(AvatarImage, { src: companyData.logo, alt: `${companyData.name} logo`, className: "object-cover" }), _jsx(AvatarFallback, { className: `text-2xl font-bold ${darkMode
                                                ? "bg-gray-700 text-gray-300"
                                                : "bg-gray-100 text-gray-600"}`, children: companyData.name.charAt(0) })] }), _jsxs("div", { className: "flex-1", children: [_jsx("h2", { className: `text-3xl font-bold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: companyData.name }), _jsxs(Badge, { variant: "secondary", className: `mb-4 ${darkMode
                                                ? "bg-blue-900 text-blue-200"
                                                : "bg-blue-100 text-blue-800"}`, children: [_jsx("i", { className: "fas fa-industry mr-1" }), companyData.industry] }), _jsx("p", { className: `text-lg mb-6 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: companyData.description }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsxs("div", { className: `text-2xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [companyData.employees, "+"] }), _jsx("div", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: "Employees" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: `text-2xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: companyData.founded }), _jsx("div", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: "Founded" })] }), _jsxs("div", { className: "text-center", children: [_jsxs("div", { className: `text-xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-map-marker-alt mr-1" }), companyData.location] }), _jsx("div", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-500"}`, children: "Headquarters" })] })] })] })] }) }) }), _jsx("section", { className: `border-b transition-colors duration-300 ${darkMode
                        ? "bg-gray-900 border-gray-700"
                        : "bg-gray-50 border-gray-200"}`, children: _jsx("div", { className: "px-6 py-6", children: _jsxs("div", { className: "flex flex-wrap items-center justify-center lg:justify-start gap-4", children: [_jsx("a", { href: "https://readdy.ai/home/466648b8-c495-41c8-965f-d0b9f457ee7c/fad507b6-a8ac-4456-a82f-2a1bde08e1f1", "data-readdy": "true", children: _jsxs(Button, { className: "bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fas fa-paper-plane mr-2" }), "Apply for Jobs"] }) }), _jsxs(Button, { variant: "outline", className: `!rounded-button whitespace-nowrap cursor-pointer ${isFollowing
                                        ? "bg-green-600 text-white hover:bg-green-700 border-green-600"
                                        : ""}`, onClick: handleFollowClick, id: "follow-button", children: [_jsx("i", { className: `${isFollowing ? "fas fa-check" : "fas fa-heart"} mr-2` }), isFollowing ? "Following" : "Follow Company"] }), _jsxs("div", { className: "relative", children: [_jsxs(Button, { variant: "outline", className: "!rounded-button whitespace-nowrap cursor-pointer", id: "share-button", onClick: () => {
                                                const dropdown = document.getElementById("share-dropdown");
                                                if (dropdown) {
                                                    dropdown.classList.toggle("hidden");
                                                }
                                            }, children: [_jsx("i", { className: "fas fa-share mr-2" }), "Share Profile"] }), _jsx("div", { id: "share-dropdown", className: `absolute right-0 mt-2 w-48 rounded-md shadow-lg hidden ${darkMode
                                                ? "bg-gray-800 border border-gray-700"
                                                : "bg-white border border-gray-200"}`, children: _jsxs("div", { className: "py-1", children: [_jsxs("button", { className: `w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${darkMode ? "text-gray-300" : "text-gray-700"}`, onClick: () => {
                                                            navigator.clipboard.writeText(window.location.href);
                                                            toast({
                                                                title: "Success!",
                                                                description: "Link copied to clipboard",
                                                                duration: 2000,
                                                            });
                                                            document
                                                                .getElementById("share-dropdown")
                                                                ?.classList.add("hidden");
                                                        }, children: [_jsx("i", { className: "fas fa-link mr-3" }), "Copy Link"] }), _jsxs("button", { className: `w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${darkMode ? "text-gray-300" : "text-gray-700"}`, onClick: () => {
                                                            window.location.href = `mailto:?subject=Check out ${companyData.name}&body=I thought you might be interested in this company: ${window.location.href}`;
                                                            document
                                                                .getElementById("share-dropdown")
                                                                ?.classList.add("hidden");
                                                        }, children: [_jsx("i", { className: "fas fa-envelope mr-3" }), "Email"] }), _jsxs("button", { className: `w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${darkMode ? "text-gray-300" : "text-gray-700"}`, onClick: () => {
                                                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`);
                                                            document
                                                                .getElementById("share-dropdown")
                                                                ?.classList.add("hidden");
                                                        }, children: [_jsx("i", { className: "fab fa-linkedin mr-3" }), "LinkedIn"] }), _jsxs("button", { className: `w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${darkMode ? "text-gray-300" : "text-gray-700"}`, onClick: () => {
                                                            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out ${companyData.name}`);
                                                            document
                                                                .getElementById("share-dropdown")
                                                                ?.classList.add("hidden");
                                                        }, children: [_jsx("i", { className: "fab fa-twitter mr-3" }), "Twitter"] }), _jsxs("button", { className: `w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${darkMode ? "text-gray-300" : "text-gray-700"}`, onClick: () => {
                                                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
                                                            document
                                                                .getElementById("share-dropdown")
                                                                ?.classList.add("hidden");
                                                        }, children: [_jsx("i", { className: "fab fa-facebook mr-3" }), "Facebook"] })] }) })] }), _jsxs("div", { className: "flex items-center space-x-3 ml-4", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "!rounded-button cursor-pointer", children: _jsx("i", { className: "fab fa-linkedin text-xl" }) }), _jsx(Button, { variant: "ghost", size: "sm", className: "!rounded-button cursor-pointer", children: _jsx("i", { className: "fab fa-twitter text-xl" }) }), _jsx(Button, { variant: "ghost", size: "sm", className: "!rounded-button cursor-pointer", children: _jsx("i", { className: "fas fa-globe text-xl" }) })] })] }) }) }), _jsx("main", { className: "px-6 py-8", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [_jsxs(TabsList, { className: `grid w-full grid-cols-5 mb-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`, children: [_jsxs(TabsTrigger, { value: "about", className: `font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-info-circle mr-2" }), "About"] }), _jsxs(TabsTrigger, { value: "jobs", className: `font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-briefcase mr-2" }), "Jobs (", jobsData.length, ")"] }), _jsxs(TabsTrigger, { value: "culture", className: `font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-users mr-2" }), "Culture"] }), _jsxs(TabsTrigger, { value: "benefits", className: `font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-gift mr-2" }), "Benefits"] }), _jsxs(TabsTrigger, { value: "team", className: `font-medium transition-all duration-300 ${darkMode
                                            ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"}`, children: [_jsx("i", { className: "fas fa-user-tie mr-2" }), "Team"] })] }), _jsxs(TabsContent, { value: "about", className: "space-y-8", children: [_jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"}`, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Our Mission" }) }), _jsx(CardContent, { children: _jsx("p", { className: `text-lg leading-relaxed transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: companyData.mission }) })] }), _jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"}`, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Our Values" }) }), _jsx(CardContent, { children: _jsx("ul", { className: "space-y-3", children: companyData.values.map((value, index) => (_jsxs("li", { className: `flex items-start space-x-3 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: [_jsx("i", { className: "fas fa-check-circle text-blue-600 mt-1" }), _jsx("span", { className: "text-lg", children: value })] }, index))) }) })] }), _jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"}`, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: `text-2xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Company Achievements" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: `p-4 rounded-lg transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-50"}`, children: [_jsx("h4", { className: `font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Industry Recognition" }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: "Named Top Software Company 2023 by Tech Innovation Awards" })] }), _jsxs("div", { className: `p-4 rounded-lg transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-50"}`, children: [_jsx("h4", { className: `font-semibold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Client Success" }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: "Successfully delivered 500+ projects with 98% client satisfaction" })] })] }) })] })] }), _jsxs(TabsContent, { value: "jobs", className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: `text-2xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Open Positions" }), _jsxs("p", { className: `text-lg transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: [jobsData.length, " positions available"] })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: jobsData.map((job) => (_jsxs(Card, { className: `transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${darkMode
                                                ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                                                : "bg-white border-gray-200 hover:shadow-xl"}`, children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx(CardTitle, { className: `text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: job.title }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-2", children: [_jsx(Badge, { variant: "outline", className: `text-xs ${darkMode
                                                                                    ? "border-gray-600 text-gray-300"
                                                                                    : "border-gray-300 text-gray-700"}`, children: job.department }), _jsx(Badge, { variant: "outline", className: `text-xs ${darkMode
                                                                                    ? "border-gray-600 text-gray-300"
                                                                                    : "border-gray-300 text-gray-700"}`, children: job.location }), _jsx(Badge, { variant: "outline", className: `text-xs ${darkMode
                                                                                    ? "border-gray-600 text-gray-300"
                                                                                    : "border-gray-300 text-gray-700"}`, children: job.type })] })] }), _jsx(Badge, { variant: "secondary", className: `ml-2 font-semibold ${darkMode
                                                                    ? "bg-green-900 text-green-200"
                                                                    : "bg-green-100 text-green-800"}`, children: job.salary })] }) }), _jsxs(CardContent, { children: [_jsx(CardDescription, { className: `text-sm mb-4 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: job.description }), _jsxs(Button, { size: "sm", className: "bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fas fa-paper-plane mr-2" }), "Apply Now"] })] })] }, job.id))) })] }), _jsxs(TabsContent, { value: "culture", className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: `text-2xl font-bold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Our Culture & Environment" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: cultureImages.map((image, index) => (_jsxs("div", { className: "relative overflow-hidden rounded-lg group cursor-pointer", children: [_jsx("img", { src: image, alt: `Company culture ${index + 1}`, className: "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" })] }, index))) })] }), _jsxs(Card, { className: `transition-colors duration-300 ${darkMode
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"}`, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: `text-xl transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "What Makes Us Special" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsxs("h4", { className: `font-semibold mb-3 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-lightbulb text-yellow-500 mr-2" }), "Innovation First"] }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: "We encourage creative thinking and provide time for personal projects and innovation." })] }), _jsxs("div", { children: [_jsxs("h4", { className: `font-semibold mb-3 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-handshake text-blue-500 mr-2" }), "Collaborative Spirit"] }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: "Cross-functional teams work together to achieve common goals and share knowledge." })] }), _jsxs("div", { children: [_jsxs("h4", { className: `font-semibold mb-3 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-balance-scale text-green-500 mr-2" }), "Work-Life Balance"] }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: "Flexible schedules and remote work options to maintain healthy work-life integration." })] }), _jsxs("div", { children: [_jsxs("h4", { className: `font-semibold mb-3 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: [_jsx("i", { className: "fas fa-trophy text-purple-500 mr-2" }), "Recognition & Growth"] }), _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: "Regular recognition programs and clear career advancement opportunities." })] })] }) })] })] }), _jsx(TabsContent, { value: "benefits", className: "space-y-6", children: _jsxs("div", { children: [_jsx("h3", { className: `text-2xl font-bold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Employee Benefits & Perks" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map((benefit, index) => (_jsxs(Card, { className: `transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${darkMode
                                                    ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                                                    : "bg-white border-gray-200 hover:shadow-xl"}`, children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: `w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${darkMode ? "bg-blue-900" : "bg-blue-100"}`, children: _jsx("i", { className: `fas ${benefit.icon} text-2xl text-blue-600` }) }) }), _jsx(CardTitle, { className: `text-lg font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: benefit.title })] }), _jsx(CardContent, { className: "text-center", children: _jsx("p", { className: `text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`, children: benefit.description }) })] }, index))) })] }) }), _jsx(TabsContent, { value: "team", className: "space-y-8", children: _jsxs("div", { children: [_jsx("h3", { className: `text-2xl font-bold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: "Leadership Team" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: teamMembers.map((member, index) => (_jsx(Card, { className: `transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${darkMode
                                                    ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                                                    : "bg-white border-gray-200 hover:shadow-xl"}`, children: _jsxs(CardHeader, { className: "text-center", children: [_jsxs(Avatar, { className: "w-24 h-24 mx-auto mb-4 border-2 border-gray-200", children: [_jsx(AvatarImage, { src: member.image, alt: member.name, className: "object-cover" }), _jsx(AvatarFallback, { className: `text-xl font-bold ${darkMode
                                                                        ? "bg-gray-700 text-gray-300"
                                                                        : "bg-gray-100 text-gray-600"}`, children: member.name
                                                                        .split(" ")
                                                                        .map((n) => n[0])
                                                                        .join("") })] }), _jsx(CardTitle, { className: `text-lg font-bold mb-1 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`, children: member.name }), _jsx("p", { className: `text-sm font-medium transition-colors duration-300 ${darkMode ? "text-blue-400" : "text-blue-600"}`, children: member.role }), _jsx(Badge, { variant: "outline", className: `mt-2 text-xs ${darkMode
                                                                ? "border-gray-600 text-gray-300"
                                                                : "border-gray-300 text-gray-700"}`, children: member.department })] }) }, index))) })] }) })] }) })] }) }));
};
export default CompanyPofilePage;
