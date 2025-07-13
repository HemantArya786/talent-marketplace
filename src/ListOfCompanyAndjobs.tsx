// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Link } from "react-router-dom";
const ListOfCompanyAndJobs: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const jobsData = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      budget: "$5,000 - $8,000",
      description:
        "We are looking for an experienced full stack developer to join our dynamic team. You will be responsible for developing scalable web applications using modern technologies and frameworks.",
      tags: ["React", "Node.js", "TypeScript", "MongoDB"],
      company: "TechCorp Solutions",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      budget: "$3,500 - $5,500",
      description:
        "Join our creative team as a UI/UX designer where you will create intuitive and beautiful user interfaces for our digital products. Experience with design systems is a plus.",
      tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      company: "Design Studio Pro",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      budget: "$6,000 - $9,000",
      description:
        "We need a skilled DevOps engineer to help us streamline our deployment processes and maintain our cloud infrastructure. AWS experience is highly preferred.",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      company: "CloudTech Innovations",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      budget: "$4,000 - $6,500",
      description:
        "Develop cutting-edge mobile applications for iOS and Android platforms. You will work closely with our product team to deliver exceptional user experiences.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
      company: "MobileFirst Inc",
    },
    {
      id: 5,
      title: "Data Scientist",
      budget: "$5,500 - $8,500",
      description:
        "Analyze complex datasets and build machine learning models to drive business insights. Strong background in statistics and programming required.",
      tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      company: "DataDriven Analytics",
    },
    {
      id: 6,
      title: "Product Manager",
      budget: "$7,000 - $10,000",
      description:
        "Lead product strategy and roadmap development for our flagship SaaS platform. Experience in B2B software products is essential for this role.",
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
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-9xl mx-auto">
        {/* Header */}

        {/* Main Content */}
        <main className="px-6 py-8">
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList
              className={`grid w-full grid-cols-2 mb-8 ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <TabsTrigger
                value="jobs"
                className={`text-lg font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-briefcase mr-2"></i>
                Jobs
              </TabsTrigger>
              <TabsTrigger
                value="companies"
                className={`text-lg font-medium transition-all duration-300 ${
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                }`}
              >
                <i className="fas fa-building mr-2"></i>
                Companies
              </TabsTrigger>
            </TabsList>
            {/* Jobs Tab Content */}
            <TabsContent value="jobs" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2
                  className={`text-3xl font-bold transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Available Jobs
                </h2>
                <p
                  className={`text-lg transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {jobsData.length} positions available
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsData.map((job) => (
                  <Card
                    key={job.id}
                    className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                        : "bg-white border-gray-200 hover:shadow-xl"
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle
                            className={`text-xl font-bold mb-2 line-clamp-2 transition-colors duration-300 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {job.title}
                          </CardTitle>
                          <p
                            className={`text-sm font-medium transition-colors duration-300 ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {job.company}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`ml-2 font-semibold ${
                            darkMode
                              ? "bg-blue-900 text-blue-200"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {job.budget}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <CardDescription
                        className={`text-sm line-clamp-3 mb-4 transition-colors duration-300 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {job.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={`text-xs transition-colors duration-300 ${
                              darkMode
                                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        to={"/job-apply"}
                        data-readdy="true"
                        className="w-full"
                      >
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300"
                          size="sm"
                        >
                          <i className="fas fa-paper-plane mr-2"></i>
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Companies Tab Content */}
            <TabsContent value="companies" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2
                  className={`text-3xl font-bold transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Featured Companies
                </h2>
                <p
                  className={`text-lg transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {companiesData.length} companies hiring
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companiesData.map((company) => (
                  <Card
                    key={company.id}
                    className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                        : "bg-white border-gray-200 hover:shadow-xl"
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <Avatar className="w-20 h-20 border-2 border-gray-200">
                          <AvatarImage
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="object-cover"
                          />
                          <AvatarFallback
                            className={`text-xl font-bold ${
                              darkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {company.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {company.name}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className={`mx-auto ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <i className="fas fa-industry mr-1"></i>
                        {company.industry}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center pb-4">
                      <div
                        className={`flex items-center justify-center space-x-2 text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <i className="fas fa-briefcase"></i>
                        <span>{company.jobsCount} open positions</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        to={"/company-page"}
                        data-readdy="true"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className={`w-full !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300 ${
                            darkMode
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                          size="sm"
                        >
                          <i className="fas fa-eye mr-2"></i>
                          View Profile
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
        {/* Footer */}
        <footer
          className={`border-t mt-16 transition-colors duration-300 ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  JobBoard Pro
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Connect talented professionals with amazing opportunities.
                  Find your dream job or discover exceptional talent for your
                  team.
                </p>
              </div>
              <div>
                <h4
                  className={`font-semibold mb-4 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  For Job Seekers
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Browse Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Career Advice
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Resume Builder
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className={`font-semibold mb-4 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  For Employers
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Browse Talent
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300 ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <p
                className={`text-sm transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © 2024 JobBoard Pro. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className={`text-sm hover:underline transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className={`text-sm hover:underline transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className={`text-sm hover:underline transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default ListOfCompanyAndJobs;
