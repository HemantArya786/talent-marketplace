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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CandidateFillUpPage: React.FC = () => {
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
    resumeFile: null as File | null,
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
      description:
        "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
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
      description:
        "Lead product strategy and roadmap development for our flagship SaaS platform.",
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
      description:
        "Create intuitive and beautiful user interfaces for our digital products.",
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
      description:
        "Manage cloud infrastructure and deployment pipelines using AWS and Kubernetes.",
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
      description:
        "Analyze complex datasets and build machine learning models to drive business insights.",
      requirements: [
        "Python/R proficiency",
        "Machine learning experience",
        "Statistical analysis skills",
      ],
    },
  ];

  const selectedJobData = jobsData.find((job) => job.id === selectedJob);

  const handleInputChange = (
    field: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleInputChange("resumeFile", e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms || !selectedJob) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully!");
    }, 2000);
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.location &&
      selectedJob &&
      formData.acceptTerms
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-9xl mx-auto">
        {/* Header */}
        <header
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
                  href="https://readdy.ai/home/466648b8-c495-41c8-965f-d0b9f457ee7c/a8f6c8ef-f53e-4dff-b8c3-7e4d46d551ca"
                  data-readdy="true"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Company
                  </Button>
                </a>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10 border border-gray-200">
                    <AvatarImage
                      src={companyData.logo}
                      alt={`${companyData.name} logo`}
                      className="object-cover"
                    />
                    <AvatarFallback
                      className={`text-sm font-bold ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      TC
                    </AvatarFallback>
                  </Avatar>
                  <h1
                    className={`text-xl font-bold transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Job Application - {companyData.name}
                  </h1>
                </div>
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
        </header>

        {/* Main Content */}
        <main className="px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Job Selection Section */}
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
                  <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                  Select Position
                </CardTitle>
                <CardDescription
                  className={`transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Choose the position you would like to apply for
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={selectedJob} onValueChange={setSelectedJob}>
                  <SelectTrigger
                    className={`w-full ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <SelectValue placeholder="Select a position..." />
                  </SelectTrigger>
                  <SelectContent
                    className={
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-white border-gray-300"
                    }
                  >
                    {jobsData.map((job) => (
                      <SelectItem
                        key={job.id}
                        value={job.id}
                        className={`cursor-pointer ${
                          darkMode
                            ? "text-white hover:bg-gray-600"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">{job.title}</span>
                          <span
                            className={`text-sm ml-4 ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {job.department} • {job.location}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedJobData && (
                  <div
                    className={`p-4 rounded-lg border transition-colors duration-300 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {selectedJobData.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              darkMode
                                ? "border-gray-500 text-gray-300"
                                : "border-gray-300 text-gray-700"
                            }`}
                          >
                            {selectedJobData.department}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              darkMode
                                ? "border-gray-500 text-gray-300"
                                : "border-gray-300 text-gray-700"
                            }`}
                          >
                            {selectedJobData.location}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              darkMode
                                ? "border-gray-500 text-gray-300"
                                : "border-gray-300 text-gray-700"
                            }`}
                          >
                            {selectedJobData.type}
                          </Badge>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`font-semibold ${
                          darkMode
                            ? "bg-green-900 text-green-200"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {selectedJobData.salary}
                      </Badge>
                    </div>
                    <p
                      className={`text-sm mb-3 transition-colors duration-300 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {selectedJobData.description}
                    </p>
                    <div>
                      <h4
                        className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {selectedJobData.requirements.map((req, index) => (
                          <li
                            key={index}
                            className={`text-sm flex items-start transition-colors duration-300 ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            <i className="fas fa-check text-green-500 mr-2 mt-0.5 text-xs"></i>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Personal Information Section */}
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
                  <i className="fas fa-user mr-2 text-blue-600"></i>
                  Personal Information
                </CardTitle>
                <CardDescription
                  className={`transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Please provide your contact details and basic information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className={`${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      } text-sm`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      } text-sm`}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      } text-sm`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Current Location *
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="City, State/Country"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className={`${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      } text-sm`}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="linkedin"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      LinkedIn Profile
                    </Label>
                    <Input
                      id="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinProfile}
                      onChange={(e) =>
                        handleInputChange("linkedinProfile", e.target.value)
                      }
                      className={`${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      } text-sm`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="portfolio"
                      className={`text-sm font-medium transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Portfolio URL
                    </Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://yourportfolio.com"
                      value={formData.portfolioUrl}
                      onChange={(e) =>
                        handleInputChange("portfolioUrl", e.target.value)
                      }
                      className={`${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      } text-sm`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Upload Section */}
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
                  <i className="fas fa-file-upload mr-2 text-blue-600"></i>
                  Resume Upload
                </CardTitle>
                <CardDescription
                  className={`transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Upload your resume in PDF, DOC, or DOCX format (Max 5MB)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
                    dragActive
                      ? darkMode
                        ? "border-blue-400 bg-blue-900/20"
                        : "border-blue-400 bg-blue-50"
                      : darkMode
                      ? "border-gray-600 hover:border-gray-500"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() =>
                    document.getElementById("resume-upload")?.click()
                  }
                >
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {formData.resumeFile ? (
                    <div className="space-y-2">
                      <i className="fas fa-file-check text-4xl text-green-500"></i>
                      <p
                        className={`font-medium transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {formData.resumeFile.name}
                      </p>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {(formData.resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInputChange("resumeFile", null);
                        }}
                        className="!rounded-button whitespace-nowrap cursor-pointer mt-2"
                      >
                        <i className="fas fa-trash mr-2"></i>
                        Remove File
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <i className="fas fa-cloud-upload-alt text-4xl text-gray-400"></i>
                      <p
                        className={`font-medium transition-colors duration-300 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Drag and drop your resume here
                      </p>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        or click to browse files
                      </p>
                      <p
                        className={`text-xs transition-colors duration-300 ${
                          darkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        Supported formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cover Letter Section */}
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
                  <i className="fas fa-edit mr-2 text-blue-600"></i>
                  Cover Letter
                </CardTitle>
                <CardDescription
                  className={`transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Tell us why you are interested in this position and what makes
                  you a great fit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="coverLetter"
                    className={`text-sm font-medium transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Dear Hiring Manager,&#10;&#10;I am writing to express my interest in the [position title] role at TechCorp Solutions. With my experience in [relevant skills/experience], I believe I would be a valuable addition to your team.&#10;&#10;[Explain why you are interested in this role and company]&#10;&#10;[Highlight your relevant experience and achievements]&#10;&#10;[Conclude with enthusiasm and next steps]&#10;&#10;Thank you for considering my application.&#10;&#10;Best regards,&#10;[Your name]"
                    value={formData.coverLetter}
                    onChange={(e) =>
                      handleInputChange("coverLetter", e.target.value)
                    }
                    className={`min-h-48 resize-y ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900"
                    } text-sm`}
                    maxLength={2000}
                  />
                  <div
                    className={`text-right text-xs transition-colors duration-300 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {formData.coverLetter.length}/2000 characters
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Section */}
            <Card
              className={`transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("acceptTerms", checked as boolean)
                      }
                      className={`mt-1 ${
                        darkMode ? "border-gray-600" : "border-gray-300"
                      }`}
                    />
                    <Label
                      htmlFor="terms"
                      className={`text-sm leading-relaxed cursor-pointer transition-colors duration-300 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className={`underline hover:no-underline transition-colors duration-300 ${
                          darkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-700"
                        }`}
                      >
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className={`underline hover:no-underline transition-colors duration-300 ${
                          darkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-700"
                        }`}
                      >
                        Privacy Policy
                      </a>
                      . I consent to the processing of my personal data for
                      recruitment purposes.
                    </Label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={!isFormValid() || isSubmitting}
                      className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                        isSubmitting ? "animate-pulse" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Submit Application
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="!rounded-button whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to save this application as a draft?"
                          )
                        ) {
                          alert("Application saved as draft!");
                        }
                      }}
                    >
                      <i className="fas fa-save mr-2"></i>
                      Save Draft
                    </Button>
                  </div>

                  <div
                    className={`text-center text-sm transition-colors duration-300 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <i className="fas fa-info-circle mr-1"></i>
                    Your application will be reviewed within 5-7 business days.
                    You will receive a confirmation email shortly.
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
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
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="#"
                  className={`text-sm hover:underline transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <i className="fas fa-question-circle mr-1"></i>
                  Application Help
                </a>
                <a
                  href="#"
                  className={`text-sm hover:underline transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <i className="fas fa-envelope mr-1"></i>
                  Contact HR
                </a>
                <a
                  href="#"
                  className={`text-sm hover:underline transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <i className="fas fa-shield-alt mr-1"></i>
                  Privacy Policy
                </a>
              </div>
              <p
                className={`text-sm transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © 2024 {companyData.name}. All rights reserved. | Equal
                Opportunity Employer
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CandidateFillUpPage;
