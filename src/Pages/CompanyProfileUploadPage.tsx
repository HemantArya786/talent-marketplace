import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const CompanyProfileImageUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [socialLinks, setSocialLinks] = useState([{ title: "", url: "" }]);
  const navigate = useNavigate();

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleSocialChange = (index, field, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = value;
    setSocialLinks(updatedLinks);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { title: "", url: "" }]);
  };

  const removeSocialLink = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profileImage && !coverImage && socialLinks.every(l => !l.url)) {
      alert("Please select at least one image or social link before submitting.");
      return;
    }

    const formData = new FormData();
    if (profileImage) formData.append("profileImage", profileImage);
    if (coverImage) formData.append("coverImage", coverImage);
    formData.append("socialLinks", JSON.stringify(socialLinks));

    try {
      const response = await axios.put(
        "https://your-api-endpoint.com/company/images", // Replace with your API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload success:", response.data);
      alert("Data uploaded successfully!");
      navigate("/next-page");
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Upload failed. Please try again.");
    }
  };

  const handleSkip = () => {
    navigate("/next-page");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Left Upload Panel */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Upload Company Images
          </h2>

          {/* Cover Preview */}
          <div className="relative mb-16">
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow relative">
              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Cover image preview
                </div>
              )}
              <label className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-1 shadow cursor-pointer transition">
                <CameraIcon className="h-5 w-5 text-gray-600" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Profile Image Overlapping */}
            <div className="absolute -bottom-16 left-[100px] transform -translate-x-1/2">
              <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-200">
                {profilePreview ? (
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Profile image
                  </div>
                )}
                <label className="absolute bottom-[10px] right-[20px] bg-white/80 hover:bg-white rounded-full p-1 shadow cursor-pointer transition">
                  <CameraIcon className="h-4 w-4 text-gray-600" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
            {socialLinks.map((link, index) => (
              <div key={index} className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Title (e.g., LinkedIn)"
                  value={link.title}
                  onChange={(e) =>
                    handleSocialChange(index, "title", e.target.value)
                  }
                  className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="url"
                  placeholder="URL (e.g., https://linkedin.com/...)"
                  value={link.url}
                  onChange={(e) =>
                    handleSocialChange(index, "url", e.target.value)
                  }
                  className="w-2/3 border border-gray-300 rounded-md px-3 py-2"
                />
                {socialLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSocialLink(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-md"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSocialLink}
              className="text-blue-600 hover:underline"
            >
              + Add More
            </button>
          </div>

          {/* Buttons */}
          <div className="flex w-1/2 mt-8 flex-col md:flex-row gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-md"
            >
              Skip
            </button>
          </div>
        </div>

        {/* Right Image Display */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.ctfassets.net/aq13lwl6616q/2XTr5hIUZ07eh6jDEcfgpP/cc11bd45cb93f9e42594ab6be3dac979/Become_a__one_line___3_.jpg?w=800&h=450&q=50&fm=webp&bg=transparent"
            alt="Side Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileImageUpload;
