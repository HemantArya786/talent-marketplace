//@ts-nocheck

import { useEffect, useState } from "react";
import {
  Globe,
  Edit,
  Save,
} from "lucide-react";
import { useParams } from "react-router-dom";

type ClientType = {
  firebaseUid: string;
  clientId: number,
  name: string;
  email: string;
  phone: number;
  location: {
    country: string;
    city: string;
    timezone: string;
  };
  role: 'client' | string;
  authProvider: 'linkedIn' | 'google' | 'email';
  clientDetails: {
    client_id: string;
    clientName: string;
    clientSize: '1-9' | '10-25' | '26-50' | '50+' | '100+';
    industry: string;
    socials: {
      _id: string;
      socialType: string;
      URL: string;
    }[];
    clientType: 'company' | 'agency' | 'individual';
    description: string;
    clientProfileImageURL: string;
    clientBackgroundImageURL: string;
    lastLogin: string;
  };
};

const initialData: ClientType = {
  firebaseUid: "",
  clientId: 0,
  name: "",
  email: "",
  phone: 0,
  location: {
    country: "",
    city: "",
    timezone: ""
  },
  role: "client",
  authProvider: "email",
  clientDetails: {
    client_id: "",
    clientName: "",
    clientSize: "1-9",
    industry: "",
    socials: [],
    clientType: "individual",
    description: "",
    clientProfileImageURL: "",
    clientBackgroundImageURL: "",
    lastLogin: ""
  }
}

const CompanyPortfolioPage = () => {

  const [editSection, setEditSection] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const [company, setCompany] = useState(initialData)
  const [editValues, setEditValues] = useState(initialData);
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

  const { clientId } = useParams()

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch(`http://localhost:3000/api/clients/${clientId}`, {
        method: "GET",
        headers: { "Content-type": "application/json" }
      })


      if (!response.ok) {
        console.error("Failed to fetch user data:", response.status)
        return;
      }

      const userData = await response.json()
      setCompany(userData)
      setEditValues(userData)
      console.log(userData);
    }
    fetchData()

  }, [clientId])

  return (
    <div className="max-w-6xl mx-auto font-sans border p-2">
      <h1 className="text-3xl font-bold mb-4">Company Profile</h1>

      {/* Cover Image */}
      <div className="relative mb-4 h-48 bg-gray-200 rounded-md overflow-hidden">
        {company.clientDetails.clientBackgroundImageURL ? (
          <img
            src={company.clientDetails.clientBackgroundImageURL}
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
        {company.clientDetails.clientProfileImageURL ? (
          <img
            src={company.clientDetails.clientProfileImageURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
            Please update your Profile photo
          </div>
        )}
        <button
          onClick={() => setShowModal("profileImage")}
          className="absolute bottom-0 right-0 bg-white p-1 rounded shadow"
        >
          <Edit size={16} />
        </button>
      </div>

      Modals
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
              // value={editValues.location.city}
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
            {/* <p><strong>Location:</strong> {company.location.city}</p> */}
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
              value={editValues.clientDetails.description}
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
            <p>{company.clientDetails.description}</p>
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
              value={editValues.clientDetails.clientType}
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
            <p>{company.clientDetails.clientType}</p>
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
              value={editValues.activity || ""}
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

      {/* Skills and Expertise
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
      </section> */}

      {/* Company Details */}
      <section className="mb-6 relative">
        <h2 className="text-xl font-semibold mb-2">Company Details</h2>
        {editSection === "details" ? (
          <>
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.clientDetails.clientName}
              onChange={(e) => handleChange("founder", e.target.value)}
              placeholder="Founder"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              // value={editValues.location.city}
              onChange={(e) => handleChange("headOffice", e.target.value)}
              placeholder="Head Office"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.clientDetails.clientSize}
              onChange={(e) => handleChange("companySize", e.target.value)}
              placeholder="Company Size"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.clientDetails.industry}
              onChange={(e) => handleChange("industry", e.target.value)}
              placeholder="Industry"
            />
            <input
              className="block border rounded w-full px-2 py-1 mb-2"
              value={editValues.clientDetails.socials}
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
            <p><strong>Founder:</strong> {company.name}</p>
            {/* <p><strong>Head Office:</strong> {company.location.city}, {company.location.country}</p> */}
            <p><strong>Company Size:</strong> {company.clientDetails.clientSize}</p>
            <p><strong>Industry:</strong> {company.clientDetails.industry}</p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={company.clientDetails.socials}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.clientDetails.socials}
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