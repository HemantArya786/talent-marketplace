import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Initial object templates for each array-of-object field
const initialProject = {
  title: "",
  techStack: [""],
  projectLiveURL: "",
  description: "",
};
const initialEducation = {
  instituteName: "",
  degree: "",
  fieldOfStudy: "",
  startDate: "",
  endDate: "",
  description: "",
};
const initialExperience = {
  title: "",
  companyName: "",
  startDate: "",
  endDate: "",
  Remote: false,
  currentlyWorking: false,
  location: "",
  description: "",
};
const initialTraining = {
  title: "",
  provider: "",
  location: "",
  startDate: "",
  endDate: "",
  mode: "",
  currentlyPursuing: false,
  description: "",
};
const initialSocialLink = { socialType: "", URL: "" };

const ManualFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    bio: "",
    title: "",
    userProfileImageURL: "",
    backgroundImageURL: "",
    location: { country: "", city: "", timezone: "" },
    socialLinks: [{ ...initialSocialLink }],
    categories: [""],
    skills: [""],
    projects: [{ ...initialProject }],
    experience: [{ ...initialExperience }],
    education: [{ ...initialEducation }],
    language: [""],
    charges: { userRate: "", finalRate: "" },
    training: [{ ...initialTraining }],
    accomplishment: "",
    extraCurricularActivities: "",
  });

  const navigate = useNavigate();

  // --- Simple string list fields (skills, categories, language) ---
  const handleStringListChange =
    (field: "skills" | "categories" | "language", idx: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updated = [...(formData[field] as string[])];
      updated[idx] = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: updated }));
    };
  const addStringField = (field: "skills" | "categories" | "language") =>
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ""],
    }));
  const removeStringField = (
    field: "skills" | "categories" | "language",
    idx: number
  ) =>
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== idx),
    }));

  // --- Projects ---
  const addProject = () =>
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...initialProject }],
    }));
  const removeProject = (idx: number) =>
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== idx),
    }));
  const handleProjectChange =
    (index: number, key: keyof typeof initialProject) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const updated = [...formData.projects];
      updated[index][key] = e.target.value;
      setFormData((prev) => ({ ...prev, projects: updated }));
    };

  // --- Education ---
  const addEducation = () =>
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { ...initialEducation }],
    }));
  const removeEducation = (idx: number) =>
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== idx),
    }));
  const handleEducationChange =
    (index: number, key: keyof typeof initialEducation) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updated = [...formData.education];
      updated[index][key] = e.target.value;
      setFormData((prev) => ({ ...prev, education: updated }));
    };

  // --- Experience ---
  const addExperience = () =>
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...initialExperience }],
    }));
  const removeExperience = (idx: number) =>
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== idx),
    }));
  const handleExperienceChange =
    (index: number, key: keyof typeof initialExperience) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const updated = [...formData.experience];
      if (key === "currentlyWorking" || key === "Remote") {
        updated[index][key] = (e.target as HTMLInputElement).checked;
      } else {
        updated[index][key] = e.target.value;
      }
      setFormData((prev) => ({ ...prev, experience: updated }));
    };

  // --- Training ---
  const addTraining = () =>
    setFormData((prev) => ({
      ...prev,
      training: [...prev.training, { ...initialTraining }],
    }));
  const removeTraining = (idx: number) =>
    setFormData((prev) => ({
      ...prev,
      training: prev.training.filter((_, i) => i !== idx),
    }));
  const handleTrainingChange =
    (index: number, key: keyof typeof initialTraining) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const updated = [...formData.training];
      if (key === "currentlyPursuing") {
        updated[index][key] = (e.target as HTMLInputElement).checked;
      } else {
        updated[index][key] = e.target.value;
      }
      setFormData((prev) => ({ ...prev, training: updated }));
    };

  // --- Social Links ---
  const addSocialLink = () =>
    setFormData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { ...initialSocialLink }],
    }));
  const removeSocialLink = (idx: number) =>
    setFormData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== idx),
    }));
  const handleSocialLinkChange =
    (index: number, key: keyof typeof initialSocialLink) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updated = [...formData.socialLinks];
      updated[index][key] = e.target.value;
      setFormData((prev) => ({ ...prev, socialLinks: updated }));
    };

  // --- Simple (non-list) field change ---
  const handleFieldChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  // --- IMAGE UPLOAD (your logic, unchanged) ---
  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "cover"
  ) => {
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
      const imageUrl = data.url;
      if (type === "profile") {
        setFormData((prev) => ({
          ...prev,
          userProfileImageURL: imageUrl,
        }));
      } else if (type === "cover") {
        setFormData((prev) => ({
          ...prev,
          backgroundImageURL: imageUrl,
        }));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }
  };

  // --- SUBMIT ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit form");
      alert("Form submitted successfully!");
      navigate("/developer/portfolio");
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  // --- RENDER FORM ---
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card text-foreground shadow-xl rounded-3xl w-full max-w-4xl p-10 animate-in fade-in duration-700 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          User Details Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* name, email, mobile, title */}
          {["name", "email", "mobile", "title"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleFieldChange(field as keyof typeof formData)}
                placeholder={
                  field === "mobile" ? "+91 98765-43210" : `Enter ${field}`
                }
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}

          {/* Profile Pic & Cover */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "profile")}
            />
            {formData.userProfileImageURL && (
              <img
                src={formData.userProfileImageURL as string}
                alt="Profile Preview"
                className="mt-2 w-24 h-24 rounded-full object-cover border border-muted"
              />
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "cover")}
            />
            {formData.backgroundImageURL && (
              <img
                src={formData.backgroundImageURL as string}
                alt="Cover Preview"
                className="mt-2 w-full max-h-40 object-cover rounded-md border border-muted"
              />
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Professional Summary
            </label>
            <textarea
              value={formData.bio}
              onChange={handleFieldChange("bio")}
              rows={3}
              placeholder="Brief summary of your background"
              className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
            />
          </div>

          {/* skills */}
          <div>
            <label className="block mb-1 text-sm font-medium capitalize">
              Skills
            </label>
            {formData.skills.map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={handleStringListChange("skills", idx)}
                  placeholder="Enter skill"
                  className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeStringField("skills", idx)}
                  className="text-destructive hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addStringField("skills")}
              className="mt-1 text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add skill
            </button>
          </div>

          {/* Projects */}
          <div>
            <label className="block mb-1 text-sm font-medium">Projects</label>
            {formData.projects.map((project, idx) => (
              <div
                key={idx}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={handleProjectChange(idx, "title")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <textarea
                  placeholder="Description"
                  rows={3}
                  value={project.description}
                  onChange={handleProjectChange(idx, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="url"
                  placeholder="Project Live URL"
                  value={project.projectLiveURL}
                  onChange={handleProjectChange(idx, "projectLiveURL")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeProject(idx)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Project
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addProject}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Project
            </button>
          </div>

          {/* Education */}
          <div>
            <label className="block mb-1 text-sm font-medium">Education</label>
            {formData.education.map((edu, idx) => (
              <div
                key={idx}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <input
                  type="text"
                  placeholder="Institute Name"
                  value={edu.instituteName}
                  onChange={handleEducationChange(idx, "instituteName")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={handleEducationChange(idx, "degree")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  value={edu.fieldOfStudy}
                  onChange={handleEducationChange(idx, "fieldOfStudy")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={edu.startDate}
                  onChange={handleEducationChange(idx, "startDate")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="month"
                  placeholder="End Date"
                  value={edu.endDate}
                  onChange={handleEducationChange(idx, "endDate")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <textarea
                  placeholder="Description"
                  rows={2}
                  value={edu.description}
                  onChange={handleEducationChange(idx, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeEducation(idx)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Education
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Education
            </button>
          </div>

          {/* Social Media Links */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Social Media
            </label>
            {formData.socialLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Platform/Type"
                  value={link.socialType}
                  onChange={handleSocialLinkChange(idx, "socialType")}
                  className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="https://..."
                  value={link.URL}
                  onChange={handleSocialLinkChange(idx, "URL")}
                  className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeSocialLink(idx)}
                  className="text-destructive hover:text-red-700 self-center"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSocialLink}
              className="mt-1 text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Social Link
            </button>
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Professional Experience
            </label>
            {formData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <input
                  type="text"
                  placeholder="Title"
                  value={exp.title}
                  onChange={handleExperienceChange(idx, "title")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.companyName}
                  onChange={handleExperienceChange(idx, "companyName")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={exp.location}
                  onChange={handleExperienceChange(idx, "location")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={exp.startDate}
                  onChange={handleExperienceChange(idx, "startDate")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="month"
                  placeholder="End Date"
                  value={exp.endDate}
                  onChange={handleExperienceChange(idx, "endDate")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  disabled={exp.currentlyWorking}
                />
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={exp.currentlyWorking}
                    onChange={handleExperienceChange(idx, "currentlyWorking")}
                  />
                  <span className="text-sm">Currently Working</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={exp.Remote}
                    onChange={handleExperienceChange(idx, "Remote")}
                  />
                  <span className="text-sm">Remote</span>
                </label>
                <textarea
                  placeholder="Description"
                  rows={2}
                  value={exp.description}
                  onChange={handleExperienceChange(idx, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeExperience(idx)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Experience
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Experience
            </button>
          </div>

          {/* Accomplishments, Extra Curricular */}
          {["accomplishment", "extraCurricularActivities"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium">
                {field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <textarea
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleFieldChange(field as keyof typeof formData)}
                rows={3}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}

          {/* Trainings */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Training Programs
            </label>
            {formData.training.map((training, idx) => (
              <div
                key={idx}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <input
                  type="text"
                  placeholder="Training Program Name"
                  value={training.title}
                  onChange={handleTrainingChange(idx, "title")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="text"
                  placeholder="Provider"
                  value={training.provider}
                  onChange={handleTrainingChange(idx, "provider")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={training.location}
                  onChange={handleTrainingChange(idx, "location")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <select
                  value={training.mode}
                  onChange={handleTrainingChange(idx, "mode")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Regular">Regular</option>
                </select>
                <input
                  type="month"
                  placeholder="Start Date"
                  value={training.startDate}
                  onChange={handleTrainingChange(idx, "startDate")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <input
                  type="month"
                  placeholder="End Date"
                  value={training.endDate}
                  onChange={handleTrainingChange(idx, "endDate")}
                  className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  disabled={training.currentlyPursuing}
                />
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={training.currentlyPursuing}
                    onChange={handleTrainingChange(idx, "currentlyPursuing")}
                  />
                  <span className="text-sm">Currently Pursuing</span>
                </label>
                <textarea
                  placeholder="Description"
                  rows={2}
                  value={training.description}
                  onChange={handleTrainingChange(idx, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeTraining(idx)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Training
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTraining}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Training Program
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm"
          >
            Submit Resume Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManualFormPage;
