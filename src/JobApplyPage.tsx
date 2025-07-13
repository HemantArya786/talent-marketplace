// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Checkbox } from "./components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible";

const JobApplyPage: React.FC = () => {
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedinUrl: "",
    portfolioUrl: "",
    yearsExperience: "",
    coverLetter: "",
    reactNodeExperience: "",
    largestProject: "",
    whyInterested: "",
    termsAccepted: false,
  });
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleInputChange = (field: string, value: string | boolean) => {
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
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setUploadedFile(file);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setUploadedFile(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert("Application submitted successfully!");
  };

  const coverLetterCount = formData.coverLetter.length;
  const maxCoverLetterLength = 2000;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="px-6 py-4">
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
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  Senior Full Stack Developer
                </h1>
                <p className="text-lg text-gray-600">TechCorp Solutions</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <i className="fas fa-dollar-sign mr-1"></i>
                $5,000 - $8,000
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                <i className="fas fa-map-marker-alt mr-1"></i>
                Remote
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                <i className="fas fa-clock mr-1"></i>
                Full-time
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                <i className="fas fa-briefcase mr-1"></i>
                Senior Level
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 py-8">
          {/* Job Details Section */}
          <Card className="mb-8 bg-white border-gray-200">
            <Collapsible
              open={isJobDetailsOpen}
              onOpenChange={setIsJobDetailsOpen}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      <i className="fas fa-info-circle mr-2 text-blue-600"></i>
                      Job Details
                    </CardTitle>
                    <i
                      className={`fas fa-chevron-${
                        isJobDetailsOpen ? "up" : "down"
                      } text-gray-500`}
                    ></i>
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Job Description
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We are looking for an experienced full stack developer
                        to join our dynamic team. You will be responsible for
                        developing scalable web applications using modern
                        technologies and frameworks. The ideal candidate will
                        have strong experience with React, Node.js, and
                        TypeScript, along with a passion for creating
                        exceptional user experiences.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Required Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Node.js",
                          "TypeScript",
                          "MongoDB",
                          "Express.js",
                          "REST APIs",
                          "Git",
                          "AWS",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-blue-200 text-blue-700 bg-blue-50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Company Overview
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        TechCorp Solutions is a leading technology company
                        specializing in innovative software solutions for
                        businesses worldwide. We pride ourselves on fostering a
                        collaborative environment where creativity and technical
                        excellence thrive.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Benefits & Perks
                      </h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>
                          <i className="fas fa-check text-green-600 mr-2"></i>
                          Competitive salary and equity package
                        </li>
                        <li>
                          <i className="fas fa-check text-green-600 mr-2"></i>
                          Comprehensive health, dental, and vision insurance
                        </li>
                        <li>
                          <i className="fas fa-check text-green-600 mr-2"></i>
                          Flexible work arrangements and remote options
                        </li>
                        <li>
                          <i className="fas fa-check text-green-600 mr-2"></i>
                          Professional development budget
                        </li>
                        <li>
                          <i className="fas fa-check text-green-600 mr-2"></i>
                          Modern tech stack and equipment
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Application Form */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                <i className="fas fa-file-alt mr-2 text-blue-600"></i>
                Submit Your Application
              </CardTitle>
              <CardDescription className="text-gray-600">
                Please fill out all required fields to complete your application
                for this position.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <i className="fas fa-user mr-2 text-blue-600"></i>
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email.example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="location"
                        className="text-sm font-medium text-gray-700"
                      >
                        Current Location <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, State/Country"
                        value={formData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                    Professional Information
                  </h3>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      Resume Upload <span className="text-red-500">*</span>
                    </Label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                        dragActive
                          ? "border-blue-500 bg-blue-50"
                          : uploadedFile
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      {uploadedFile ? (
                        <div className="space-y-2">
                          <i className="fas fa-file-pdf text-3xl text-green-600"></i>
                          <p className="text-sm font-medium text-green-700">
                            {uploadedFile.name}
                          </p>
                          <p className="text-xs text-green-600">
                            File uploaded successfully
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setUploadedFile(null)}
                            className="!rounded-button whitespace-nowrap cursor-pointer mt-2"
                          >
                            Remove File
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <i className="fas fa-cloud-upload-alt text-3xl text-gray-400"></i>
                          <p className="text-sm text-gray-600">
                            Drag and drop your resume here, or{" "}
                            <label className="text-blue-600 hover:text-blue-700 cursor-pointer underline">
                              browse files
                              <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                              />
                            </label>
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF files only, max 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="linkedinUrl"
                        className="text-sm font-medium text-gray-700"
                      >
                        LinkedIn Profile URL
                      </Label>
                      <Input
                        id="linkedinUrl"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedinUrl}
                        onChange={(e) =>
                          handleInputChange("linkedinUrl", e.target.value)
                        }
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="portfolioUrl"
                        className="text-sm font-medium text-gray-700"
                      >
                        Portfolio/GitHub URL
                      </Label>
                      <Input
                        id="portfolioUrl"
                        type="url"
                        placeholder="https://github.com/yourusername"
                        value={formData.portfolioUrl}
                        onChange={(e) =>
                          handleInputChange("portfolioUrl", e.target.value)
                        }
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="yearsExperience"
                      className="text-sm font-medium text-gray-700"
                    >
                      Years of Experience{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="yearsExperience"
                      type="number"
                      min="0"
                      max="50"
                      placeholder="5"
                      value={formData.yearsExperience}
                      onChange={(e) =>
                        handleInputChange("yearsExperience", e.target.value)
                      }
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full md:w-48"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <i className="fas fa-envelope mr-2 text-blue-600"></i>
                    Cover Letter
                  </h3>

                  <div className="space-y-2">
                    <Label
                      htmlFor="coverLetter"
                      className="text-sm font-medium text-gray-700"
                    >
                      Cover Letter <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you're the perfect fit for this role. Highlight your relevant experience, achievements, and what excites you about this opportunity..."
                      value={formData.coverLetter}
                      onChange={(e) =>
                        handleInputChange("coverLetter", e.target.value)
                      }
                      required
                      rows={6}
                      maxLength={maxCoverLetterLength}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Minimum 100 characters required</span>
                      <span
                        className={
                          coverLetterCount > maxCoverLetterLength * 0.9
                            ? "text-orange-600"
                            : ""
                        }
                      >
                        {coverLetterCount}/{maxCoverLetterLength}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience Questions */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <i className="fas fa-question-circle mr-2 text-blue-600"></i>
                    Experience Questions
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="reactNodeExperience"
                        className="text-sm font-medium text-gray-700"
                      >
                        Describe your experience with React and Node.js{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="reactNodeExperience"
                        placeholder="Share specific projects, technologies, and achievements using React and Node.js..."
                        value={formData.reactNodeExperience}
                        onChange={(e) =>
                          handleInputChange(
                            "reactNodeExperience",
                            e.target.value
                          )
                        }
                        required
                        rows={4}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="largestProject"
                        className="text-sm font-medium text-gray-700"
                      >
                        What is your largest project to date?{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="largestProject"
                        placeholder="Describe the scope, technologies used, your role, and the impact of your largest project..."
                        value={formData.largestProject}
                        onChange={(e) =>
                          handleInputChange("largestProject", e.target.value)
                        }
                        required
                        rows={4}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="whyInterested"
                        className="text-sm font-medium text-gray-700"
                      >
                        Why are you interested in this position?{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="whyInterested"
                        placeholder="Explain what attracts you to this role and TechCorp Solutions, and how it aligns with your career goals..."
                        value={formData.whyInterested}
                        onChange={(e) =>
                          handleInputChange("whyInterested", e.target.value)
                        }
                        required
                        rows={4}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="space-y-6 pt-6 border-t border-gray-200">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        handleInputChange("termsAccepted", checked as boolean)
                      }
                      required
                      className="mt-1"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Terms of Service
                      </a>
                      , and consent to the processing of my personal data for
                      recruitment purposes.
                    </Label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAccepted}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer px-8 py-3 text-base font-medium"
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

                    <p className="text-sm text-gray-500 text-center sm:text-left">
                      <span className="text-red-500">*</span> indicates required
                      fields
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">
                © 2024 JobBoard Pro. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
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

export default JobApplyPage;
