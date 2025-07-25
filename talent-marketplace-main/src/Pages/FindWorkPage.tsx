// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

const FindWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Best Matches");
  const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleJobExpansion = (jobId: number) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(jobId)) {
      newExpanded.delete(jobId);
    } else {
      newExpanded.add(jobId);
    }
    setExpandedJobs(newExpanded);
  };

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const tabs = ["Best Matches", "Most Recent", "Saved Jobs"];

  const jobListings = [
    {
      id: 1,
      title:
        "Frontend Developer – React/Tailwind for AI Dashboard (SaaS Project)",
      postedTime: "48 minutes ago",
      type: "Fixed-price",
      level: "Expert",
      budget: "$700",
      description:
        "We're building a modern AI voice product. It answers calls, routes enquiries, books appointments, and integrates with calendars — all powered by AI. The backend is complete and actively used in pilot. Now we need a polished, responsive, customer-facing dashboard UI. You'll work directly with the founder and backend engineer.",
      fullDescription:
        "We're building a modern AI voice product. It answers calls, routes enquiries, books appointments, and integrates with calendars — all powered by AI. The backend is complete and actively used in pilot. Now we need a polished, responsive, customer-facing dashboard UI. You'll work directly with the founder and backend engineer. Your Task: You'll take a Figma layout and build a responsive React dashboard with modern UI components, charts, and data visualization.",
      tags: [
        "Tailwind CSS",
        "Next.js",
        "Responsive Design",
        "React",
        "SaaS",
        "chakra",
        "Figma",
        "GPT API",
      ],
      paymentVerified: true,
      rating: 5,
      spentAmount: "$40k+ spent",
      location: "AUS",
      proposals: "50+",
    },
    {
      id: 2,
      title: "Frontend Developer Needed for Figma to ReactJS Conversion",
      postedTime: "2 hours ago",
      type: "Fixed-price",
      level: "Intermediate",
      budget: "$500",
      description:
        "Looking for an experienced React developer to convert high-fidelity Figma designs into responsive ReactJS components. The project involves creating a modern e-commerce platform with advanced filtering and search functionality.",
      fullDescription:
        "Looking for an experienced React developer to convert high-fidelity Figma designs into responsive ReactJS components. The project involves creating a modern e-commerce platform with advanced filtering and search functionality. You'll need to implement pixel-perfect designs with smooth animations and ensure cross-browser compatibility. Experience with TypeScript and modern React patterns is essential.",
      tags: [
        "React",
        "TypeScript",
        "Figma",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "E-commerce",
      ],
      paymentVerified: true,
      rating: 4.8,
      spentAmount: "$15k+ spent",
      location: "USA",
      proposals: "25+",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-teal-700 text-white px-6 py-8 mb-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-sm font-medium mb-2">
              Rise to the top of the client's list
            </h2>
            <h1 className="text-2xl font-bold mb-4">
              Boosted Proposals deliver 10x more earnings on ad spend
            </h1>
            <Button className="bg-white text-teal-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
              Boost now
            </Button>
          </div>
          <div className="ml-8">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20professional%20dashboard%20interface%20mockup%20with%20boosted%20proposal%20badge%20on%20clean%20white%20background%2C%20minimalist%20design%20with%20subtle%20shadows%20and%20premium%20feel&width=300&height=200&seq=banner-mockup-001&orientation=landscape"
              alt="Boosted Proposals"
              className="w-72 h-48 object-cover object-top rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              <Input
                placeholder="Search for jobs"
                className="pl-10 border-gray-300 text-sm"
              />
            </div>
          </div>

          {/* Jobs Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Jobs you might like</h2>

            {/* Tabs */}
            <div className="flex space-x-6 mb-4 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 text-sm font-medium cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Browse jobs that match your experience to a client's hiring
              preferences. Ordered by most relevant.
            </p>

            {/* Job Listings */}
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card
                  key={job.id}
                  className="border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span>Posted {job.postedTime}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                          <span>•</span>
                          <span>{job.level}</span>
                          <span>•</span>
                          <span className="font-medium">{job.budget}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="!rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="far fa-bookmark"></i>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="!rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="far fa-heart"></i>
                        </Button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {expandedJobs.has(job.id)
                          ? job.fullDescription
                          : job.description}
                        {job.fullDescription.length >
                          job.description.length && (
                          <button
                            onClick={() => toggleJobExpansion(job.id)}
                            className="ml-2 text-teal-600 hover:text-teal-700 text-sm font-medium cursor-pointer"
                          >
                            {expandedJobs.has(job.id) ? "Less" : "More"}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        {job.paymentVerified && (
                          <div className="flex items-center text-green-600">
                            <i className="fas fa-check-circle mr-1"></i>
                            <span>Payment verified</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star text-xs"></i>
                            ))}
                          </div>
                          <span className="text-gray-600">
                            {job.spentAmount}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-map-marker-alt mr-1"></i>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Proposals: {job.proposals}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 space-y-6">
          {/* Profile Card */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20confident%20software%20developer%20with%20clean%20background%2C%20modern%20portrait%20style%20with%20natural%20lighting%20and%20friendly%20expression&width=60&height=60&seq=profile-avatar-001&orientation=squarish"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div>
                  <h3 className="font-semibold">Hemant A.</h3>
                  <p className="text-sm text-gray-600">
                    Full-Stack JavaScript Developer
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-teal-600 cursor-pointer">
                    Complete your profile
                  </span>
                  <span className="text-gray-600">40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Promote with ads */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Promote with ads</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-up text-xs"></i>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Availability badge</p>
                  <p className="text-xs text-gray-600">Off</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-edit text-xs"></i>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Boost your profile</p>
                  <p className="text-xs text-gray-600">Off</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-edit text-xs"></i>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connects */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Connects: 20</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-down text-xs"></i>
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Expandable Sections */}
          {["Preferences", "Proposals", "Project Catalog"].map((section) => (
            <Card key={section}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{section}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection(section)}
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i
                      className={`fas fa-chevron-${
                        expandedSections.has(section) ? "up" : "down"
                      } text-xs`}
                    ></i>
                  </Button>
                </div>
              </CardHeader>
              {expandedSections.has(section) && (
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600">
                    {section === "Preferences" &&
                      "Manage your job preferences and notifications."}
                    {section === "Proposals" &&
                      "View and manage your submitted proposals."}
                    {section === "Project Catalog" &&
                      "Showcase your services and past work."}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium cursor-pointer hover:text-teal-600">
                Direct Contracts
              </span>
              <i className="fas fa-external-link-alt text-xs text-gray-400"></i>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium cursor-pointer hover:text-teal-600">
                Get Paid
              </span>
              <i className="fas fa-external-link-alt text-xs text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWorkPage;
