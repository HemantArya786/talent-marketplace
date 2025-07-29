import React, { useState } from "react";

type Developer = {
  id: number;
  name: string;
  about: string;
  profilePic: string;
  skills: string[];
  experience: number; // in years
  location: string;
};

const developers: Developer[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Developer ${i + 1}`,
  about: "Experienced in full-stack web development.",
  profilePic: `https://i.pravatar.cc/150?img=${i + 10}`,
  skills: i % 2 === 0 ? ["React", "Node.js"] : ["Next.js", "TailwindCSS"],
  experience: (i % 5) + 1,
  location: i % 3 === 0 ? "Delhi" : i % 3 === 1 ? "Bangalore" : "Mumbai",
}));

const uniqueSkills = Array.from(new Set(developers.flatMap((d) => d.skills)));
const uniqueLocations = Array.from(new Set(developers.map((d) => d.location)));

const DevelopersListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const developersPerPage = 10;

  const filteredDevelopers = developers.filter((dev) => {
    return (
      (!selectedSkill || dev.skills.includes(selectedSkill)) &&
      (!selectedExperience || dev.experience === parseInt(selectedExperience)) &&
      (!selectedLocation || dev.location === selectedLocation)
    );
  });

  const totalPages = Math.ceil(filteredDevelopers.length / developersPerPage);
  const indexOfLast = currentPage * developersPerPage;
  const indexOfFirst = indexOfLast - developersPerPage;
  const currentDevelopers = filteredDevelopers.slice(indexOfFirst, indexOfLast);

  const handleMessageClick = (devName: string) => {
    alert(`Message request sent to ${devName}`);
  };

  const goToNext = () => currentPage < totalPages && setCurrentPage((p) => p + 1);
  const goToPrevious = () => currentPage > 1 && setCurrentPage((p) => p - 1);

  const handleFilterChange = () => setCurrentPage(1); // Reset page on filter change

  return (
    <div className="p-6 max-w-5xl mx-auto border">
      <h1 className="text-3xl font-bold mb-8 text-center">Developer Directory</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={selectedSkill}
          onChange={(e) => {
            setSelectedSkill(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All Skills</option>
          {uniqueSkills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={selectedExperience}
          onChange={(e) => {
            setSelectedExperience(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All Experience</option>
          {[1, 2, 3, 4, 5].map((year) => (
            <option key={year} value={year}>
              {year}+ Years
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={selectedLocation}
          onChange={(e) => {
            setSelectedLocation(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Developer Cards */}
      <div className="flex flex-col gap-6">
        {currentDevelopers.map((dev) => (
          <div
            key={dev.id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row items-center sm:items-start sm:text-left text-center hover:shadow-lg transition-all"
          >
            <img
              src={dev.profilePic}
              alt={dev.name}
              className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{dev.name}</h2>
              <p className="text-sm text-gray-600 mt-1 mb-2">{dev.about}</p>
              <p className="text-sm text-gray-500 mb-2">
                Experience: {dev.experience} year(s) | Location: {dev.location}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {dev.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleMessageClick(dev.name)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Message Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DevelopersListPage;
