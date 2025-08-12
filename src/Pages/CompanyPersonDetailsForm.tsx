import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_API } from "@/lib/utils";

const CompanyPersonDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    email: "",
  });

  const { clientId } = useParams()

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(`${BASE_API}/api/clients/${clientId}`);
      const data = await res.json();

      const normalizedData = {
        fullName: data.fullName || data.name || "",
        designation: data.designation || "",
        email: data.email || "",
      };
      setFormData(normalizedData);
      console.log(data);
    };

    fetchData();
  }, [clientId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.put(
        `${BASE_API}/api/clients/${clientId}`,
        formData
      );

      console.log("Form submitted successfully:", response.data);
      alert("Personal details updated successfully!");
      navigate(`/company/company-details/${clientId}`);

    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Image Section */}
      <div className="w-1/2 h-full hidden md:block">
        <img
          src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fcmsassets%2FAIJobSearch-HERO.webp&w=1920&q=75"
          alt="Personal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Company Employee Details
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Designation */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Software Engineer"
              required
            />
          </div>



          {/* Official Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Personal Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="official@example.com"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyPersonDetailsForm;
