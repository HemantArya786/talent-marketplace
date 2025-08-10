import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanyDetailsPage = () => {
  const navigate = useNavigate();

  // Generate years dropdown (from current year to 1900)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  const [formData, setFormData] = useState({
    companyName: "",
    clientType: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    city: "",
    establishedYear: "",
    employees: "",
    about: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg"
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

          {/* Client Type */}
          <div>
            <label className="block font-medium mb-1">Client Type</label>
            <select
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select client type</option>
              <option value="company">Company</option>
              <option value="agency">Agency</option>
              <option value="individual">Individual</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Landline / Phone</label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
              inputClass="!w-full !border !p-2 !rounded"
              placeholder="e.g. +91 9876543210"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
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
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="e.g. 123, Business Park, New Delhi"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              placeholder="e.g. India"
              value={formData.country}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              placeholder="e.g. New Delhi"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Established Year */}
          <div>
            <label className="block font-medium mb-1">Established Year</label>
            <select
              name="establishedYear"
              value={formData.establishedYear}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Employees */}
          <div>
            <label className="block font-medium mb-1">Number of Employees</label>
            <select
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select range</option>
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
