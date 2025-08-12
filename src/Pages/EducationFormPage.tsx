import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AutoCloseModal } from '@/lib/Modal';
import { BASE_API } from '@/lib/utils';

const degreeOptions = ['SSC', '12th/Intermediate', 'Bachelors', 'Masters', 'Others'];

const EducationForm = () => {

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success")

  const [educationList, setEducationList] = useState([
    {
      _id: '',
      instituteName: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const scrollContainerRef = useRef(null);
  const lastEducationRef = useRef(null);
  const navigate = useNavigate();
  const { userId } = useParams()

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
        _id: '',
        instituteName: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const handleDeleteEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/users/${userId}`);
        const data = await res.json();

        if (Array.isArray(data.education) && data.education.length > 0) {
          setEducationList(data.education);
        }
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    if (lastEducationRef.current) {
      lastEducationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [educationList.length]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requests = educationList.map((edu) => {
        const education = { ...edu };

        if (!education._id) delete education._id;

        if (education._id) {
          return axios.put(
            `${BASE_API}/api/users/${userId}/educations/${education._id}`,
            education
          );

        }
        else {
          return axios.post(
            `${BASE_API}/api/users/${userId}/educations`,
            education
          );
        }
      });

      await Promise.all(requests);

      setModalMessage("Education details saved successfully!");
      setShowModal(true);
      setModalType("success")

      setTimeout(() => {
        setShowModal(false);
        navigate(`/developer/profile-image/${userId}`);
      }, 2000);

    } catch (error) {
      console.error("Error submitting education details:", error);

      setModalMessage("Failed to submit education details.");
      setModalType("error")
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);

    }
  };

  const handleSkip = () => {
    navigate(`/developer/profile-image/${userId}`);
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

      {showModal && (
        <AutoCloseModal
          type={modalType}
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}

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
                name="instituteName"
                placeholder="School/College Name"
                value={education.instituteName}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

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

              <input
                type="text"
                name="fieldOfStudy"
                placeholder="Field of Study"
                value={education.fieldOfStudy}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex space-x-4">
                <input
                  type="month"
                  name="startDate"
                  value={education.startDate.slice(0, 7)}
                  onChange={(e) => handleChange(index, e)}
                  className="w-1/2 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="month"
                  name="endDate"
                  value={education.endDate.slice(0, 7)}
                  onChange={(e) => handleChange(index, e)}
                  className="w-1/2 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

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
              type="button"
              onClick={handleSkip}
              className="px-6 py-2 w-1/2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Skip
            </button>

            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 w-1/2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
