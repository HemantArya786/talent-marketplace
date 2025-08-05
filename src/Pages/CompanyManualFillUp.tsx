import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialClientDetails = () => ({
  clientName: "",
  clientSize: "",
  industry: "",
  socials: {
    linkedin: "",
    portfolio: "",
    instagram: "",
    twitter: "",
  },
  clientType: "",
  description: "",
  clientProfileImageURL: "",
  clientBackgroundImageURL: "",
});

const client = {
  name: "",
  email: "",
  phone: "",
  location: "",
  clientDetails: [initialClientDetails()],
}

const CompanyFormPage = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({ client });

  // MAIN FIELDS CHANGE HANDLER
  const handleChange =
    (field: string) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      };

  // CLIENT DETAILS FIELD HANDLERS
  const handleClientFieldChange =
    (index: number, field: string) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const updated = [...formData.clientDetails];
        updated[index][field] = e.target.value;
        setFormData((prev) => ({ ...prev, clientDetails: updated }));
      };

  const handleClientSocialChange =
    (index: number, social: string) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const updated = [...formData.clientDetails];
        updated[index].socials[social] = e.target.value;
        setFormData((prev) => ({ ...prev, clientDetails: updated }));
      };

  const handleClientTypeChange =
    (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const updated = [...formData.clientDetails];
      updated[index].clientType = e.target.value;
      setFormData((prev) => ({ ...prev, clientDetails: updated }));
    };

  const addClientDetail = () => {
    setFormData((prev) => ({
      ...prev,
      clientDetails: [...prev.clientDetails, initialClientDetails()],
    }));
  };

  const removeClientDetail = (index: number) => {
    const updated = [...formData.clientDetails];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, clientDetails: updated }));
  };

  // IMAGE URL fields for clientDetails
  const handleClientImageURLChange =
    (
      index: number,
      field: "clientProfileImageURL" | "clientBackgroundImageURL"
    ) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const updated = [...formData.clientDetails];
        updated[index][field] = e.target.value;
        setFormData((prev) => ({ ...prev, clientDetails: updated }));
      };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        navigate(`/company/portfolio/${data.clientId}`);
        console.log(data.data);
      }

      if (!res.ok) throw new Error("Failed to submit form");
      alert("Form submitted successfully!")

    }
    catch (err) {
      alert("Error submitting form");
      console.error(err);
    }

    console.log("Company Data:", formData);
    alert("Company form submitted!");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card text-foreground shadow-xl rounded-3xl w-full max-w-4xl p-10 animate-in fade-in duration-700 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Company & Client Listing Form
        </h2>

        <form className="space-y-6">
          {/* MAIN FIELDS */}
          {[
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
            { name: "phone", label: "Phone" },
            { name: "location", label: "Location" },
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

          {/* CLIENT DETAILS */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Client Details</h3>
            {formData.client.clientDetails.map((client, idx) => (
              <div
                key={idx}
                className="border border-muted p-4 rounded-lg mb-4 relative bg-muted/30"
              >
                <button
                  type="button"
                  onClick={() => removeClientDetail(idx)}
                  className="absolute top-2 right-2 text-destructive hover:text-red-700"
                  disabled={formData.client.clientDetails.length === 1}
                  title="Remove Client"
                >
                  <Trash2 size={18} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={client.clientName}
                      onChange={handleClientFieldChange(idx, "clientName")}
                      placeholder="Client Name"
                      className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="clientSize" className="block mb-2 font-medium text-gray-700">
                      Client Size
                    </label>
                    <select
                      id="clientSize"
                      name="clientSize"
                      className="border rounded px-3 py-2 w-full"
                      value={client.clientSize}
                      onChange={handleClientFieldChange(idx, "clientSize")}
                    >
                      <option value="">Select client size</option>
                      <option value="1-9">1-9</option>
                      <option value="10-25">10-25</option>
                      <option value="26-50">26-50</option>
                      <option value="50+">50+</option>
                      <option value="100+">100+</option>
                    </select>

                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Industry
                    </label>
                    <input
                      type="text"
                      value={client.industry}
                      onChange={handleClientFieldChange(idx, "industry")}
                      placeholder="Industry"
                      className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Client Type
                    </label>
                    <select
                      value={client.clientType}
                      onChange={handleClientTypeChange(idx)}
                      className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                    >
                      <option value="">Select Type</option>
                      <option value="company">Company</option>
                      <option value="agency">Agency</option>
                      <option value="individual">Individual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Profile Image URL
                    </label>
                    <input
                      type="text"
                      value={client.clientProfileImageURL}
                      onChange={handleClientImageURLChange(
                        idx,
                        "clientProfileImageURL"
                      )}
                      placeholder="Profile Image URL"
                      className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Background Image URL
                    </label>
                    <input
                      type="text"
                      value={client.clientBackgroundImageURL}
                      onChange={handleClientImageURLChange(
                        idx,
                        "clientBackgroundImageURL"
                      )}
                      placeholder="Background Image URL"
                      className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block mb-1 text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={client.description}
                    onChange={handleClientFieldChange(idx, "description")}
                    placeholder="Client Description"
                    className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                  />
                </div>

                <div className="mt-3">
                  <label className="block mb-1 text-sm font-medium">
                    Social Media Links
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["linkedin", "portfolio", "instagram", "twitter"].map(
                      (social) => (
                        <div key={social}>
                          <input
                            type="text"
                            value={client.socials[social]}
                            onChange={handleClientSocialChange(idx, social)}
                            placeholder={`Enter ${social.charAt(0).toUpperCase() + social.slice(1)
                              } URL`}
                            className="w-full px-4 py-2 rounded-md bg-muted text-foreground border border-input"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* <button
              type="button"
              onClick={addClientDetail}
              className="mt-2 text-sm text-primary flex items-center gap-1 hover:underline"
            >
              <PlusCircle size={18} /> Add Another Client
            </button> */}
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm"
            onClick={handleSubmit}
          >
            Submit Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyFormPage;
