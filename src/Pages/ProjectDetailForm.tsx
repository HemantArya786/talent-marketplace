import { AutoCloseModal } from "@/lib/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetailsForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [showModal, setShowModal] = useState(false);

  const [projects, setProjects] = useState([
    {
      _id: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      workingCurrently: false,
      url: "",
      thumbnail: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/users/${userId}`);
      const data = await res.json();

      setProjects(data.projects);
      console.log(data.projects);
    };
    fetchData();
  }, [userId]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newProjects = [...projects];

    if (type === "checkbox") {
      newProjects[index][name] = checked;
      if (checked) newProjects[index]["endDate"] = "";
    } else {
      newProjects[index][name] = value;
    }

    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        _id: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        workingCurrently: false,
        url: "",
        thumbnail: "",
      },
    ]);
  };

  const deleteProject = (indexToDelete) => {
    const newProjects = projects.filter((_, i) => i !== indexToDelete);
    setProjects(newProjects);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("http://localhost:3000/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const { imageUrl } = await res.json();

      const updatedProjects = [...projects];
      updatedProjects[index].thumbnail = imageUrl;
      setProjects(updatedProjects);

      alert("Image uploaded!");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload image.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requests = projects.map((project) => {
        const proj = { ...project };

        if (!proj._id) delete proj._id;

        if (proj._id) {
          return axios.put(
            `http://localhost:3000/api/users/${userId}/projects/${proj._id}`,
            proj
          );
        } else {
          return axios.post(
            `http://localhost:3000/api/users/${userId}/projects`,
            proj
          );
        }
      });

      await Promise.all(requests);

      setModalMessage("Projects added successfully!");
      setModalType("success");
      setShowModal(true);

      setTimeout(() => {
        navigate(`/developer/education-details/${userId}`);
      }, 2100);
    } catch (error) {
      console.error("Error submitting projects:", error);
      setModalMessage("Failed to submit projects.");
      setModalType("error");
      setShowModal(true);
    }
  };

  const handleSkip = () => {
    navigate(`/developer/education-details/${userId}`);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 overflow-y-auto">
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8">
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
                  <label className="block text-gray-700 mb-1">Project Title</label>
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
                    name="url"
                    value={project.url}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="https://yourproject.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Start Date</label>
                  <input
                    type="month"
                    name="startDate"
                    value={project.startDate.slice(0, 7) || ""}
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
                      name="workingCurrently"
                      checked={project?.workingCurrently || false}
                      onChange={(e) => handleChange(index, e)}
                      className="ml-2"
                    />
                    <span className="text-sm text-gray-500">Currently Working</span>
                  </label>
                  {!project.workingCurrently && (
                    <input
                      type="month"
                      name="endDate"
                      value={project.endDate.slice(0, 7) || ""}
                      onChange={(e) => handleChange(index, e)}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Project Description</label>
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleChange(index, e)}
                  rows={3}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Describe the project, tools used, your role, etc."
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Thumbnail Image</label>
                <input
                  type="file"
                  accept="image/*"
                  name="thumbnail"
                  onChange={(e) => handleImageChange(e, index)}
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
              onClick={handleSubmit}
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
      <div className="hidden md:block md:w-1/2 bg-cover bg-center">
        <img
          src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fcmsassets%2FAIJobSearch-HERO.webp&w=1920&q=75"
          alt="Project Visual"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Modal */}
      {showModal && (
        <AutoCloseModal
          message={modalMessage}
          type={modalType}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProjectDetailsForm;
