import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    about: "",
    phone: "",
    country: "",
    city: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // Handle form submission update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://your-api.com/api/user",
        formData
      );
      console.log("Form submitted successfully:", response.data);
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
            Personal Details
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Bio</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us something about yourself"
              required
            ></textarea>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="!w-full !py-2 !pl-14 !pr-4 !border-gray-300 !rounded-md focus:!ring-2 focus:!ring-blue-500"
              buttonClass="!bg-white !border-gray-300"
              inputStyle={{ width: "100%" }}
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="India"
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Delhi"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
