import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobDetailsForm = () => {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      workType: "",
      description: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = type === "checkbox" ? checked : value;

    if (name === "currentlyWorking" && checked) {
      newExperiences[index].endDate = "";
    }

    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        workType: "",
        description: "",
      },
    ]);
  };

  const deleteExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Job Experiences:", experiences);
    // Submit to API or handle logic
    navigate("/next-step"); // Replace with actual route
  };

  const handleSkip = () => {
    navigate("/next-step"); // Replace with actual route
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white p-7 overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white  rounded-xl p-6 md:p-6 w-full max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Job Experience
          </h2>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 mb-6 relative"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Experience #{index + 1}
              </h3>

              {experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteExperience(index)}
                  className="absolute top-2 right-2 text-red-600 text-sm hover:underline"
                >
                  Delete
                </button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={exp.title}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g. Software Engineer"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g. Google"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={exp.location}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g. New York"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Work Type</label>
                  <select
                    name="workType"
                    value={exp.workType}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Start Date</label>
                  <input
                    type="month"
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">End Date</label>
                  <input
                    type="month"
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    disabled={exp.currentlyWorking}
                  />
                </div>
                <div className="flex items-center col-span-1 md:col-span-2">
                  <input
                    type="checkbox"
                    id={`currentlyWorking-${index}`}
                    name="currentlyWorking"
                    checked={exp.currentlyWorking}
                    onChange={(e) => handleChange(index, e)}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`currentlyWorking-${index}`}
                    className="text-gray-700"
                  >
                    I am currently working in this role
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleChange(index, e)}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="What did you do in this role?"
                ></textarea>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addExperience}
            className="mb-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-md"
          >
            + Add Another Experience
          </button>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-md"
            >
              Skip
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fcmsassets%2FAIJobSearch-HERO.webp&w=1920&q=75"
          alt="Work"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default JobDetailsForm;
