import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetailsForm = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      isOngoing: false,
      liveUrl: "",
      thumbnail: null,
      images: [],
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked, files } = e.target;
    const newProjects = [...projects];

    if (type === "checkbox") {
      newProjects[index][name] = checked;
      if (checked) newProjects[index]["endDate"] = "";
    } else if (type === "file") {
      if (name === "thumbnail") {
        newProjects[index][name] = files[0];
      } else if (name === "images") {
        newProjects[index][name] = Array.from(files);
      }
    } else {
      newProjects[index][name] = value;
    }

    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        isOngoing: false,
        liveUrl: "",
        thumbnail: null,
        images: [],
      },
    ]);
  };

  const deleteProject = (indexToDelete) => {
    const newProjects = projects.filter((_, i) => i !== indexToDelete);
    setProjects(newProjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append each project separately
      projects.forEach((project, index) => {
        formData.append(`projects[${index}][title]`, project.title);
        formData.append(`projects[${index}][description]`, project.description);
        formData.append(`projects[${index}][startDate]`, project.startDate);
        formData.append(`projects[${index}][endDate]`, project.endDate);
        formData.append(`projects[${index}][isOngoing]`, project.isOngoing);
        formData.append(`projects[${index}][liveUrl]`, project.liveUrl);

        if (project.thumbnail) {
          formData.append(`projects[${index}][thumbnail]`, project.thumbnail);
        }

        if (project.images && project.images.length > 0) {
          project.images.forEach((img, imgIndex) => {
            formData.append(`projects[${index}][images][${imgIndex}]`, img);
          });
        }
      });

      // Send PUT request
      const response = await axios.put(
        "https://your-backend-api.com/api/projects/update", // 🔁 Replace with your real API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Projects updated:", response.data);
      alert("Projects submitted successfully!");
      // Optionally navigate to next page
      // navigate("/next-page");
    } catch (error) {
      console.error("Error submitting projects:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSkip = () => {
    navigate("/next-page"); // Replace with your actual route
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 overflow-y-auto">
        <form onSubmit={handleSubmit} className="bg-white  p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Project Details
          </h2>

          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 mb-8 relative"
            >
              <h3 className="text-lg font-semibold mb-4 text-indigo-600">
                Project #{index + 1}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={project.title}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g. Portfolio Website"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Live URL</label>
                  <input
                    type="url"
                    name="liveUrl"
                    value={project.liveUrl}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="https://yourproject.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={project.startDate}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 flex items-center gap-2">
                    End Date
                    <input
                      type="checkbox"
                      name="isOngoing"
                      checked={project.isOngoing}
                      onChange={(e) => handleChange(index, e)}
                      className="ml-2"
                    />
                    <span className="text-sm text-gray-500">
                      Currently Ongoing
                    </span>
                  </label>
                  {!project.isOngoing && (
                    <input
                      type="date"
                      name="endDate"
                      value={project.endDate}
                      onChange={(e) => handleChange(index, e)}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleChange(index, e)}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Describe the project, tools used, your role, etc."
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Thumbnail Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="thumbnail"
                  onChange={(e) => handleChange(index, e)}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Additional Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  onChange={(e) => handleChange(index, e)}
                  className="w-full"
                />
              </div>

              {projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteProject(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addProject}
            className="mb-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-md"
          >
            + Add Another Project
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

      {/* Right - Image Section */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center ">
        <img
          src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fcmsassets%2FAIJobSearch-HERO.webp&w=1920&q=75"
          alt="Project Visual"
          className="h-full w-full object-cover "
        />
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
