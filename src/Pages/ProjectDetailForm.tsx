import React, { useState } from "react";

const ProjectDetailsForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Projects:", projects);
    // Handle file uploads and send data to backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Project Details
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 mb-8"
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
          </div>
        ))}

        <button
          type="button"
          onClick={addProject}
          className="mb-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-md"
        >
          + Add Another Project
        </button>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
        >
          Submit Projects
        </button>
      </form>
    </div>
  );
};

export default ProjectDetailsForm;
