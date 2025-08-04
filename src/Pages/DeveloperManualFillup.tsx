import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManualFormPage = () => {


  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [imageURL, setImageURL] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    title: "",
    userProfileImageURL: "",
    backgroundImageURL: "",
    location: { country: "", city: "", timezone: "" },
    socialLinks: [{ socialType: "", URL: "" }],
    categories: [""],
    skills: [""],
    projects: [{ title: "", techStack: [""], projectLiveURL: "", description: "" }],
    experience: [{ title: "", companyName: "", startDate: "", endDate: "", Remote: false, currentlyWorking: false, location: "", description: "" }],
    education: [{ instituteName: "", degree: "", fieldOfStudy: "", startDate: "", endDate: "", description: "" }],
    language: [""],
    charges: { userRate: "", finalRate: "" },
    training: [{ title: "", provider: "", location: "", startDate: "", endDate: "", description: "" }],
    accomplishment: "",
    extraCurricularActivities: "",
  })

  const navigate = useNavigate();


  //!PROFILE/COVER Img S3 URL link
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, type) => {

    const file = e.target.files?.[0]
    if (!file) return;

    const preview = URL.createObjectURL(file)

    try {
      const formDataImage = new FormData()
      formDataImage.append("image", file)

      const res = await fetch("http://localhost:3000/api/upload-image", {
        method: "POST",
        body: formDataImage,
      })

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const imageUrl = data.url;

      if (type === "profile") {

        setFormData((prev) => ({
          ...prev,
          profilePic: file,
          profilePicPreview: preview,
          userProfileImageURL: imageUrl,
        }))
      }
      else if (type === "cover") {
        setFormData((prev) => ({
          ...prev,
          coverImage: file,
          coverImagePreview: preview,
          backgroundImageURL: imageUrl,
        }));
      } else {
        console.log("failed to set the URL.");
      }

    } catch (error) {
      console.error("Error uploading profile image:", error);
      alert("Failed to upload profile picture.");
    }
  }


  const handleChange = (field: string, index: number | null = null) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

      if (index !== null) {
        const updatedList = [
          ...(formData[field as keyof typeof formData] as string[]),
        ];
        updatedList[index] = e.target.value;
        setFormData((prev) => ({ ...prev, [field]: updatedList }));
      }
      else {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      }
    };

  const addField = (field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field as keyof typeof prev] as string[]), ""],
    }));
  };

  const removeField = (field: string, index: number) => {
    const updatedList = [
      ...(formData[field as keyof typeof formData] as string[]),
    ];
    updatedList.splice(index, 1);
    setFormData((prev) => ({ ...prev, [field]: updatedList }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to submit form");

      alert("Form submitted successfully!");
      console.log(formData);
    }
    catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
    navigate("/developer/portfolio");
    alert("Form submitted!");
  }

  const handleSocialLinkChange =
    (index: number, key: "Social - Type" | "link") =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLinks = [...formData.socialLinks];
        updatedLinks[index][key] = e.target.value;
        setFormData((prev) => ({ ...prev, socialLinks: updatedLinks }));
      };

  const handleEducationChange =
    (index: number, key: keyof (typeof formData.education)[0]) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const updated = [...formData.education];
        updated[index][key] = e.target.value;
        setFormData((prev) => ({ ...prev, education: updated }));
      };

  const handleTrainingChange =
    (index: number, key: keyof (typeof formData.trainings)[0]) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => {
        const updated = [...formData.trainings];
        if (key === "currentlyPursuing") {
          updated[index][key] = (e.target as HTMLInputElement).checked;
        } else {
          updated[index][key] = e.target.value;
        }
        setFormData((prev) => ({ ...prev, trainings: updated }));
      };

  const handleProjectChange =
    (index: number, key: keyof (typeof formData.projects)[0]) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => {
        const updated = [...formData.projects];
        if (key === "currentlyWorking") {
          updated[index][key] = (e.target as HTMLInputElement).checked;
        } else {
          updated[index][key] = e.target.value;
        }
        setFormData((prev) => ({ ...prev, projects: updated }));
      };

  const handleExperienceChange =
    (index: number, key: keyof (typeof formData.experience)[0]) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const updated = [...formData.experience];
        if (key === "currentlyWorking") {
          updated[index][key] = (e.target as HTMLInputElement).checked;
        } else {
          updated[index][key] = e.target.value;
        }
        setFormData((prev) => ({ ...prev, experience: updated }));
      };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card text-foreground shadow-xl rounded-3xl w-full max-w-4xl p-10 animate-in fade-in duration-700 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          User Details Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "mobile", "title"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>

              <input
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleChange(field)}
                placeholder={
                  field === "mobile" ? "+91 98765-43210" : `Enter ${field}`
                }
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}

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

          <div>
            <label className="block mb-1 text-sm font-medium">
              Professional Summary
            </label>
            <textarea
              value={formData.bio}
              onChange={handleChange("bio")}
              rows={3}
              placeholder="Brief summary of your background"
              className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
            />
          </div>

          {["skills"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>

              {(formData[field as keyof typeof formData] as string[]).map(
                (item, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    {field === "projects" ? (
                      <textarea
                        rows={2}
                        value={item}
                        onChange={handleChange(field, index)}
                        placeholder={`Project ${index + 1}`}
                        className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                      />
                    ) : (
                      <input
                        type="text"
                        value={item}
                        onChange={handleChange(field, index)}
                        placeholder={`Enter ${field.slice(0, -1)}`}
                        className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeField(field, index)}
                      className="text-destructive hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                )
              )}
              <button
                type="button"
                onClick={() => addField(field)}
                className="mt-1 text-sm text-primary flex items-center gap-1 hover:underline"
              >
                <PlusCircle size={18} /> Add {field.slice(0, -1)}
              </button>
            </div>
          ))}

          {/* Projects Section */}
          <div>
            <label className="block mb-1 text-sm font-medium">Projects</label>
            {formData.projects.map((project, index) => (
              <div
                key={index}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name || ""}
                  onChange={handleProjectChange(index, "name")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />

                <textarea
                  placeholder="Description"
                  rows={3}
                  value={project.description || ""}
                  onChange={handleProjectChange(index, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder="Start Date"
                    value={project.startDate}
                    onChange={handleProjectChange(index, "startDate")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="date"
                    placeholder="End Date"
                    value={project.endDate}
                    onChange={handleProjectChange(index, "endDate")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                    disabled={project.currentlyWorking}
                  />
                </div>

                {/* <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={project.currentlyWorking}
                    onChange={handleProjectChange(index, "currentlyWorking")}
                  />
                  <span className="text-sm">Currently Working</span>
                </label> */}

                <input
                  type="url"
                  placeholder="Project LiveURL (e.g., GitHub or Live URL)"
                  value={project.projectLiveURL}
                  onChange={handleProjectChange(index, "link")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />

                {/* <div>
                  <label className="block text-sm mb-1">
                    Project Thumbnail
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProjectThumbnailChange(index)}
                  />
                  {project.thumbnailPreview && (
                    <img
                      src={project.thumbnailPreview}
                      alt="Thumbnail Preview"
                      className="mt-2 w-32 h-20 object-cover rounded-md border"
                    />
                  )}
                </div> */}

                <button
                  type="button"
                  onClick={() => removeField("projects", index)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Project
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => addField("projects")}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Project
            </button>
          </div>

          {/* Education Section */}
          <div>
            <label className="block mb-1 text-sm font-medium">Education</label>
            {formData.education.map((edu, index) => (
              <div
                key={index}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="College Name"
                    value={edu.college}
                    onChange={handleEducationChange(index, "college")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={handleEducationChange(index, "degree")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Stream"
                    value={edu.stream}
                    onChange={handleEducationChange(index, "stream")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Performance Score (e.g. 8.5 CGPA)"
                    value={edu.score}
                    onChange={handleEducationChange(index, "score")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="month"
                    placeholder="Start Year"
                    value={edu.startYear}
                    onChange={handleEducationChange(index, "startYear")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="month"
                    placeholder="End Year"
                    value={edu.endYear}
                    onChange={handleEducationChange(index, "endYear")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeField("education", index)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Education
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("education")}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Education
            </button>
          </div>

          {/* Social Links Section */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Social Media
            </label>
            {formData.socialLinks.map((link, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Platform Name (e.g., GitHub)"
                  value={link.name}
                  onChange={handleSocialLinkChange(index, "name")}
                  className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="https://"
                  value={link.link}
                  onChange={handleSocialLinkChange(index, "link")}
                  className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => removeField("socialLinks", index)}
                  className="text-destructive hover:text-red-700 self-center"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("socialLinks")}
              className="mt-1 text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Social Link
            </button>
          </div>

          {/* Experience Section */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Professional Experience
            </label>
            {formData.experience.map((exp, index) => (
              <div
                key={index}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Organization"
                    value={exp.organization}
                    onChange={handleExperienceChange(index, "organization")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Profile / Title"
                    value={exp.profile}
                    onChange={handleExperienceChange(index, "profile")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Designation (e.g., Software Engineer)"
                  value={exp.designation}
                  onChange={handleExperienceChange(index, "designation")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />

                <textarea
                  rows={3}
                  placeholder="Job Description"
                  value={exp.description}
                  onChange={handleExperienceChange(index, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder="Start Date"
                    value={exp.startDate}
                    onChange={handleExperienceChange(index, "startDate")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="date"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={handleExperienceChange(index, "endDate")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                    disabled={exp.currentlyWorking}
                  />
                </div>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={exp.currentlyWorking}
                    onChange={handleExperienceChange(index, "currentlyWorking")}
                  />
                  <span className="text-sm">Currently Working</span>
                </label>

                <button
                  type="button"
                  onClick={() => removeField("experience", index)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Experience
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("experience")}
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Experience
            </button>
          </div>

          {["accomplishment, extraCurricularActivities"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium">
                {field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <textarea
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleChange(field)}
                rows={3}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}


          {/* ! Trainings Section */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Training Programs
            </label>
            {formData.training.map((training, index) => (
              <div
                key={index}
                className="border p-4 mb-4 rounded-lg bg-muted space-y-2"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Training Program Name"
                    value={training.programName}
                    onChange={handleTrainingChange(index, "programName")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Organization"
                    value={training.organization}
                    onChange={handleTrainingChange(index, "organization")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Location"
                    value={training.location}
                    onChange={handleTrainingChange(index, "location")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <select
                    value={training.mode}
                    onChange={handleTrainingChange(index, "mode")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select Mode</option>
                    <option value="Online">Online</option>
                    <option value="Regular">Regular</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="month"
                    placeholder="Start Year"
                    value={training.startYear}
                    onChange={handleTrainingChange(index, "startYear")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  />
                  <input
                    type="month"
                    placeholder="End Year"
                    value={training.endYear}
                    onChange={handleTrainingChange(index, "endYear")}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                    disabled={training.currentlyPursuing}
                  />
                </div>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={training.currentlyPursuing}
                    onChange={handleTrainingChange(index, "currentlyPursuing")}
                  />
                  <span className="text-sm">Currently Pursuing</span>
                </label>

                <textarea
                  rows={3}
                  placeholder="Description"
                  value={training.description}
                  onChange={handleTrainingChange(index, "description")}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />

                <button
                  type="button"
                  onClick={() => removeField("trainings", index)}
                  className="text-destructive hover:text-red-700 mt-2 flex items-center gap-1"
                >
                  <Trash2 size={20} /> Remove Training
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => addField("trainings")}
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
