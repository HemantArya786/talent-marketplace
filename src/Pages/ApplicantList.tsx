import React, { useState, useRef, useEffect } from "react";

const applicantsData = [
  {
    id: 1,
    name: "John Doe",
    applyDate: "2025-08-05",
    about: "Frontend developer with 3 years of experience in React and Tailwind CSS.",
    profileImage: "https://via.placeholder.com/80",
    category: "Frontend",
    skills: ["React", "JavaScript"],
    experience: "3 Years",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    applyDate: "2025-08-06",
    about: "Backend developer specializing in Node.js and MongoDB.",
    profileImage: "https://via.placeholder.com/80",
    category: "Backend",
    skills: ["Node.js", "MongoDB"],
    experience: "5 Years",
    location: "San Francisco",
  },
];

const categories = ["Frontend", "Backend", "Full Stack"];
const skillsList = ["React", "JavaScript", "Node.js", "MongoDB", "Python", "Django"];
const experiences = ["1 Year", "2 Years", "3 Years", "5 Years", "10+ Years"];
const locations = ["New York", "San Francisco", "London", "Remote"];

// Searchable dropdown component
function SearchableDropdown({ label, options, selected, setSelected}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-6" ref={ref}>
      <label className="block font-semibold mb-2 text-gray-600">{label}</label>
      <div
        onClick={() => setOpen(!open)}
        className="w-full p-3 border rounded-lg bg-white cursor-pointer"
      >
        {selected || "Select..."}
      </div>
      {open && (
        <div className="border rounded-lg mt-1 bg-white shadow-lg max-h-48 overflow-y-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border-b outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filtered.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Multi-select searchable dropdown for skills
function MultiSelectDropdown({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleOption = (opt) => {
    if (selected.includes(opt)) {
      setSelected(selected.filter((s) => s !== opt));
    } else {
      setSelected([...selected, opt]);
    }
  };

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-6" ref={ref}>
      <label className="block font-semibold mb-2 text-gray-600">{label}</label>
      <div
        onClick={() => setOpen(!open)}
        className="w-full p-3 border rounded-lg bg-white cursor-pointer flex flex-wrap gap-1"
      >
        {selected.length > 0 ? (
          selected.map((s) => (
            <span key={s} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm">
              {s}
            </span>
          ))
        ) : (
          <span className="text-gray-500">Select...</span>
        )}
      </div>
      {open && (
        <div className="border rounded-lg mt-1 bg-white shadow-lg max-h-48 overflow-y-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border-b outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filtered.map((opt) => (
            <label
              key={opt}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
                className="mr-2 accent-blue-500"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ApplicantsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const removeFilter = (type, value) => {
    if (type === "category") setSelectedCategory("");
    if (type === "experience") setSelectedExperience("");
    if (type === "location") setSelectedLocation("");
    if (type === "skill") setSelectedSkills((prev) => prev.filter((s) => s !== value));
  };

  const filteredApplicants = applicantsData.filter((applicant) => {
    const matchSearch = applicant.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory ? applicant.category === selectedCategory : true;
    const matchSkills =
      selectedSkills.length > 0
        ? selectedSkills.every((skill) => applicant.skills.includes(skill))
        : true;
    const matchExperience = selectedExperience ? applicant.experience === selectedExperience : true;
    const matchLocation = selectedLocation ? applicant.location === selectedLocation : true;
    return matchSearch && matchCategory && matchSkills && matchExperience && matchLocation;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApplicants = filteredApplicants.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg p-6 border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Filters</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search applicants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <SearchableDropdown
          label="Category"
          options={categories}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <MultiSelectDropdown
          label="Skills"
          options={skillsList}
          selected={selectedSkills}
          setSelected={setSelectedSkills}
        />

        <SearchableDropdown
          label="Experience"
          options={experiences}
          selected={selectedExperience}
          setSelected={setSelectedExperience}
        />

        <SearchableDropdown
          label="Location"
          options={locations}
          selected={selectedLocation}
          setSelected={setSelectedLocation}
        />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Applicants</h1>

        {/* Selected Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategory && (
            <span
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
              onClick={() => removeFilter("category")}
            >
              {selectedCategory} ✕
            </span>
          )}
          {selectedExperience && (
            <span
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-200"
              onClick={() => removeFilter("experience")}
            >
              {selectedExperience} ✕
            </span>
          )}
          {selectedLocation && (
            <span
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-purple-200"
              onClick={() => removeFilter("location")}
            >
              {selectedLocation} ✕
            </span>
          )}
          {selectedSkills.map((skill) => (
            <span
              key={skill}
              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-orange-200"
              onClick={() => removeFilter("skill", skill)}
            >
              {skill} ✕
            </span>
          ))}
        </div>

        {/* Applicants List */}
        <div className="grid gap-6">
          {paginatedApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={applicant.profileImage}
                alt={applicant.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{applicant.name}</h2>
                <p className="text-gray-500 text-sm">Applied on: {applicant.applyDate}</p>
                <p className="mt-2 text-gray-700">{applicant.about}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
