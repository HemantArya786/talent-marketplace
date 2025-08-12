import { AutoCloseModal } from "@/lib/Modal";
import { BASE_API } from "@/lib/utils";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JobDetailsForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");

  type Experience = {
    _id: string;
    title: string;
    companyName: string;
    location: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    workType: string;
    description: string;
  };

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      _id: "",
      title: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      workType: "",
      description: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/users/${userId}`);
        const data = await res.json();

        if (Array.isArray(data.experience) && data.experience.length > 0) {
          setExperiences(data.experience);
        }
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      }
    };

    fetchData();
  }, [userId]);

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
        _id: "",
        title: "",
        companyName: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requests = experiences.map((experience) => {
        const exp = { ...experience };

        if (!exp._id) delete exp._id;

        if (exp._id) {
          return axios.put(
            `${BASE_API}/api/users/${userId}/experience/${exp._id}`,
            exp
          );
        } else {
          return axios.post(
            `${BASE_API}/api/users/${userId}/experience`,
            exp
          );
        }
      });

      await Promise.all(requests);

      setModalMessage("Experience added successfully!");
      setModalType("success");
      setShowModal(true);

      setTimeout(() => {
        navigate(`/developer/project-details/${userId}`);
      }, 2100);
    } catch (error) {
      console.error("Error submitting job experiences:", error);

      setModalMessage("Failed to submit job experiences.");
      setModalType("error");
      setShowModal(true);
    }
  };

  const handleSkip = () => {
    navigate(`/developer/project-details/${userId}`);
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
                    name="companyName"
                    value={exp.companyName || ""}
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
                    value={exp.startDate ? exp.startDate.slice(0, 7) : ""}
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
                    value={exp.endDate ? exp.endDate.slice(0, 7) : ""}
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
                  rows={3}
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
              onClick={handleSkip}
              type="button"
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-md"
            >
              Skip
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Modal message */}
      {showModal && (
        <AutoCloseModal
          message={modalMessage}
          onClose={() => setShowModal(false)}
          type={modalType}
        />
      )}

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
