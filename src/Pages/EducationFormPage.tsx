import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const degreeOptions = ['SSC', '12th/Intermediate', 'Bachelors', 'Masters', 'Others'];

const EducationForm = () => {
  const [educationList, setEducationList] = useState([
    {
      schoolName: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      degree: '',
    },
  ]);

  const scrollContainerRef = useRef(null);
  const lastEducationRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedList = [...educationList];
    updatedList[index][name] = value;
    setEducationList(updatedList);
  };

  const handleAddEducation = () => {
    setEducationList((prevList) => [
      ...prevList,
      {
        schoolName: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        degree: '',
      },
    ]);
  };

  const handleDeleteEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };

  // Scroll to bottom when new block is added
  useEffect(() => {
    if (lastEducationRef.current) {
      lastEducationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [educationList.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:5000/api/education', // <-- Change to your backend endpoint
        { education: educationList }
      );
      console.log('Education data updated:', response.data);
      navigate('/next-page'); // <-- Change to the page you want to go after submit
    } catch (error) {
      console.error('Error updating education data:', error);
    }
  };

  const handleSkip = () => {
    navigate('/next-page'); // <-- Change this route to skip target
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <img
          src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?_gl=1*zlrk9d*_ga*MjExOTU2ODc1OS4xNzU0NjQwMjEy*_ga_8JE65Q40S6*czE3NTQ2NDAyMTIkbzEkZzEkdDE3NTQ2NDAzODAkajIyJGwwJGgw"
          alt="Education"
          className="max-w-full h-auto object-fill"
        />
      </div>

      {/* Right Form */}
      <div className="w-1/2 p-6 overflow-hidden">
        <h2 className="text-3xl font-semibold mb-4">Education Details</h2>

        {/* Scrollable Form Container */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-h-[100vh] overflow-y-auto pr-2"
          ref={scrollContainerRef}
        >
          {educationList.map((education, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow space-y-4 border"
              ref={index === educationList.length - 1 ? lastEducationRef : null}
            >
              {/* Delete Button */}
              {educationList.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDeleteEducation(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                  title="Remove this education"
                >
                  ✕
                </button>
              )}

              <input
                type="text"
                name="schoolName"
                placeholder="School/College Name"
                value={education.schoolName}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                name="fieldOfStudy"
                placeholder="Field of Study"
                value={education.fieldOfStudy}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={education.location}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex space-x-4">
                <input
                  type="month"
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-1/2 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="month"
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-1/2 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <select
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Degree</option>
                {degreeOptions.map((deg) => (
                  <option key={deg} value={deg}>
                    {deg}
                  </option>
                ))}
              </select>

              <textarea
                name="description"
                placeholder="Description"
                value={education.description}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded resize-y min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Add More Button */}
          <button
            type="button"
            onClick={handleAddEducation}
            className="px-5 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            + Add More Education
          </button>

          {/* Submit & Skip */}
          <div className="flex space-x-4 w-full pt-3">
            <button
              type="submit"
              className="px-6 py-2 w-1/2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="px-6 py-2 w-1/2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
