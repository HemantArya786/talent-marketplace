import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { AutoCloseModal } from "@/lib/Modal"; // Import the modal

const socialPlatforms = ["LINKEDIN", "GITHUB", "PORTFOLIO", "INSTAGRAM", "TWITTER"];

const ProfileImageUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const [socialLinks, setSocialLinks] = useState([{ socialType: "", url: "" }]);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const navigate = useNavigate();
  const { userId } = useParams();

  const handleImageChange = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    try {
      const formDataImage = new FormData();
      formDataImage.append("image", file);

      const res = await fetch("http://localhost:3000/api/upload-image", {
        method: "POST",
        body: formDataImage,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const imageUrl = data.imageUrl;

      if (type === "profile") {
        setProfileImage(file);
        setProfilePreview(preview);
        setProfileImageUrl(imageUrl);
      } else if (type === "cover") {
        setCoverImage(file);
        setCoverPreview(preview);
        setCoverImageUrl(imageUrl);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setModalMessage("Failed to upload image.");
      setModalType("error");
      setShowModal(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });

      const resData = await res.json();

      setProfilePreview(resData.userProfileImageURL);
      setCoverPreview(resData.backgroundImageURL);
      setSocialLinks(resData.socials);
    };

    fetchData();
  }, [userId]);

  const handleSocialChange = (index, field, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = value;
    setSocialLinks(updatedLinks);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { socialType: "", url: "" }]);
  };

  const removeSocialLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userProfileImageURL: profileImageUrl,
      backgroundImageURL: coverImageUrl,
      socials: socialLinks,
    };

    try {
      const res = await axios.put(`http://localhost:3000/api/users/${userId}`, payload);

      setModalMessage("Images and Social links added successfully!");
      setModalType("success");
      setShowModal(true);

      setTimeout(() => {
        navigate(`/developer/category/${userId}`);
      }, 2000);
    } catch (err) {
      console.error("Unable to post the data", err);
      setModalMessage("Failed to submit data.");
      setModalType("error");
      setShowModal(true);
    }
  };

  const handleSkip = () => {
    navigate(`/developer/category/${userId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Upload Your Images
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
                  onChange={(e) => handleImageChange(e, "cover")}
                  className="hidden"
                />
              </label>
            </div>

            {/* Profile Overlap */}
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
                    onChange={(e) => handleImageChange(e, "profile")}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-3">Social Media Links</h3>
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-3 mb-3 items-center"
              >
                <select
                  value={link.socialType}
                  onChange={(e) => handleSocialChange(index, "socialType", e.target.value)}
                  className="border rounded px-3 py-2 flex-1"
                >
                  <option value="">Select Platform</option>
                  {socialPlatforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>

                <input
                  type="url"
                  placeholder="https://example.com"
                  value={link.url}
                  onChange={(e) => handleSocialChange(index, "url", e.target.value)}
                  className="border rounded px-3 py-2 flex-1"
                />
                {socialLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSocialLink(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSocialLink}
              className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              + Add Another
            </button>
          </div>

          {/* Submit / Skip Buttons */}
          <div className="flex w-1/2 mt-6 flex-col md:flex-row gap-4">
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

        {/* Right Image Panel */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.ctfassets.net/aq13lwl6616q/2XTr5hIUZ07eh6jDEcfgpP/cc11bd45cb93f9e42594ab6be3dac979/Become_a__one_line___3_.jpg?w=800&h=450&q=50&fm=webp&bg=transparent"
            alt="Side Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* AutoClose Modal */}
      {showModal && (
        <AutoCloseModal
          type={modalType}
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProfileImageUpload;
