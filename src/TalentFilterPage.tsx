// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Slider } from "./components/ui/slider";
import { Switch } from "./components/ui/switch";
import { Badge } from "./components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { Checkbox } from "./components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";

const TalentFilterPage: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [rateRange, setRateRange] = useState<number[]>([25, 150]);
  const [availableOnly, setAvailableOnly] = useState<boolean>(false);
  const [skillsOpen, setSkillsOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

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
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20female%20software%20developer%20portrait%20with%20clean%20white%20background%2C%20modern%20business%20headshot%2C%20confident%20expression%2C%20tech%20industry%20professional&width=200&height=200&seq=freelancer1&orientation=squarish",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "GTM Specialist",
      rating: 4.8,
      hourlyRate: 95,
      skills: ["Go-to-Market", "Product Marketing", "Sales Strategy"],
      available: true,
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20male%20marketing%20specialist%20portrait%20with%20clean%20white%20background%2C%20modern%20business%20headshot%2C%20confident%20expression%2C%20business%20professional&width=200&height=200&seq=freelancer2&orientation=squarish",
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "AI Developer",
      rating: 4.7,
      hourlyRate: 75,
      skills: ["React", "TypeScript", "AI/ML"],
      available: false,
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20female%20AI%20developer%20portrait%20with%20clean%20white%20background%2C%20modern%20tech%20headshot%2C%20focused%20expression%2C%20software%20engineer&width=200&height=200&seq=freelancer3&orientation=squarish",
    },
    {
      id: 4,
      name: "David Kim",
      role: "GTM Specialist",
      rating: 4.9,
      hourlyRate: 110,
      skills: ["Business Development", "Growth Hacking", "Product Marketing"],
      available: true,
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20male%20business%20development%20specialist%20portrait%20with%20clean%20white%20background%2C%20modern%20business%20headshot%2C%20approachable%20expression%2C%20marketing%20professional&width=200&height=200&seq=freelancer4&orientation=squarish",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "AI Developer",
      rating: 4.6,
      hourlyRate: 90,
      skills: ["Python", "Data Science", "AWS"],
      available: true,
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20female%20data%20scientist%20portrait%20with%20clean%20white%20background%2C%20modern%20tech%20headshot%2C%20intelligent%20expression%2C%20AI%20researcher&width=200&height=200&seq=freelancer5&orientation=squarish",
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "AI Developer",
      rating: 4.8,
      hourlyRate: 100,
      skills: ["Node.js", "GraphQL", "Machine Learning"],
      available: true,
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20male%20full-stack%20developer%20portrait%20with%20clean%20white%20background%2C%20modern%20tech%20headshot%2C%20creative%20expression%2C%20software%20architect&width=200&height=200&seq=freelancer6&orientation=squarish",
    },
  ];

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const skillsMatch =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => freelancer.skills.includes(skill));

    const roleMatch =
      selectedRole === "all" ||
      (selectedRole === "ai-dev" && freelancer.role === "AI Developer") ||
      (selectedRole === "gtm" && freelancer.role === "GTM Specialist");

    const rateMatch =
      freelancer.hourlyRate >= rateRange[0] &&
      freelancer.hourlyRate <= rateRange[1];

    const availabilityMatch = !availableOnly || freelancer.available;

    return skillsMatch && roleMatch && rateMatch && availabilityMatch;
  });

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-yellow-400"></i>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star text-gray-300"></i>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Find Talent
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="!rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-filter mr-2"></i>
            Filters
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 h-full overflow-y-auto">
            {/* Mobile Close Button */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Filters
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </Button>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 hidden lg:block">
              Filters
            </h2>

            {/* Skills Filter */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                Skills
              </Label>
              <Popover open={skillsOpen} onOpenChange={setSkillsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    {selectedSkills.length > 0
                      ? `${selectedSkills.length} selected`
                      : "Select skills"}
                    <i className="fas fa-chevron-down ml-2"></i>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search skills..." />
                    <CommandList>
                      <CommandEmpty>No skills found.</CommandEmpty>
                      <CommandGroup>
                        {skills.map((skill) => (
                          <CommandItem
                            key={skill}
                            onSelect={() => handleSkillToggle(skill)}
                          >
                            <div className="flex items-center space-x-2 cursor-pointer">
                              <Checkbox
                                checked={selectedSkills.includes(skill)}
                                onChange={() => handleSkillToggle(skill)}
                              />
                              <span>{skill}</span>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => handleSkillToggle(skill)}
                    >
                      {skill}
                      <i className="fas fa-times ml-1 text-xs"></i>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Role Filter */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                Role
              </Label>
              <RadioGroup value={selectedRole} onValueChange={setSelectedRole}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="cursor-pointer">
                    All Roles
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ai-dev" id="ai-dev" />
                  <Label htmlFor="ai-dev" className="cursor-pointer">
                    AI Developer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gtm" id="gtm" />
                  <Label htmlFor="gtm" className="cursor-pointer">
                    GTM Specialist
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Rate Range */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                Hourly Rate: ${rateRange[0]} - ${rateRange[1]}
              </Label>
              <Slider
                value={rateRange}
                onValueChange={setRateRange}
                max={200}
                min={10}
                step={5}
                className="w-full"
              />
            </div>

            {/* Availability Toggle */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="availability"
                  checked={availableOnly}
                  onCheckedChange={setAvailableOnly}
                />
                <Label
                  htmlFor="availability"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  Available now only
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-8">
            <div className="mb-8 hidden lg:block">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Find Talent
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Discover top freelancers for your AI development and
                go-to-market needs
              </p>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredFreelancers.length} freelancer
                {filteredFreelancers.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {/* Freelancer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredFreelancers.map((freelancer) => (
                <Card
                  key={freelancer.id}
                  className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={freelancer.photo}
                        alt={freelancer.name}
                        className="w-16 h-16 rounded-full object-cover object-top"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                          {freelancer.name}
                        </h3>
                        <Badge
                          className={`mb-2 ${
                            freelancer.role === "AI Developer"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-green-600 hover:bg-green-700"
                          } text-white`}
                        >
                          {freelancer.role}
                        </Badge>
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(freelancer.rating)}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            {freelancer.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          ${freelancer.hourlyRate}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          per hour
                        </div>
                        {freelancer.available && (
                          <Badge
                            variant="outline"
                            className="mt-1 text-green-600 border-green-600"
                          >
                            <i className="fas fa-circle text-green-500 mr-1 text-xs"></i>
                            Available
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-eye mr-2"></i>
                      View Portfolio
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFreelancers.length === 0 && (
              <div className="text-center py-12">
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No freelancers found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentFilterPage;
