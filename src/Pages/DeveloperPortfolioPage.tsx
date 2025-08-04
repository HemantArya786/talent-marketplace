import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Edit,
  Save,
  Trash2,
  Upload,
  Image,
} from "lucide-react";

type UserType = {
  name: string;
  location: string;
  email: string;
  phone: string;
  hourlyRate: string;
  about: string;
  education: { institution: string; degree: string; years: string }[];
  socials: { platform: string; url: string; icon: JSX.Element }[];
  projects: { name: string; description: string; url?: string }[];
  skills: string[];
  trainings: string[];
  accomplishments: string[];
  extracurricular: string[];
  github: string;
  profileImg: string;
  coverImg: string;
};

const initialUser: UserType = {
  name: "Name.",
  location: "New Delhi, India",
  email: "gmail@gmail.com",
  phone: "+91-XXXXXXXXXX",
  hourlyRate: "$8.00/hr",
  about:
    "Hi! I’m a full-stack JavaScript developer with a strong focus on building fast, responsive, and scalable web applications using React.js, Next.js, Node.js, and Express.js.",
  education: [
    {
      institution: "institution",
      degree: "degree",
      years: "2023 - 2025",
    },
    {
      institution: "CBSE",
      degree: "High School",
      years: "Completed",
    },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/xyz",
      icon: <Github />,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/xyz",
      icon: <Linkedin />,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/hemant_jsdev",
      icon: <Twitter />,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/hemant.codes",
      icon: <Instagram />,
    },
    {
      platform: "Portfolio Website",
      url: "https://hemantarya.dev",
      icon: <Globe />,
    },
  ],
  projects: [
    {
      name: "Visual(AI)ze",
      description: "Where MT Agents Come Alive – Visual(AI)ze Features",
      url: "",
    },
    {
      name: "Coinstax",
      description: "Secure Crypto Investment Platform",
      url: "",
    },
    {
      name: "Audio Guys Institute",
      description: "Sound engineering institute website",
      url: "",
    },
  ],
  skills: ["Next.js", "Node.js", "Tailwind CSS", "Express.js", "MongoDB", "React"],
  trainings: [
    "Full-Stack Web Development - Internshala",
    "Node.js Advanced - Udemy",
    "React with TypeScript - Coursera",
  ],
  accomplishments: [
    "Top 10% scorer in Full Stack Dev Test (Upwork)",
    "Contributed to open-source project on GitHub",
  ],
  extracurricular: [
    "Organized college tech fest",
    "Mentored juniors in coding bootcamps",
  ],
  github: "https://github.com/",
  profileImg: "https://avatars.githubusercontent.com/u/123456789?v=4",
  coverImg:
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80",
};

type Section =
  | "header"
  | "about"
  | "education"
  | "projects"
  | "skills"
  | "trainings"
  | "accomplishments"
  | "extracurricular"
  | "socials"
  | "github"
  | "profileImg"
  | "coverImg";

