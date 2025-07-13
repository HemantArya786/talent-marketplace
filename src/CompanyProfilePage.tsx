// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useToast } from "@/hooks/use-toast";
// import { Toaster } from "@/components/ui/toaster";
const CompanyPofilePage: React.FC = () => {
  //   const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  //   const [isFollowing, setIsFollowing] = useState(false);
  //   const { toast } = useToast();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("share-dropdown");
      const shareButton = document.getElementById("share-button");

      if (
        dropdown &&
        !dropdown.contains(event.target as Node) &&
        shareButton &&
        !shareButton.contains(event.target as Node)
      ) {
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
    description:
      "Leading software development company specializing in cutting-edge web and mobile applications. We transform innovative ideas into powerful digital solutions that drive business growth.",
    employees: 250,
    founded: 2015,
    location: "San Francisco, CA",
    website: "www.techcorp-solutions.com",
    mission:
      "To revolutionize the digital landscape by creating innovative software solutions that empower businesses and enhance user experiences worldwide.",
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
      description:
        "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130,000 - $170,000",
      description:
        "Lead product strategy and roadmap development for our flagship SaaS platform.",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description:
        "Create intuitive and beautiful user interfaces for our digital products.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      description:
        "Manage cloud infrastructure and deployment pipelines using AWS and Kubernetes.",
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Analytics",
      location: "Hybrid",
      type: "Full-time",
      salary: "$115,000 - $155,000",
      description:
        "Analyze complex datasets and build machine learning models to drive business insights.",
    },
  ];
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      department: "Executive",
      image:
        "https://readdy.ai/api/search-image?query=professional%20business%20woman%20ceo%20executive%20portrait%20in%20modern%20office%20setting%20with%20clean%20background%20confident%20leadership%20style&width=200&height=200&seq=ceo1&orientation=squarish",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      department: "Technology",
      image:
        "https://readdy.ai/api/search-image?query=professional%20male%20technology%20executive%20portrait%20in%20modern%20office%20with%20clean%20background%20confident%20tech%20leader&width=200&height=200&seq=cto1&orientation=squarish",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      department: "Product",
      image:
        "https://readdy.ai/api/search-image?query=professional%20female%20product%20manager%20portrait%20in%20modern%20workspace%20with%20clean%20background%20innovative%20leader&width=200&height=200&seq=vp1&orientation=squarish",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      department: "Engineering",
      image:
        "https://readdy.ai/api/search-image?query=professional%20male%20software%20engineer%20portrait%20in%20tech%20office%20environment%20with%20clean%20background%20technical%20leader&width=200&height=200&seq=eng1&orientation=squarish",
    },
    {
      name: "Lisa Thompson",
      role: "Head of Design",
      department: "Design",
      image:
        "https://readdy.ai/api/search-image?query=professional%20female%20designer%20portrait%20in%20creative%20workspace%20with%20clean%20background%20artistic%20leader&width=200&height=200&seq=des1&orientation=squarish",
    },
    {
      name: "James Wilson",
      role: "VP of Sales",
      department: "Sales",
      image:
        "https://readdy.ai/api/search-image?query=professional%20male%20sales%20executive%20portrait%20in%20business%20office%20with%20clean%20background%20confident%20sales%20leader&width=200&height=200&seq=sales1&orientation=squarish",
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
      description:
        "Comprehensive medical, dental, and vision insurance with wellness programs",
    },
    {
      icon: "fa-calendar-alt",
      title: "Flexible Time Off",
      description:
        "Unlimited PTO policy with encouraged vacation time and mental health days",
    },
    {
      icon: "fa-graduation-cap",
      title: "Learning & Development",
      description:
        "Annual learning budget, conference attendance, and skill development programs",
    },
    {
      icon: "fa-home",
      title: "Remote Work",
      description:
        "Flexible hybrid work options with full remote work capabilities",
    },
    {
      icon: "fa-chart-line",
      title: "Stock Options",
      description: "Equity participation program for all full-time employees",
    },
    {
      icon: "fa-baby",
      title: "Family Support",
      description:
        "Generous parental leave and family care assistance programs",
    },
  ];
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-9xl mx-auto">
        {/* Header */}
        {/* <header
          className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a
                  href="https://readdy.ai/home/466648b8-c495-41c8-965f-d0b9f457ee7c/43f0dfc8-6c02-4500-83ea-5f7a0d08685a"
                  data-readdy="true"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Jobs
                  </Button>
                </a>
                <h1
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {companyData.name}
                </h1>
              </div>
              <Button
                onClick={toggleDarkMode}
                variant="outline"
                size="sm"
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i
                  className={`fas ${darkMode ? "fa-sun" : "fa-moon"} mr-2`}
                ></i>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </header> */}
        {/* Company Overview Section */}
        <section
          className={`border-b transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="px-6 py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <Avatar className="w-20 h-20 border-2 border-gray-200">
                <AvatarImage
                  src={companyData.logo}
                  alt={`${companyData.name} logo`}
                  className="object-cover"
                />
                <AvatarFallback
                  className={`text-2xl font-bold ${
                    darkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {companyData.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2
                  className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {companyData.name}
                </h2>
                <Badge
                  variant="secondary"
                  className={`mb-4 ${
                    darkMode
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  <i className="fas fa-industry mr-1"></i>
                  {companyData.industry}
                </Badge>
                <p
                  className={`text-lg mb-6 transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {companyData.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {companyData.employees}+
                    </div>
                    <div
                      className={`text-sm transition-colors duration-300 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Employees
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {companyData.founded}
                    </div>
                    <div
                      className={`text-sm transition-colors duration-300 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Founded
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-xl font-bold transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {companyData.location}
                    </div>
                    <div
                      className={`text-sm transition-colors duration-300 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Headquarters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Quick Actions Bar */}
        <section
          className={`border-b transition-colors duration-300 ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className="px-6 py-6">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="https://readdy.ai/home/466648b8-c495-41c8-965f-d0b9f457ee7c/fad507b6-a8ac-4456-a82f-2a1bde08e1f1"
                data-readdy="true"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply for Jobs
                </Button>
              </a>
              <Button
                variant="outline"
                className={`!rounded-button whitespace-nowrap cursor-pointer ${
                  isFollowing
                    ? "bg-green-600 text-white hover:bg-green-700 border-green-600"
                    : ""
                }`}
                onClick={handleFollowClick}
                id="follow-button"
              >
                <i
                  className={`${
                    isFollowing ? "fas fa-check" : "fas fa-heart"
                  } mr-2`}
                ></i>
                {isFollowing ? "Following" : "Follow Company"}
              </Button>
              <div className="relative">
                <Button
                  variant="outline"
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                  id="share-button"
                  onClick={() => {
                    const dropdown = document.getElementById("share-dropdown");
                    if (dropdown) {
                      dropdown.classList.toggle("hidden");
                    }
                  }}
                >
                  <i className="fas fa-share mr-2"></i>
                  Share Profile
                </Button>
                <div
                  id="share-dropdown"
                  className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg hidden ${
                    darkMode
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="py-1">
                    <button
                      className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast({
                          title: "Success!",
                          description: "Link copied to clipboard",
                          duration: 2000,
                        });
                        document
                          .getElementById("share-dropdown")
                          ?.classList.add("hidden");
                      }}
                    >
                      <i className="fas fa-link mr-3"></i>
                      Copy Link
                    </button>
                    <button
                      className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                      onClick={() => {
                        window.location.href = `mailto:?subject=Check out ${companyData.name}&body=I thought you might be interested in this company: ${window.location.href}`;
                        document
                          .getElementById("share-dropdown")
                          ?.classList.add("hidden");
                      }}
                    >
                      <i className="fas fa-envelope mr-3"></i>
                      Email
                    </button>
                    <button
                      className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                      onClick={() => {
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                            window.location.href
                          )}`
                        );
                        document
                          .getElementById("share-dropdown")
                          ?.classList.add("hidden");
                      }}
                    >
                      <i className="fab fa-linkedin mr-3"></i>
                      LinkedIn
                    </button>
                    <button
                      className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                      onClick={() => {
                        window.open(
                          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            window.location.href
                          )}&text=Check out ${companyData.name}`
                        );
                        document
                          .getElementById("share-dropdown")
                          ?.classList.add("hidden");
                      }}
                    >
                      <i className="fab fa-twitter mr-3"></i>
                      Twitter
                    </button>
                    <button
                      className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                      onClick={() => {
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            window.location.href
                          )}`
                        );
                        document
                          .getElementById("share-dropdown")
                          ?.classList.add("hidden");
                      }}
                    >
                      <i className="fab fa-facebook mr-3"></i>
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="!rounded-button cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="!rounded-button cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="!rounded-button cursor-pointer"
                >
                  <i className="fas fa-globe text-xl"></i>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Content Tabs */}
        <main className="px-6 py-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList
              className={`grid w-full grid-cols-5 mb-8 ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <TabsTrigger
                value="about"
                className={`font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-info-circle mr-2"></i>
                About
              </TabsTrigger>
              <TabsTrigger
                value="jobs"
                className={`font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-briefcase mr-2"></i>
                Jobs ({jobsData.length})
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className={`font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-users mr-2"></i>
                Culture
              </TabsTrigger>
              <TabsTrigger
                value="benefits"
                className={`font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-gift mr-2"></i>
                Benefits
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className={`font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-user-tie mr-2"></i>
                Team
              </TabsTrigger>
            </TabsList>
            {/* About Tab */}
            <TabsContent value="about" className="space-y-8">
              <Card
                className={`transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-lg leading-relaxed transition-colors duration-300 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {companyData.mission}
                  </p>
                </CardContent>
              </Card>
              <Card
                className={`transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {companyData.values.map((value, index) => (
                      <li
                        key={index}
                        className={`flex items-start space-x-3 transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <i className="fas fa-check-circle text-blue-600 mt-1"></i>
                        <span className="text-lg">{value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card
                className={`transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Company Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                      className={`p-4 rounded-lg transition-colors duration-300 ${
                        darkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <h4
                        className={`font-semibold mb-2 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Industry Recognition
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Named Top Software Company 2023 by Tech Innovation
                        Awards
                      </p>
                    </div>
                    <div
                      className={`p-4 rounded-lg transition-colors duration-300 ${
                        darkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <h4
                        className={`font-semibold mb-2 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Client Success
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Successfully delivered 500+ projects with 98% client
                        satisfaction
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Jobs Tab */}
            <TabsContent value="jobs" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Open Positions
                </h3>
                <p
                  className={`text-lg transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {jobsData.length} positions available
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobsData.map((job) => (
                  <Card
                    key={job.id}
                    className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                        : "bg-white border-gray-200 hover:shadow-xl"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle
                            className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {job.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                darkMode
                                  ? "border-gray-600 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {job.department}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                darkMode
                                  ? "border-gray-600 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {job.location}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                darkMode
                                  ? "border-gray-600 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {job.type}
                            </Badge>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`ml-2 font-semibold ${
                            darkMode
                              ? "bg-green-900 text-green-200"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {job.salary}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription
                        className={`text-sm mb-4 transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {job.description}
                      </CardDescription>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-paper-plane mr-2"></i>
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Culture Tab */}
            <TabsContent value="culture" className="space-y-6">
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Culture & Environment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cultureImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Company culture ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
              <Card
                className={`transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-xl transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    What Makes Us Special
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4
                        className={`font-semibold mb-3 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                        Innovation First
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        We encourage creative thinking and provide time for
                        personal projects and innovation.
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-3 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <i className="fas fa-handshake text-blue-500 mr-2"></i>
                        Collaborative Spirit
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Cross-functional teams work together to achieve common
                        goals and share knowledge.
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-3 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <i className="fas fa-balance-scale text-green-500 mr-2"></i>
                        Work-Life Balance
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Flexible schedules and remote work options to maintain
                        healthy work-life integration.
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-3 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <i className="fas fa-trophy text-purple-500 mr-2"></i>
                        Recognition & Growth
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Regular recognition programs and clear career
                        advancement opportunities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Benefits Tab */}
            <TabsContent value="benefits" className="space-y-6">
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Employee Benefits & Perks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                          : "bg-white border-gray-200 hover:shadow-xl"
                      }`}
                    >
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${
                              darkMode ? "bg-blue-900" : "bg-blue-100"
                            }`}
                          >
                            <i
                              className={`fas ${benefit.icon} text-2xl text-blue-600`}
                            ></i>
                          </div>
                        </div>
                        <CardTitle
                          className={`text-lg font-bold transition-colors duration-300 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* Team Tab */}
            <TabsContent value="team" className="space-y-8">
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Leadership Team
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <Card
                      key={index}
                      className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                          : "bg-white border-gray-200 hover:shadow-xl"
                      }`}
                    >
                      <CardHeader className="text-center">
                        <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-gray-200">
                          <AvatarImage
                            src={member.image}
                            alt={member.name}
                            className="object-cover"
                          />
                          <AvatarFallback
                            className={`text-xl font-bold ${
                              darkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle
                          className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {member.name}
                        </CardTitle>
                        <p
                          className={`text-sm font-medium transition-colors duration-300 ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {member.role}
                        </p>
                        <Badge
                          variant="outline"
                          className={`mt-2 text-xs ${
                            darkMode
                              ? "border-gray-600 text-gray-300"
                              : "border-gray-300 text-gray-700"
                          }`}
                        >
                          {member.department}
                        </Badge>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
        {/* Contact Information */}
      </div>
      {/* <Toaster /> */}
    </div>
  );
};
export default CompanyPofilePage;
