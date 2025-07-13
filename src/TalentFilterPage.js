import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
const TalentFilterPage = () => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedRole, setSelectedRole] = useState("all");
    const [rateRange, setRateRange] = useState([25, 150]);
    const [availableOnly, setAvailableOnly] = useState(false);
    const [skillsOpen, setSkillsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const skills = [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Machine Learning",
        "AI/ML",
        "Data Science",
        "Go-to-Market",
        "Product Marketing",
        "Sales Strategy",
        "Business Development",
        "Growth Hacking",
        "Vue.js",
        "Angular",
        "GraphQL",
        "AWS",
        "Docker",
        "Kubernetes",
    ];
    const freelancers = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "AI Developer",
            rating: 4.9,
            hourlyRate: 85,
            skills: ["Python", "Machine Learning", "TensorFlow"],
            available: true,
            photo: "https://readdy.ai/api/search-image?query=Professional%20female%20software%20developer%20portrait%20with%20clean%20white%20background%2C%20modern%20business%20headshot%2C%20confident%20expression%2C%20tech%20industry%20professional&width=200&height=200&seq=freelancer1&orientation=squarish",
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "GTM Specialist",
            rating: 4.8,
            hourlyRate: 95,
            skills: ["Go-to-Market", "Product Marketing", "Sales Strategy"],
            available: true,
            photo: "https://readdy.ai/api/search-image?query=Professional%20male%20marketing%20specialist%20portrait%20with%20clean%20white%20background%2C%20modern%20business%20headshot%2C%20confident%20expression%2C%20business%20professional&width=200&height=200&seq=freelancer2&orientation=squarish",
        },
        {
            id: 3,
            name: "Emily Watson",
            role: "AI Developer",
            rating: 4.7,
            hourlyRate: 75,
            skills: ["React", "TypeScript", "AI/ML"],
            available: false,
            photo: "https://readdy.ai/api/search-image?query=Professional%20female%20AI%20developer%20portrait%20with%20clean%20white%20background%2C%20modern%20tech%20headshot%2C%20focused%20expression%2C%20software%20engineer&width=200&height=200&seq=freelancer3&orientation=squarish",
        },
        {
            id: 4,
            name: "David Kim",
            role: "GTM Specialist",
            rating: 4.9,
            hourlyRate: 110,
            skills: ["Business Development", "Growth Hacking", "Product Marketing"],
            available: true,
            photo: "https://readdy.ai/api/search-image?query=Professional%20male%20business%20development%20specialist%20portrait%20with%20clean%20white%20background%2C%20modern%20business%20headshot%2C%20approachable%20expression%2C%20marketing%20professional&width=200&height=200&seq=freelancer4&orientation=squarish",
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "AI Developer",
            rating: 4.6,
            hourlyRate: 90,
            skills: ["Python", "Data Science", "AWS"],
            available: true,
            photo: "https://readdy.ai/api/search-image?query=Professional%20female%20data%20scientist%20portrait%20with%20clean%20white%20background%2C%20modern%20tech%20headshot%2C%20intelligent%20expression%2C%20AI%20researcher&width=200&height=200&seq=freelancer5&orientation=squarish",
        },
        {
            id: 6,
            name: "Alex Johnson",
            role: "AI Developer",
            rating: 4.8,
            hourlyRate: 100,
            skills: ["Node.js", "GraphQL", "Machine Learning"],
            available: true,
            photo: "https://readdy.ai/api/search-image?query=Professional%20male%20full-stack%20developer%20portrait%20with%20clean%20white%20background%2C%20modern%20tech%20headshot%2C%20creative%20expression%2C%20software%20architect&width=200&height=200&seq=freelancer6&orientation=squarish",
        },
    ];
    const handleSkillToggle = (skill) => {
        setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]);
    };
    const filteredFreelancers = freelancers.filter((freelancer) => {
        const skillsMatch = selectedSkills.length === 0 ||
            selectedSkills.some((skill) => freelancer.skills.includes(skill));
        const roleMatch = selectedRole === "all" ||
            (selectedRole === "ai-dev" && freelancer.role === "AI Developer") ||
            (selectedRole === "gtm" && freelancer.role === "GTM Specialist");
        const rateMatch = freelancer.hourlyRate >= rateRange[0] &&
            freelancer.hourlyRate <= rateRange[1];
        const availabilityMatch = !availableOnly || freelancer.available;
        return skillsMatch && roleMatch && rateMatch && availabilityMatch;
    });
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
            stars.push(_jsx("i", { className: "fas fa-star text-yellow-400" }, i));
        }
        if (hasHalfStar) {
            stars.push(_jsx("i", { className: "fas fa-star-half-alt text-yellow-400" }, "half"));
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(_jsx("i", { className: "far fa-star text-gray-300" }, `empty-${i}`));
        }
        return stars;
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [_jsx("div", { className: "lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "Find Talent" }), _jsxs(Button, { variant: "outline", size: "sm", onClick: () => setSidebarOpen(!sidebarOpen), className: "!rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fas fa-filter mr-2" }), "Filters"] })] }) }), _jsxs("div", { className: "flex", children: [_jsx("div", { className: `fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`, children: _jsxs("div", { className: "p-6 h-full overflow-y-auto", children: [_jsxs("div", { className: "flex items-center justify-between mb-6 lg:hidden", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSidebarOpen(false), className: "!rounded-button whitespace-nowrap cursor-pointer", children: _jsx("i", { className: "fas fa-times" }) })] }), _jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-6 hidden lg:block", children: "Filters" }), _jsxs("div", { className: "mb-6", children: [_jsx(Label, { className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block", children: "Skills" }), _jsxs(Popover, { open: skillsOpen, onOpenChange: setSkillsOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "w-full justify-between !rounded-button whitespace-nowrap cursor-pointer", children: [selectedSkills.length > 0
                                                                ? `${selectedSkills.length} selected`
                                                                : "Select skills", _jsx("i", { className: "fas fa-chevron-down ml-2" })] }) }), _jsx(PopoverContent, { className: "w-80 p-0", align: "start", children: _jsxs(Command, { children: [_jsx(CommandInput, { placeholder: "Search skills..." }), _jsxs(CommandList, { children: [_jsx(CommandEmpty, { children: "No skills found." }), _jsx(CommandGroup, { children: skills.map((skill) => (_jsx(CommandItem, { onSelect: () => handleSkillToggle(skill), children: _jsxs("div", { className: "flex items-center space-x-2 cursor-pointer", children: [_jsx(Checkbox, { checked: selectedSkills.includes(skill), onChange: () => handleSkillToggle(skill) }), _jsx("span", { children: skill })] }) }, skill))) })] })] }) })] }), selectedSkills.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: selectedSkills.map((skill) => (_jsxs(Badge, { variant: "secondary", className: "cursor-pointer", onClick: () => handleSkillToggle(skill), children: [skill, _jsx("i", { className: "fas fa-times ml-1 text-xs" })] }, skill))) }))] }), _jsxs("div", { className: "mb-6", children: [_jsx(Label, { className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block", children: "Role" }), _jsxs(RadioGroup, { value: selectedRole, onValueChange: setSelectedRole, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "all", id: "all" }), _jsx(Label, { htmlFor: "all", className: "cursor-pointer", children: "All Roles" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "ai-dev", id: "ai-dev" }), _jsx(Label, { htmlFor: "ai-dev", className: "cursor-pointer", children: "AI Developer" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "gtm", id: "gtm" }), _jsx(Label, { htmlFor: "gtm", className: "cursor-pointer", children: "GTM Specialist" })] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsxs(Label, { className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block", children: ["Hourly Rate: $", rateRange[0], " - $", rateRange[1]] }), _jsx(Slider, { value: rateRange, onValueChange: setRateRange, max: 200, min: 10, step: 5, className: "w-full" })] }), _jsx("div", { className: "mb-6", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Switch, { id: "availability", checked: availableOnly, onCheckedChange: setAvailableOnly }), _jsx(Label, { htmlFor: "availability", className: "text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer", children: "Available now only" })] }) })] }) }), sidebarOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden", onClick: () => setSidebarOpen(false) })), _jsx("div", { className: "flex-1 lg:ml-0", children: _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-8 hidden lg:block", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2", children: "Find Talent" }), _jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Discover top freelancers for your AI development and go-to-market needs" })] }), _jsx("div", { className: "mb-6", children: _jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [filteredFreelancers.length, " freelancer", filteredFreelancers.length !== 1 ? "s" : "", " found"] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: filteredFreelancers.map((freelancer) => (_jsx(Card, { className: "hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start space-x-4 mb-4", children: [_jsx("img", { src: freelancer.photo, alt: freelancer.name, className: "w-16 h-16 rounded-full object-cover object-top" }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-lg text-gray-900 dark:text-white mb-1", children: freelancer.name }), _jsx(Badge, { className: `mb-2 ${freelancer.role === "AI Developer"
                                                                        ? "bg-blue-600 hover:bg-blue-700"
                                                                        : "bg-green-600 hover:bg-green-700"} text-white`, children: freelancer.role }), _jsxs("div", { className: "flex items-center space-x-1 mb-2", children: [renderStars(freelancer.rating), _jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400 ml-2", children: freelancer.rating })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: ["$", freelancer.hourlyRate] }), _jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: "per hour" }), freelancer.available && (_jsxs(Badge, { variant: "outline", className: "mt-1 text-green-600 border-green-600", children: [_jsx("i", { className: "fas fa-circle text-green-500 mr-1 text-xs" }), "Available"] }))] })] }), _jsx("div", { className: "mb-4", children: _jsx("div", { className: "flex flex-wrap gap-2", children: freelancer.skills.map((skill) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: skill }, skill))) }) }), _jsxs(Button, { className: "w-full bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer", children: [_jsx("i", { className: "fas fa-eye mr-2" }), "View Portfolio"] })] }) }, freelancer.id))) }), filteredFreelancers.length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx("i", { className: "fas fa-search text-4xl text-gray-400 mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white mb-2", children: "No freelancers found" }), _jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Try adjusting your filters to see more results" })] }))] }) })] })] }));
};
export default TalentFilterPage;
