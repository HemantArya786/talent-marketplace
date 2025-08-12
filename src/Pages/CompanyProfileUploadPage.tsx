import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { BASE_API } from "@/lib/utils";

const socialPlatforms = ["LINKEDIN", "GITHUB", "PORTFOLIO", "INSTAGRAM", "TWITTER"];

const CompanyProfileImageUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [socialLinks, setSocialLinks] = useState([{ socialType: "", url: "" }]);

  const navigate = useNavigate();
  const { clientId } = useParams();

  useEffect(() => {

    const fetchData = async () => {

      try {
        const res = await axios.get(`${BASE_API}/api/clients/${clientId}`);

        const responseData = await res.data;
        const data = responseData.clientDetails
        console.log(data);

        setProfilePreview(data.clientProfileImageURL);
        setCoverPreview(data.clientBackgroundImageURL)
        setSocialLinks(data.clientSocials);

      } catch (err) {
        console.error("Error fetching company data:", err);
      }
    };

    fetchData();
  }, [clientId]);

  // Unified image upload
  const handleImageChange = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`${BASE_API}/api/upload-image`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");

      const { imageUrl } = await res.json();

      if (type === "profile") {
        setProfileImage(file);
        setProfilePreview(preview);
        setProfileImageUrl(imageUrl);
      } else {
        setCoverImage(file);
        setCoverPreview(preview);
        setCoverImageUrl(imageUrl);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload image.");
    }
  };

  // Social links logic
  const handleSocialChange = (idx, field, val) => {
    const updated = [...socialLinks];
    updated[idx][field] = val;
    setSocialLinks(updated);
  };
  const addSocialLink = () => setSocialLinks([...socialLinks, { socialType: "", url: "" }]);
  const removeSocialLink = (idx) => setSocialLinks(socialLinks.filter((_, i) => i !== idx));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      clientProfileImageURL: profileImageUrl || profilePreview,
      clientBackgroundImageURL: coverImageUrl || coverPreview,
      clientSocials: socialLinks
    };

    try {
      const res = await axios.put(
        `${BASE_API}/api/clients/${clientId}/client-details`,
        payload
      );

      alert("Company details updated successfully!");
      navigate(`/company/portfolio/${clientId}`)
      console.log(res.data);
    }
    catch (error) {
      console.error("Error details:", error.response?.data);
      alert("Failed to submit client details.");
    }
  };

  // const handleSkip = () => navigate("/next-page");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold mb-6">Upload Company Images</h2>

          {/* Cover and Profile UI */}
          <div className="relative mb-20">
            {/* Cover */}
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow relative mb-20">
              {coverPreview ? (
                <img src={coverPreview} className="w-full h-full object-cover" alt="Cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Cover image preview
                </div>
              )}
              <label className="absolute top-3 right-3 ...">
                <CameraIcon className="h-5 w-5 text-gray-600" />
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => handleImageChange(e, "cover")} />
              </label>
            </div>

            {/* Profile */}
            <div className="absolute -bottom-16 left-[100px] transform -translate-x-1/2">
              <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 overflow-hidden">
                {profilePreview ? (
                  <img src={profilePreview} className="w-full h-full object-cover" alt="Profile" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Profile image
                  </div>
                )}
                <label className="absolute bottom-[10px] right-[20px] ...">
                  <CameraIcon className="h-4 w-4 text-gray-600" />
                  <input type="file" accept="image/*" className="hidden"
                    onChange={(e) => handleImageChange(e, "profile")} />
                </label>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-24">
            <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>

            {socialLinks.map((link, idx) => (

              <div key={idx} className="flex flex-col md:flex-row gap-3 mb-3 items-center">

                <select value={link.socialType}
                  onChange={(e) => handleSocialChange(idx, "socialType", e.target.value)}
                  className="border rounded px-3 py-2 flex-1">
                  <option value="">Select Platform</option>

                  {socialPlatforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}</option>
                  ))}
                </select>

                <input type="url" placeholder="https://example.com"
                  value={link.url}
                  onChange={(e) => handleSocialChange(idx, "url", e.target.value)}
                  className="border rounded px-3 py-2 flex-1" />

                {socialLinks.length > 1 && (
                  <button type="button" onClick={() => removeSocialLink(idx)}
                    className="text-red-500 hover:underline">Remove</button>
                )}
              </div>
            ))}
            <button type="button" onClick={addSocialLink}
              className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              + Add Another
            </button>
          </div>

          {/* Buttons */}
          <div className="flex w-1/2 mt-6 flex-col md:flex-row gap-4">
            <button onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
              Submit
            </button>
            {/* <button onClick={handleSkip}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md">
              Skip
            </button> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.ctfassets.net/aq13lwl6616q/2XTr5hIUZ07eh6jDEcfgpP/cc11bd45cb93f9e42594ab6be3dac979/Become_a__one_line___3_.jpg"
            alt="Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileImageUpload;
