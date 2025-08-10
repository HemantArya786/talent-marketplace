import React, { useState, useRef } from "react";

const JobPostPage = () => {
  const skillsOptions = [
    "React",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "Machine Learning",
    "UI/UX Design",
    "DevOps",
    "TypeScript",
  ];

  const workingDaysOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const experienceOptions = [
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5+ years",
  ];

  const jobTypeOptions = ["Remote", "Onsite", "Hybrid"];

  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    about: "",
    skills: [],
    timing: "",
    workingDays: [],
    experience: [],
    jobType: [],
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    skills: false,
    workingDays: false,
    experience: false,
    jobType: false,
  });

  const [searchTerm, setSearchTerm] = useState({
    skills: "",
    workingDays: "",
    experience: "",
    jobType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleDropdown = (field) => {
    setDropdownOpen((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => {
      const updated = prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSearchChange = (field, value) => {
    setSearchTerm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMouseLeave = (field) => {
    setDropdownOpen((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job posted successfully!");
  };

  const renderDropdown = (field, options) => {
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm[field].toLowerCase())
    );

    return (
      <div className="relative" onMouseLeave={() => handleMouseLeave(field)}>
        <button
          type="button"
          onClick={() => toggleDropdown(field)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-left focus:outline-none focus:ring focus:ring-blue-200"
        >
          Select {field.charAt(0).toUpperCase() + field.slice(1)}
        </button>

        {dropdownOpen[field] && (
          <div className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-lg shadow-lg w-full max-h-56 overflow-y-auto">
            {/* Search bar */}
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder={`Search ${field}...`}
                value={searchTerm[field]}
                onChange={(e) =>
                  handleSearchChange(field, e.target.value)
                }
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Options */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData[field].includes(option)}
                    onChange={() => handleCheckboxChange(field, option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500 text-sm">
                No results found
              </div>
            )}
          </div>
        )}

        {/* Selected tags */}
        {formData[field].length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {formData[field].map((item) => (
              <span
                key={item}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Post a Job</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Company Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              About
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>

          {/* Skills Required */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Skills Required
            </label>
            {renderDropdown("skills", skillsOptions)}
          </div>

          {/* Timing */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Timing
            </label>
            <select
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="">Select timing</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          {/* Working Days */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Working Days
            </label>
            {renderDropdown("workingDays", workingDaysOptions)}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Years of Experience
            </label>
            {renderDropdown("experience", experienceOptions)}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job Type
            </label>
            {renderDropdown("jobType", jobTypeOptions)}
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostPage;
