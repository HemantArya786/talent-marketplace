import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

const CompanyFormPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    number: "",
    email: "",
    summary: "",
    about: "",
    activity: "",
    skills: [""],
    socialLinks: [""],
    companySize: "",
    founder: "",
    headOffice: "",
    industry: "",
    website: "",
    companyProfileImage: null as File | null,
    companyProfileImagePreview: null as string | null,
    companyCoverImage: null as File | null,
    companyCoverImagePreview: null as string | null,
  });

  const handleChange = (field: string, index: number | null = null) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (index !== null) {
      const updatedList = [...formData[field as keyof typeof formData] as string[]];
      updatedList[index] = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: updatedList }));
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

  const handleImageUpload = (field: "companyProfileImage" | "companyCoverImage") => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [field]: file,
        [`${field}Preview`]: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Company Data:", formData);
    alert("Company form submitted!");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card text-foreground shadow-xl rounded-3xl w-full max-w-4xl p-10 animate-in fade-in duration-700 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Company Listing Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { name: "companyName", label: "Company Name" },
            { name: "location", label: "Location" },
            { name: "number", label: "Contact Number" },
            { name: "email", label: "Email" },
            { name: "companySize", label: "Company Size" },
            { name: "founder", label: "Founder" },
            { name: "headOffice", label: "Head Office" },
            { name: "industry", label: "Industry" },
            { name: "website", label: "Website" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium">{label}</label>
              <input
                name={name}
                value={formData[name as keyof typeof formData] as string}
                onChange={handleChange(name)}
                placeholder={`Enter ${label}`}
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}

          {[
            { name: "summary", label: "Summary" },
            { name: "about", label: "About Company" },
            { name: "activity", label: "Activity on This Job" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium">{label}</label>
              <textarea
                name={name}
                value={formData[name as keyof typeof formData] as string}
                onChange={handleChange(name)}
                rows={3}
                placeholder={`Enter ${label}`}
                className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
              />
            </div>
          ))}

          {/* Profile Image */}
          <div>
            <label className="block mb-1 text-sm font-medium">Company Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload("companyProfileImage")}
            />
            {formData.companyProfileImagePreview && (
              <img
                src={formData.companyProfileImagePreview}
                alt="Profile Preview"
                className="mt-2 w-24 h-24 rounded-full object-cover border border-muted"
              />
            )}
          </div>

          {/* Cover Image */}
          <div>
            <label className="block mb-1 text-sm font-medium">Company Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload("companyCoverImage")}
            />
            {formData.companyCoverImagePreview && (
              <img
                src={formData.companyCoverImagePreview}
                alt="Cover Preview"
                className="mt-2 w-full max-h-40 object-cover rounded-md border border-muted"
              />
            )}
          </div>

          {/* Skills and Social Links */}
          {["skills", "socialLinks"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-medium capitalize">
                {field === "skills" ? "Skills & Expertise" : "Social Media Links"}
              </label>
              {(formData[field as keyof typeof formData] as string[]).map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={handleChange(field, index)}
                    placeholder={`Enter ${field === "skills" ? "skill" : "link"}`}
                    className="flex-1 px-4 py-2 rounded-md bg-muted text-foreground border border-input placeholder:text-muted-foreground"
                  />
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
                <PlusCircle size={18} /> Add {field === "skills" ? "Skill" : "Link"}
              </button>
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm"
          >
            Submit Company Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyFormPage;
