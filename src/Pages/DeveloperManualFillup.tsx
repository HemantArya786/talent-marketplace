import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import {  useNavigate } from "react-router-dom";

const ManualFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    summary: "",
    profilePic: null,
    coverImage: null,
    profilePicPreview: null,
    coverImagePreview: null,
    skills: [""],
    education: [""],
    socialLinks: [""],
    portfolioLinks: [""],
    experience: [""],
    projects: [""],
    accomplishments: "",
    extracurricular: "",
    trainings: "",
  });
    const navigate = useNavigate();


  const handleChange = (field: string, index: number | null = null) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (index !== null) {
      const updatedList = [...formData[field as keyof typeof formData] as string[]];
      updatedList[index] = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: updatedList }));
    } else if (e.target.type === "file") {
      // Handled separately in file input section
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };

  const addField = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: [...(prev[field as keyof typeof prev] as string[]), ""] }));
  };

  const removeField = (field: string, index: number) => {
    const updatedList = [...(formData[field as keyof typeof formData] as string[])];
    updatedList.splice(index, 1);
    setFormData((prev) => ({ ...prev, [field]: updatedList }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
            {navigate("/developer/portfolio")}

  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card text-foreground shadow-xl rounded-3xl w-full max-w-4xl p-10 animate-in fade-in duration-700 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Manual Resume Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "mobile"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleChange(field)}
                placeholder={field === "mobile" ? "+91 98765-43210" : `Enter ${field}`}
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 text-sm font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setFormData((prev) => ({
                  ...prev,
                  profilePic: file,
                  profilePicPreview: file ? URL.createObjectURL(file) : null,
                }));
              }}
            />
            {formData.profilePicPreview && (
              <img
                src={formData.profilePicPreview as string}
                alt="Profile Preview"
                className="mt-2 w-24 h-24 rounded-full object-cover border border-muted"
              />
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setFormData((prev) => ({
                  ...prev,
                  coverImage: file,
                  coverImagePreview: file ? URL.createObjectURL(file) : null,
                }));
              }}
            />
            {formData.coverImagePreview && (
              <img
                src={formData.coverImagePreview as string}
                alt="Cover Preview"
                className="mt-2 w-full max-h-40 object-cover rounded-md border border-muted"
              />
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Professional Summary</label>
            <textarea
              value={formData.summary}
              onChange={handleChange("summary")}
              rows={3}
              placeholder="Brief summary of your background"
              className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
            />
          </div>

          {["projects", "skills", "education", "experience", "socialLinks", "portfolioLinks"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              {(formData[field as keyof typeof formData] as string[]).map((item, index) => (
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
              ))}
              <button
                type="button"
                onClick={() => addField(field)}
                className="mt-1 text-sm text-primary flex items-center gap-1 hover:underline"
              >
                <PlusCircle size={18} /> Add {field.slice(0, -1)}
              </button>
            </div>
          ))}

          {["accomplishments", "extracurricular", "trainings"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium">
                {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
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