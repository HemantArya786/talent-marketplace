import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanyDetailsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    email: "",
    location: {
      country: "",
      city: ""
    },
    establishedYear: "",
    employees: "",
    about: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeEmployees =
    (field: string) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await axios.put("/api/company-details", formData);
      alert("Company details updated successfully!");
    } catch (error) {
      console.error("Error updating company details", error);
      alert("Failed to update company details");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Image */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?_gl=1*1rg7887*_ga*MjExOTU2ODc1OS4xNzU0NjQwMjEy*_ga_8JE65Q40S6*czE3NTQ2NDI5MDQkbzIkZzEkdDE3NTQ2NDQxMzckajU0JGwwJGgw"
          alt="Company"
          className="max-w-full max-h-full object-cover"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Company Details</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="e.g. Tech Solutions Pvt Ltd"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Landline | Phone Number
            </label>
            <PhoneInput
              country={"in"}
              name="phone"
              value={formData.phone || ""}
              onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
              inputClass="!w-full !py-2 !pl-14 !pr-4 !border-gray-300 !rounded-md focus:!ring-2 focus:!ring-blue-500"
              buttonClass="!bg-white !border-gray-300"
              inputStyle={{ width: "100%" }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Business Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. contact@techsolutions.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              name="address"
              placeholder="e.g. 123, Business Park, New Delhi"
              value={formData.location.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Registered In */}
          <div>
            <label className="block font-medium mb-1">Country</label>
            <input
              type="text"
              name="registeredIn"
              placeholder="e.g. India"
              value={formData.location.country}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Since How Many Years */}
          <div>
            <label className="block font-medium mb-1">Since (Years)</label>
            <input
              type="number"
              name="sinceYears"
              placeholder="e.g. 10"
              value={formData.establishedYear}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Number of Employees */}
          <div>
            <label htmlFor="clientSize" className="block mb-2 font-medium text-gray-700">
              Client Size
            </label>
            <select
              id="clientSize"
              name="clientSize"
              className="border rounded px-3 py-2 w-full"
              value={formData.employees}
              onChange={handleChangeEmployees("clientSize")}
            >
              <option value="">Select client size</option>
              <option value="1-9">1-9</option>
              <option value="10-25">10-25</option>
              <option value="26-50">26-50</option>
              <option value="50+">50+</option>
              <option value="100+">100+</option>
            </select>

          </div>

          {/* About */}
          <div>
            <label className="block font-medium mb-1">About Company</label>
            <textarea
              name="about"
              placeholder="Write a short description about the company..."
              value={formData.about}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows={3}
            />
          </div>

          {/* Website */}
          <div>
            <label className="block font-medium mb-1">Website URL</label>
            <input
              type="url"
              name="website"
              placeholder="e.g. https://www.techsolutions.com"
              value={formData.website}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/next-page")}
              className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
            >
              Skip This Page
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