const PortfolioPage = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [editSection, setEditSection] = useState<Section | null>(null);
  const [editValues, setEditValues] = useState<any>({});
  const [profileImgPreview, setProfileImgPreview] = useState<string>(user.profileImg);
  const [coverImgPreview, setCoverImgPreview] = useState<string>(user.coverImg);
  const [profileImgFile, setProfileImgFile] = useState<File | null>(null);
  const [coverImgFile, setCoverImgFile] = useState<File | null>(null);

  // Helper functions
  const onEdit = (section: Section) => {
    setEditSection(section);
    setEditValues({ ...user });
  };

  const onSave = (section: Section) => {
    if (section === "profileImg") {
      setUser((u) => ({ ...u, profileImg: profileImgPreview }));
      setProfileImgFile(null);
    } else if (section === "coverImg") {
      setUser((u) => ({ ...u, coverImg: coverImgPreview }));
      setCoverImgFile(null);
    } else {
      setUser({ ...user, ...editValues });
    }
    setEditSection(null);
  };

  const onDelete = (section: Section) => {
    if (section === "profileImg") {
      setUser((u) => ({ ...u, profileImg: "" }));
      setProfileImgPreview("");
      setProfileImgFile(null);
    } else if (section === "coverImg") {
      setUser((u) => ({ ...u, coverImg: "" }));
      setCoverImgPreview("");
      setCoverImgFile(null);
    }
    setEditSection(null);
  };

  const handleChange = (field: string, value: any) => {
    setEditValues((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProfileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setProfileImgFile(file);
    const url = URL.createObjectURL(file);
    setProfileImgPreview(url);
  };

  const handleCoverImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImgFile(file);
    const url = URL.createObjectURL(file);
    setCoverImgPreview(url);
  };


  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch("http://localhost:3000/api/users/1", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
        })

        const data = await response.json()
        console.log(data)
        // setUser(data)
      }
      catch (error) {
        console.error("Fetch error:", error)
      }
    }

    fetchData()
  }, [])



  // Render
  return (
    <div className="max-w-6xl mx-auto font-sans border p-2 ">
      {/* Cover and Profile Images */}
      <div className="relative">
        <img
          src={coverImgPreview}
          alt="Cover"
          className="w-full h-64 object-cover rounded-b-3xl"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            className="bg-white p-1 rounded hover:bg-gray-100 shadow"
            onClick={() => onEdit("coverImg")}
            title="Edit cover image"
          >
            <Edit size={18} />
          </button>
        </div>
        <img
          src={profileImgPreview}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white absolute bottom-[-2rem] left-6 shadow-lg object-cover"
        />
        <div className="absolute left-40 bottom-2 flex gap-2">
          <button
            className="bg-white p-1 rounded hover:bg-gray-100 shadow"
            onClick={() => onEdit("profileImg")}
            title="Edit profile image"
          >
            <Edit size={18} />
          </button>
        </div>
      </div>

      {/* Cover Image Upload UI */}
      {editSection === "coverImg" && (
        <div className="flex flex-col items-start gap-2 px-6 mt-3">
          <label className="font-medium flex items-center gap-2 text-sm mb-1">
            <Image size={18} className="text-gray-500" /> Change Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImgChange}
            className="block border rounded p-1"
          />
          {coverImgPreview && (
            <img
              src={coverImgPreview}
              alt="Preview"
              className="rounded-lg mt-2 shadow border h-32 object-cover"
              style={{ maxWidth: 320 }}
            />
          )}
          <div className="mt-2 flex gap-2">
            <button
              className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
              onClick={() => onSave("coverImg")}
            >
              <Save size={16} /> Save
            </button>
            <button
              className="bg-red-500 text-white p-1 px-3 rounded flex items-center gap-1"
              onClick={() => onDelete("coverImg")}
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>
      )}

      {/* Profile Image Upload UI */}
      {editSection === "profileImg" && (
        <div className="flex flex-col items-start gap-2 px-6 mt-3">
          <label className="font-medium flex items-center gap-2 text-sm mb-1">
            <Image size={18} className="text-gray-500" /> Change Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImgChange}
            className="block border rounded p-1"
          />
          {profileImgPreview && (
            <img
              src={profileImgPreview}
              alt="Preview"
              className="rounded-full mt-2 shadow border h-24 w-24 object-cover"
            />
          )}
          <div className="mt-2 flex gap-2">
            <button
              className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
              onClick={() => onSave("profileImg")}
            >
              <Save size={16} /> Save
            </button>
            <button
              className="bg-red-500 text-white p-1 px-3 rounded flex items-center gap-1"
              onClick={() => onDelete("profileImg")}
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="mt-16 px-6 sm:px-12">
        {/* Header Info */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8 relative">
          <div>
            {editSection === "header" ? (
              <>
                <input
                  type="text"
                  className="font-bold text-3xl border-b w-full"
                  value={editValues.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                <input
                  type="text"
                  className="text-gray-600 w-full border-b"
                  value={editValues.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
                <input
                  type="text"
                  className="text-sm text-gray-500 w-full border-b"
                  value={editValues.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <input
                  type="text"
                  className="text-sm text-gray-500 w-full border-b"
                  value={editValues.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
                <div className="mt-2 flex gap-2">
                  <button
                    className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                    onClick={() => onSave("header")}
                  >
                    <Save size={16} /> Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.location}</p>
                <p className="text-sm text-gray-500">
                  {user.email} | {user.phone}
                </p>
              </>
            )}
          </div>
          {/* <div className="text-green-600 font-bold text-lg mt-4 sm:mt-0">
            {editSection === "header" ? (
              <input
                type="text"
                className="font-bold text-lg border-b"
                value={editValues.hourlyRate}
                onChange={(e) => handleChange("hourlyRate", e.target.value)}
              />
            ) : (
              user.hourlyRate
            )}
          </div> */}
          {editSection !== "header" && (
            <button
              className="absolute top-0 right-0 bg-white p-1 rounded hover:bg-gray-100 shadow"
              onClick={() => onEdit("header")}
              title="Edit header"
            >
              <Edit size={18} />
            </button>
          )}
        </div>

        {/* Social Media Links */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            Social Media
            {editSection !== "socials" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("socials")}
                title="Edit socials"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "socials" ? (
            <div>
              {user.socials.map((social, idx) => (
                <div key={idx} className="flex gap-2 items-center mb-2">
                  {social.icon}
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-32"
                    value={editValues.socials?.[idx]?.platform ?? social.platform}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.socials
                          ? [...prev.socials]
                          : user.socials.map((s) => ({ ...s }));
                        arr[idx].platform = e.target.value;
                        return { ...prev, socials: arr };
                      })
                    }
                  />
                  <input
                    type="text"
                    className="border rounded px-2 py-1 flex-1"
                    value={editValues.socials?.[idx]?.url ?? social.url}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.socials
                          ? [...prev.socials]
                          : user.socials.map((s) => ({ ...s }));
                        arr[idx].url = e.target.value;
                        return { ...prev, socials: arr };
                      })
                    }
                  />
                </div>
              ))}
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("socials")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 flex-wrap">
              {user.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  {social.icon}
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </section>

        {/* About */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            About Me
            {editSection !== "about" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("about")}
                title="Edit about"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "about" ? (
            <>
              <textarea
                className="w-full border rounded px-2 py-1"
                rows={3}
                value={editValues.about}
                onChange={(e) => handleChange("about", e.target.value)}
              />
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("about")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-700">{user.about}</p>
          )}
        </section>

        {/* Education */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Education
            {editSection !== "education" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("education")}
                title="Edit education"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "education" ? (
            <div>
              {user.education.map((edu, idx) => (
                <div key={idx} className="flex gap-2 items-center mb-2">
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-1/3"
                    value={editValues.education?.[idx]?.institution ?? edu.institution}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.education
                          ? [...prev.education]
                          : user.education.map((e) => ({ ...e }));
                        arr[idx].institution = e.target.value;
                        return { ...prev, education: arr };
                      })
                    }
                    placeholder="Institution"
                  />
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-1/3"
                    value={editValues.education?.[idx]?.degree ?? edu.degree}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.education
                          ? [...prev.education]
                          : user.education.map((e) => ({ ...e }));
                        arr[idx].degree = e.target.value;
                        return { ...prev, education: arr };
                      })
                    }
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-1/4"
                    value={editValues.education?.[idx]?.years ?? edu.years}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.education
                          ? [...prev.education]
                          : user.education.map((e) => ({ ...e }));
                        arr[idx].years = e.target.value;
                        return { ...prev, education: arr };
                      })
                    }
                    placeholder="Years"
                  />
                </div>
              ))}
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("education")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </div>
          ) : (
            <ul className="list-disc pl-5">
              {user.education.map((edu, idx) => (
                <li key={idx}>
                  <strong>{edu.institution}</strong> – {edu.degree} ({edu.years})
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Projects */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Projects
            {editSection !== "projects" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("projects")}
                title="Edit projects"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "projects" ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {user.projects.map((project, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white shadow flex flex-col gap-2">
                  <input
                    type="text"
                    className="font-semibold border-b w-full"
                    value={editValues.projects?.[idx]?.name ?? project.name}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.projects
                          ? [...prev.projects]
                          : user.projects.map((p) => ({ ...p }));
                        arr[idx].name = e.target.value;
                        return { ...prev, projects: arr };
                      })
                    }
                    placeholder="Project Name"
                  />
                  <textarea
                    className="text-gray-600 border rounded px-2 py-1"
                    value={editValues.projects?.[idx]?.description ?? project.description}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.projects
                          ? [...prev.projects]
                          : user.projects.map((p) => ({ ...p }));
                        arr[idx].description = e.target.value;
                        return { ...prev, projects: arr };
                      })
                    }
                    placeholder="Project Description"
                  />
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    value={editValues.projects?.[idx]?.url ?? project.url}
                    onChange={(e) =>
                      setEditValues((prev: any) => {
                        const arr = prev.projects
                          ? [...prev.projects]
                          : user.projects.map((p) => ({ ...p }));
                        arr[idx].url = e.target.value;
                        return { ...prev, projects: arr };
                      })
                    }
                    placeholder="Project URL (optional)"
                  />
                </div>
              ))}
              <div className="sm:col-span-2 mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("projects")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {user.projects.map((project, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white shadow">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  {project.url && project.url.trim() !== "" && (
                    <a
                      href={project.url}
                      className="text-blue-600 hover:underline text-sm mt-1 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.url}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Skills */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Skills
            {editSection !== "skills" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("skills")}
                title="Edit skills"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "skills" ? (
            <>
              <textarea
                className="w-full border rounded px-2 py-1"
                value={editValues.skills ? editValues.skills.join(", ") : user.skills.join(", ")}
                onChange={(e) =>
                  handleChange("skills", e.target.value.split(",").map((s) => s.trim()))
                }
                placeholder="Comma separated skills"
              />
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("skills")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Trainings */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Trainings
            {editSection !== "trainings" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("trainings")}
                title="Edit trainings"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "trainings" ? (
            <>
              <textarea
                className="w-full border rounded px-2 py-1"
                rows={3}
                value={editValues.trainings ? editValues.trainings.join("\n") : user.trainings.join("\n")}
                onChange={(e) =>
                  handleChange("trainings", e.target.value.split("\n").map((s) => s.trim()))
                }
                placeholder="One training per line"
              />
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("trainings")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <ul className="list-disc pl-5 text-gray-700">
              {user.trainings.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>

        {/* Accomplishments */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Accomplishments
            {editSection !== "accomplishments" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("accomplishments")}
                title="Edit accomplishments"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "accomplishments" ? (
            <>
              <textarea
                className="w-full border rounded px-2 py-1"
                rows={3}
                value={
                  editValues.accomplishments
                    ? editValues.accomplishments.join("\n")
                    : user.accomplishments.join("\n")
                }
                onChange={(e) =>
                  handleChange("accomplishments", e.target.value.split("\n").map((s) => s.trim()))
                }
                placeholder="One accomplishment per line"
              />
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("accomplishments")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <ul className="list-disc pl-5 text-gray-700">
              {user.accomplishments.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>

        {/* Extracurricular */}
        <section className="mb-8 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Extracurricular
            {editSection !== "extracurricular" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("extracurricular")}
                title="Edit extracurricular"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "extracurricular" ? (
            <>
              <textarea
                className="w-full border rounded px-2 py-1"
                rows={3}
                value={
                  editValues.extracurricular
                    ? editValues.extracurricular.join("\n")
                    : user.extracurricular.join("\n")
                }
                onChange={(e) =>
                  handleChange("extracurricular", e.target.value.split("\n").map((s) => s.trim()))
                }
                placeholder="One activity per line"
              />
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("extracurricular")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <ul className="list-disc pl-5 text-gray-700">
              {user.extracurricular.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>

        {/* GitHub */}
        <section className="mb-12 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            GitHub
            {editSection !== "github" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("github")}
                title="Edit GitHub"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "github" ? (
            <div className="flex gap-2 items-center">
              <input
                type="text"
                className="border rounded px-2 py-1 flex-1"
                value={editValues.github}
                onChange={(e) => handleChange("github", e.target.value)}
              />
              <button
                className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                onClick={() => onSave("github")}
              >
                <Save size={16} /> Save
              </button>
            </div>
          ) : (
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.github}
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;