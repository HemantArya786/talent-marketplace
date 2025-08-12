import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, FileText, ArrowRightCircle } from "lucide-react";
import { BASE_API } from "@/lib/utils";

const ResumeUpload = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!resumeFile) {
      alert("Please upload a resume before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const response = await fetch(`${BASE_API}/api/parser/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload resume.");

      const data = await response.json();
      console.log("Extracted Resume Text:", data.text);
      alert("Resume submitted successfully! Check console for extracted data.");
    } catch (err) {
      console.error("Upload error:", err);
      alert("There was an error uploading the resume.");
    }
  };

  const handleManualFill = () => {
    navigate("/developer/manual-fillup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full animate-fade-in">
        <div className="text-center mb-6">
          <UploadCloud className="mx-auto h-12 w-12 text-blue-600 mb-2" />
          <h2 className="text-3xl font-extrabold text-gray-800">
            Resume Uploader
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Upload your resume or fill the form manually
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume (.pdf or .doc)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
          />
          {resumeFile && (
            <p className="mt-2 text-green-600 text-sm flex items-center gap-2">
              <FileText size={16} />
              {resumeFile.name}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md mb-4"
        >
          Submit Resume
        </button>

        <div className="relative flex items-center justify-center my-4">
          <span className="absolute bg-white px-2 text-gray-400 text-sm">
            or
          </span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleManualFill}
          className="w-full bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
        >
          <ArrowRightCircle size={20} />
          Fill Resume Form Manually
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
