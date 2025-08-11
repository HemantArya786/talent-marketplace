import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CompanyDetailsPage = () => {

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  const { clientId } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    clientName: "",
    clientType: "",
    clientPhone: "",
    clientEmail: "",
    location: {
      country: "",
      city: ""
    },
    establishedYear: "",
    clientSize: "",
    description: "",
    clientWebsite: "",
    industry: ""
  });

  useEffect(() => {

    const fetchData = async () => {

      const res = await axios.get(`http://localhost:3000/api/clients/${clientId}`)
      const data = await res.data
      console.log(data.clientDetails);
      setFormData(data.clientDetails)
    }
    fetchData()

  }, [clientId])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "country" || name === "city") {
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.clientEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3000/api/clients/${clientId}`);
      const client = res.data;

      if (client.clientDetails && client.clientDetails.length > 0) {
        const detailsId = client.clientDetails._id;

        await axios.put(
          `http://localhost:3000/api/clients/${clientId}/client-details/${detailsId}`,
          formData
        );

        alert("Company details updated successfully!");
        console.log(formData);
      }
      else {
        await axios.post(
          `http://localhost:3000/api/clients/${clientId}/client-details`,
          formData
        );
        alert("Company details created successfully!");
      }

      navigate(`/company/profile-image/${clientId}`);
      console.log(formData);
    }
    catch (error) {
      console.error("Error saving company details:", error);
      alert("Failed to save company details");
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

        <form className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="clientName"
              placeholder="e.g. Tech Solutions Pvt Ltd"
              value={formData.clientName}
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

          {/* Industry */}
          <div>
            <label className="block font-medium mb-1">Type of Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select an industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>


          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Landline | Phone Number
            </label>
            <PhoneInput
              country={"in"}
              name="clientPhone"
              type="text"
              value={formData.clientPhone || ""}
              onChange={(clientPhone) => setFormData((prev) => ({ ...prev, clientPhone }))}
              inputClass="!w-full !py-2 !pl-14 !pr-4 !border-gray-300 !rounded-md focus:!ring-2 focus:!ring-blue-500"
              buttonClass="!bg-white !border-gray-300"
              inputStyle={{ width: "100%" }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Business Email</label>
            <input
              type="text"
              name="clientEmail"
              placeholder="e.g. contact@techsolutions.com"
              value={formData.clientEmail}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              placeholder="e.g. India"
              value={formData.location.country || ""}
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
              value={formData.location.city || ""}
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
              name="clientSize"
              value={formData.clientSize}
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
              name="description"
              placeholder="Write a short description about the company..."
              value={formData.description}
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
              name="clientWebsite"
              placeholder="e.g. https://www.techsolutions.com"
              value={formData.clientWebsite}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            {/* <button
              type="button"
              onClick={() => navigate("/next-page")}
              className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
            >
              Skip This Page
            </button> */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleSubmit}
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
