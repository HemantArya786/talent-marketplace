// Initial structure and logic kept from PortfolioPage
// Updated to handle company portfolio-specific fields with profile and cover image modal editing

import  { useState } from "react";
import {
  Globe,
  Edit,
  Save,
} from "lucide-react";

const CompanyPortfolioPage = () => {
  const [editSection, setEditSection] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [company, setCompany] = useState({
    name: "Your Company Name",
    location: "New Delhi, India",
    email: "company@email.com",
    phone: "+91-XXXXXXXXXX",
    summary: "Brief summary about the company",
    about: "Detailed information about the company",
    activity: "Hiring software engineers, designers, PMs",
    skills: ["React", "Node.js", "UI/UX", "DevOps"],
    socials: [
      { platform: "Website", url: "https://companysite.com", icon: <Globe /> },
    ],
    companySize: "50-100 employees",
    founder: "Jane Doe",
    headOffice: "Bangalore, India",
    industry: "Information Technology",
    website: "https://companysite.com",
    profileImage: null,
    coverImage: null,
  });

  const [editValues, setEditValues] = useState({});
  const [tempImage, setTempImage] = useState(null);

  const onEdit = (section) => {
    setEditSection(section);
    setEditValues({ ...company });
  };

  const onSave = (section) => {
    setCompany({ ...company, ...editValues });
    setEditSection(null);
  };

  const handleChange = (field, value) => {
    setEditValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleChangeArray = (field, idx, value) => {
    setEditValues((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === idx ? value : item)),
    }));
  };

  const handleAddSkill = () => {
    setEditValues((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const handleRemoveSkill = (idx) => {
    setEditValues((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== idx),
    }));
  };

  const handleImageChange = (field, file) => {
    const url = URL.createObjectURL(file);
    setTempImage(url);
    setEditValues((prev) => ({ ...prev, [field]: url }));
  };

  const saveImage = (field) => {
    setCompany((prev) => ({ ...prev, [field]: editValues[field] }));
    setShowModal(null);
    setTempImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans border p-2">
      <h1 className="text-3xl font-bold mb-4">Company Profile</h1>

      {/* Cover Image */}
      <div className="relative mb-4 h-48 bg-gray-200 rounded-md overflow-hidden">
        {company.coverImage ? (
          <img
            src={company.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Cover Image
          </div>
        )}
        <button
          onClick={() => setShowModal("coverImage")}
          className="absolute top-2 right-2 bg-white p-1 rounded shadow"
        >
          <Edit size={16} />
        </button>
      </div>

      {/* Profile Image */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white -mt-16 ml-4">
        {company.profileImage ? (
          <img
            src={company.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
            No Image
          </div>
        )}
        <button
          onClick={() => setShowModal("profileImage")}
          className="absolute bottom-0 right-0 bg-white p-1 rounded shadow"
        >
          <Edit size={16} />
        </button>
      </div>

      {/* Modals */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow w-96">
            <h2 className="text-lg font-semibold mb-2">
              Edit {showModal === "profileImage" ? "Profile" : "Cover"} Image
            </h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(showModal, e.target.files[0])}
              className="mb-4"
            />
            {tempImage && (
              <img
                src={tempImage}
                alt="Preview"
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(null)}
                className="px-3 py-1 rounded bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => saveImage(showModal)}
                className="px-3 py-1 rounded bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Company Info */}
      <section className="mb-6 relative mt-4">
        <h2 className="text-xl font-semibold mb-2">Company Info</h2>
        {editSection === "header" ? (
          <>
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Company Name"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Location"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Phone Number"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
            />
            <button
              onClick={() => onSave("header")}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} className="inline mr-1" /> Save
            </button>
          </>
        ) : (
          <div>
            <p><strong>Name:</strong> {company.name}</p>
            <p><strong>Location:</strong> {company.location}</p>
            <p><strong>Email:</strong> {company.email}</p>
            <p><strong>Phone:</strong> {company.phone}</p>
            <button
              onClick={() => onEdit("header")}
              className="absolute top-0 right-0 bg-white p-1 rounded shadow"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Summary */}
      <section className="mb-6 relative">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        {editSection === "summary" ? (
          <>
            <textarea
              className="w-full border rounded px-2 py-1"
              rows={3}
              value={editValues.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
            />
            <button
              onClick={() => onSave("summary")}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} className="inline mr-1" /> Save
            </button>
          </>
        ) : (
          <div>
            <p>{company.summary}</p>
            <button
              onClick={() => onEdit("summary")}
              className="absolute top-0 right-0 bg-white p-1 rounded shadow"
            >
              <Edit size={16} />
            </button>
          </div>
        )}
      </section>

      {/* About Company */}
      <section className="mb-6 relative">
        <h2 className="text-xl font-semibold mb-2">About Company</h2>
        {editSection === "about" ? (
          <>
            <textarea
              className="w-full border rounded px-2 py-1"
              rows={3}
              value={editValues.about}
              onChange={(e) => handleChange("about", e.target.value)}
            />
            <button
              onClick={() => onSave("about")}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} className="inline mr-1" /> Save
            </button>
          </>
        ) : (
          <div>
            <p>{company.about}</p>
            <button
              onClick={() => onEdit("about")}
              className="absolute top-0 right-0 bg-white p-1 rounded shadow"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Activity */}
      <section className="mb-6 relative">
        <h2 className="text-xl font-semibold mb-2">Activity on this Job</h2>
        {editSection === "activity" ? (
          <>
            <textarea
              className="w-full border rounded px-2 py-1"
              rows={2}
              value={editValues.activity}
              onChange={(e) => handleChange("activity", e.target.value)}
            />
            <button
              onClick={() => onSave("activity")}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} className="inline mr-1" /> Save
            </button>
          </>
        ) : (
          <div>
            <p>{company.activity}</p>
            <button
              onClick={() => onEdit("activity")}
              className="absolute top-0 right-0 bg-white p-1 rounded shadow"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Skills and Expertise */}
      <section className="mb-6 relative">
        <h2 className="text-xl font-semibold mb-2">Skills and Expertise</h2>
        {editSection === "skills" ? (
          <>
            <ul className="mb-2">
              {(editValues.skills || []).map((skill, idx) => (
                <li key={idx} className="flex items-center mb-1">
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    value={skill}
                    onChange={(e) =>
                      handleChangeArray("skills", idx, e.target.value)
                    }
                  />
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => handleRemoveSkill(idx)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="bg-gray-200 px-2 py-1 rounded mr-2"
              onClick={handleAddSkill}
            >
              Add Skill
            </button>
            <button
              onClick={() => onSave("skills")}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} className="inline mr-1" /> Save
            </button>
          </>
        ) : (
          <div>
            <ul className="list-disc list-inside">
              {company.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <button
              onClick={() => onEdit("skills")}
              className="absolute top-0 right-0 bg-white p-1 rounded shadow"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Company Details */}
      <section className="mb-6 relative">
        <h2 className="text-xl font-semibold mb-2">Company Details</h2>
        {editSection === "details" ? (
          <>
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.founder}
              onChange={(e) => handleChange("founder", e.target.value)}
              placeholder="Founder"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.headOffice}
              onChange={(e) => handleChange("headOffice", e.target.value)}
              placeholder="Head Office"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.companySize}
              onChange={(e) => handleChange("companySize", e.target.value)}
              placeholder="Company Size"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.industry}
              onChange={(e) => handleChange("industry", e.target.value)}
              placeholder="Industry"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.website}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="Website"
            />
            <button
              onClick={() => onSave("details")}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} className="inline mr-1" /> Save
            </button>
          </>
        ) : (
          <div>
            <p><strong>Founder:</strong> {company.founder}</p>
            <p><strong>Head Office:</strong> {company.headOffice}</p>
            <p><strong>Company Size:</strong> {company.companySize}</p>
            <p><strong>Industry:</strong> {company.industry}</p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={company.website}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.website}
              </a>
            </p>
            <button
              onClick={() => onEdit("details")}
              className="absolute top-0 right-0 bg-white p-1 rounded shadow"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CompanyPortfolioPage;