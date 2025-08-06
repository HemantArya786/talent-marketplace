import React, { useState } from "react";

const JobDetailsForm = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
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
        description: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Job Experiences:", experiences);
    // You can send `experiences` to your API here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Job Experience
        </h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              Experience #{index + 1}
            </h3>

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
                />
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

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobDetailsForm;
