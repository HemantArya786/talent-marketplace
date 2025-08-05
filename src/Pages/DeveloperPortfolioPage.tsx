import React, { useState } from "react";
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
  Plus,
  X,
} from "lucide-react";

type UserType = {
  name: string;
  location: string;
  email: string;
  phone: string;
  hourlyRate: string;
  about: string;
  education: {
    institution: string;
    degree: string;
    years: string;
    grade?: string;
    college?: string;
    startYear?: string;
    endYear?: string;
    current?: boolean;
  }[];
  socials: { platform: string; url: string; icon: JSX.Element }[];
  projects: {
    name: string;
    description: string;
    url?: string;
    thumbnail?: string;
    start?: string;
    end?: string;
    current?: boolean;
  }[];
  skills: string[];
  trainings: {
    courseName: string;
    description: string;
    location: string;
    start?: string;
    end?: string;
    current?: boolean;
  }[];
  accomplishments: string[];
  extracurricular: string[];
  professional: {
    jobRole: string;
    companyName: string;
    location: string;
    description: string;
    start?: string;
    end?: string;
    current?: boolean;
  }[];
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
      institution: "ABC University",
      degree: "B.Tech Computer Science",
      years: "2023 - 2025",
      grade: "8.4 CGPA",
      college: "ABC University",
      startYear: "2023",
      endYear: "2025",
      current: true,
    },
    {
      institution: "CBSE",
      degree: "High School",
      years: "Completed",
      grade: "92%",
      college: "XYZ School",
      startYear: "2021",
      endYear: "2022",
      current: false,
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
      thumbnail: "",
      start: "2024-01",
      end: "",
      current: true,
    },
    {
      name: "Coinstax",
      description: "Secure Crypto Investment Platform",
      url: "",
      thumbnail: "",
      start: "2023-08",
      end: "2024-01",
      current: false,
    },
    {
      name: "Audio Guys Institute",
      description: "Sound engineering institute website",
      url: "",
      thumbnail: "",
      start: "2022-06",
      end: "2023-01",
      current: false,
    },
  ],
  skills: [
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Express.js",
    "MongoDB",
    "React",
  ],
  trainings: [
    {
      courseName: "Full-Stack Web Development - Internshala",
      description: "Learned MERN stack from scratch.",
      location: "Online",
      start: "2022-01",
      end: "2022-04",
      current: false,
    },
    {
      courseName: "Node.js Advanced - Udemy",
      description: "Advanced backend with Node.js and Express.",
      location: "Online",
      start: "2023-02",
      end: "",
      current: true,
    },
    {
      courseName: "React with TypeScript - Coursera",
      description: "Mastering React with TS.",
      location: "Online",
      start: "2023-05",
      end: "2023-08",
      current: false,
    },
  ],
  accomplishments: [
    "Top 10% scorer in Full Stack Dev Test (Upwork)",
    "Contributed to open-source project on GitHub",
  ],
  extracurricular: [
    "Organized college tech fest",
    "Mentored juniors in coding bootcamps",
  ],
  professional: [
    {
      jobRole: "Frontend Developer",
      companyName: "Techie Ltd.",
      location: "Remote",
      description: "Building scalable React.js applications for clients.",
      start: "2024-01",
      end: "",
      current: true,
    },
    {
      jobRole: "Web Intern",
      companyName: "StartupX",
      location: "Delhi",
      description: "Worked on their landing page and user dashboard.",
      start: "2023-06",
      end: "2023-11",
      current: false,
    },
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
  | "coverImg"
  | "professional";

const getIconForPlatform = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return <Github />;
    case "linkedin":
      return <Linkedin />;
    case "twitter":
      return <Twitter />;
    case "instagram":
      return <Instagram />;
    case "portfolio website":
      return <Globe />;
    default:
      return <Globe />;
  }
};

const PortfolioPage = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [editSection, setEditSection] = useState<Section | null>(null);
  const [editValues, setEditValues] = useState<any>({});
  const [profileImgPreview, setProfileImgPreview] = useState<string>(
    user.profileImg
  );
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
    } else if (section === "socials") {
      setUser((u) => ({
        ...u,
        socials: editValues.socials.map((s: any) => ({
          ...s,
          icon: getIconForPlatform(s.platform || ""),
        })),
      }));
    } else if (section === "education") {
      setUser((u) => ({
        ...u,
        education: editValues.education,
      }));
    } else if (section === "projects") {
      setUser((u) => ({
        ...u,
        projects: editValues.projects,
      }));
    } else if (section === "trainings") {
      setUser((u) => ({
        ...u,
        trainings: editValues.trainings,
      }));
    } else if (section === "professional") {
      setUser((u) => ({
        ...u,
        professional: editValues.professional,
      }));
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

  // Socials handlers
  const handleSocialRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.socials !== undefined
          ? [...prev.socials]
          : user.socials.map((s) => ({ platform: s.platform, url: s.url }));
      arr.splice(idx, 1);
      return { ...prev, socials: arr };
    });
  };
  const handleSocialAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      socials: prev.socials
        ? [...prev.socials, { platform: "", url: "", icon: <Globe /> }]
        : [...user.socials, { platform: "", url: "", icon: <Globe /> }],
    }));
  };

  // Education handlers
  const handleEducationRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.education !== undefined
          ? [...prev.education]
          : user.education.map((e) => ({ ...e }));
      arr.splice(idx, 1);
      return { ...prev, education: arr };
    });
  };
  const handleEducationAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      education: prev.education
        ? [
            ...prev.education,
            {
              institution: "",
              degree: "",
              years: "",
              grade: "",
              college: "",
              startYear: "",
              endYear: "",
              current: false,
            },
          ]
        : [
            ...user.education,
            {
              institution: "",
              degree: "",
              years: "",
              grade: "",
              college: "",
              startYear: "",
              endYear: "",
              current: false,
            },
          ],
    }));
  };

  // Projects handlers
  const handleProjectRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.projects !== undefined
          ? [...prev.projects]
          : user.projects.map((p) => ({ ...p }));
      arr.splice(idx, 1);
      return { ...prev, projects: arr };
    });
  };
  const handleProjectAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      projects: prev.projects
        ? [
            ...prev.projects,
            {
              name: "",
              description: "",
              url: "",
              thumbnail: "",
              start: "",
              end: "",
              current: false,
            },
          ]
        : [
            ...user.projects,
            {
              name: "",
              description: "",
              url: "",
              thumbnail: "",
              start: "",
              end: "",
              current: false,
            },
          ],
    }));
  };

  // Trainings handlers
  const handleTrainingRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.trainings !== undefined
          ? [...prev.trainings]
          : user.trainings.map((t) => ({ ...t }));
      arr.splice(idx, 1);
      return { ...prev, trainings: arr };
    });
  };
  const handleTrainingAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      trainings: prev.trainings
        ? [
            ...prev.trainings,
            {
              courseName: "",
              description: "",
              location: "",
              start: "",
              end: "",
              current: false,
            },
          ]
        : [
            ...user.trainings,
            {
              courseName: "",
              description: "",
              location: "",
              start: "",
              end: "",
              current: false,
            },
          ],
    }));
  };

  // Professional section handlers
  const handleProfessionalRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.professional !== undefined
          ? [...prev.professional]
          : user.professional.map((p) => ({ ...p }));
      arr.splice(idx, 1);
      return { ...prev, professional: arr };
    });
  };
  const handleProfessionalAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      professional: prev.professional
        ? [
            ...prev.professional,
            {
              jobRole: "",
              companyName: "",
              location: "",
              description: "",
              start: "",
              end: "",
              current: false,
            },
          ]
        : [
            ...user.professional,
            {
              jobRole: "",
              companyName: "",
              location: "",
              description: "",
              start: "",
              end: "",
              current: false,
            },
          ],
    }));
  };

  // File Input Handlers
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
      <div className="mt-16 px-6 sm:px-12 ">
        {/* Header Info */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8 relative border p-5 rounded-lg bg-gray-100">
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
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
              {editValues.socials
                ? editValues.socials.map((social: any, idx: number) => (
                    <div key={idx} className="flex gap-2 items-center mb-2">
                      <span>{getIconForPlatform(social.platform)}</span>
                      <input
                        type="text"
                        className="border rounded px-2 py-1 w-32"
                        value={social.platform}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = [...prev.socials];
                            arr[idx].platform = e.target.value;
                            arr[idx].icon = getIconForPlatform(e.target.value);
                            return { ...prev, socials: arr };
                          })
                        }
                        placeholder="Platform"
                      />
                      <input
                        type="text"
                        className="border rounded px-2 py-1 flex-1"
                        value={social.url}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = [...prev.socials];
                            arr[idx].url = e.target.value;
                            return { ...prev, socials: arr };
                          })
                        }
                        placeholder="URL"
                      />
                      <button
                        className="bg-red-100 text-red-600 p-1 rounded hover:bg-red-200"
                        onClick={() => handleSocialRemove(idx)}
                        title="Remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))
                : user.socials.map((social, idx) => (
                    <div key={idx} className="flex gap-2 items-center mb-2">
                      <span>{getIconForPlatform(social.platform)}</span>
                      <input
                        type="text"
                        className="border rounded px-2 py-1 w-32"
                        value={social.platform}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = user.socials.map((s) => ({
                              platform: s.platform,
                              url: s.url,
                            }));
                            arr[idx].platform = e.target.value;
                            arr[idx].icon = getIconForPlatform(e.target.value);
                            return { ...prev, socials: arr };
                          })
                        }
                        placeholder="Platform"
                      />
                      <input
                        type="text"
                        className="border rounded px-2 py-1 flex-1"
                        value={social.url}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = user.socials.map((s) => ({
                              platform: s.platform,
                              url: s.url,
                            }));
                            arr[idx].url = e.target.value;
                            return { ...prev, socials: arr };
                          })
                        }
                        placeholder="URL"
                      />
                      <button
                        className="bg-red-100 text-red-600 p-1 rounded hover:bg-red-200"
                        onClick={() => handleSocialRemove(idx)}
                        title="Remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
              <button
                className="bg-blue-100 text-blue-700 p-1 px-3 rounded flex items-center gap-1 mt-2"
                onClick={handleSocialAdd}
              >
                <Plus size={16} /> Add Social
              </button>
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
                  {getIconForPlatform(social.platform)}
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </section>

        {/* About */}
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
              {(editValues.education || user.education).map(
                (edu: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex gap-2 flex-wrap items-center mb-2 border p-2 rounded-lg bg-gray-50"
                  >
                    <input
                      type="text"
                      className="border rounded px-2 py-1 w-40"
                      value={edu.institution}
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
                      className="border rounded px-2 py-1 w-32"
                      value={edu.college || ""}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.education
                            ? [...prev.education]
                            : user.education.map((e) => ({ ...e }));
                          arr[idx].college = e.target.value;
                          return { ...prev, education: arr };
                        })
                      }
                      placeholder="College"
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1 w-32"
                      value={edu.degree}
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
                      className="border rounded px-2 py-1 w-20"
                      value={edu.grade || ""}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.education
                            ? [...prev.education]
                            : user.education.map((e) => ({ ...e }));
                          arr[idx].grade = e.target.value;
                          return { ...prev, education: arr };
                        })
                      }
                      placeholder="Grade"
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1 w-20"
                      value={edu.startYear || ""}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.education
                            ? [...prev.education]
                            : user.education.map((e) => ({ ...e }));
                          arr[idx].startYear = e.target.value;
                          return { ...prev, education: arr };
                        })
                      }
                      placeholder="Start year"
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1 w-20"
                      value={edu.endYear || ""}
                      disabled={edu.current}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.education
                            ? [...prev.education]
                            : user.education.map((e) => ({ ...e }));
                          arr[idx].endYear = e.target.value;
                          return { ...prev, education: arr };
                        })
                      }
                      placeholder="End year"
                    />
                    <label className="flex gap-1 items-center text-xs">
                      <input
                        type="checkbox"
                        checked={edu.current || false}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.education
                              ? [...prev.education]
                              : user.education.map((e) => ({ ...e }));
                            arr[idx].current = e.target.checked;
                            if (e.target.checked) arr[idx].endYear = "";
                            return { ...prev, education: arr };
                          })
                        }
                      />
                      Current
                    </label>
                    <button
                      className="bg-red-100 text-red-600 p-1 rounded hover:bg-red-200"
                      onClick={() => handleEducationRemove(idx)}
                      title="Remove"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )
              )}
              <button
                className="bg-blue-100 text-blue-700 p-1 px-3 rounded flex items-center gap-1 mt-2"
                onClick={handleEducationAdd}
              >
                <Plus size={16} /> Add Education
              </button>
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
                  <strong>{edu.institution}</strong>
                  {edu.college && <> – {edu.college}</>}
                  {" | "}
                  {edu.degree} {edu.grade && <>({edu.grade})</>}
                  {", "}
                  {edu.startYear}
                  {" - "}
                  {edu.current ? "Current" : edu.endYear || edu.years}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Projects */}
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
              {(editValues.projects || user.projects).map(
                (project: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 border rounded-lg bg-white shadow flex flex-col gap-2 relative"
                  >
                    <button
                      className="absolute top-1 right-1 bg-red-100 text-red-600 p-1 rounded hover:bg-red-200"
                      onClick={() => handleProjectRemove(idx)}
                      title="Remove"
                    >
                      <X size={16} />
                    </button>
                    <input
                      type="text"
                      className="font-semibold border-b w-full"
                      value={project.name}
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
                      value={project.description}
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
                      value={project.url}
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
                    <input
                      type="text"
                      className="border rounded px-2 py-1"
                      value={project.thumbnail}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.projects
                            ? [...prev.projects]
                            : user.projects.map((p) => ({ ...p }));
                          arr[idx].thumbnail = e.target.value;
                          return { ...prev, projects: arr };
                        })
                      }
                      placeholder="Thumbnail Image URL"
                    />
                    <div className="flex gap-2 flex-wrap items-center">
                      <input
                        type="month"
                        className="border rounded px-2 py-1"
                        value={project.start || ""}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.projects
                              ? [...prev.projects]
                              : user.projects.map((p) => ({ ...p }));
                            arr[idx].start = e.target.value;
                            return { ...prev, projects: arr };
                          })
                        }
                        placeholder="Start Date"
                      />
                      <input
                        type="month"
                        className="border rounded px-2 py-1"
                        value={project.end || ""}
                        disabled={project.current}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.projects
                              ? [...prev.projects]
                              : user.projects.map((p) => ({ ...p }));
                            arr[idx].end = e.target.value;
                            return { ...prev, projects: arr };
                          })
                        }
                        placeholder="End Date"
                      />
                      <label className="flex gap-1 items-center text-xs">
                        <input
                          type="checkbox"
                          checked={project.current || false}
                          onChange={(e) =>
                            setEditValues((prev: any) => {
                              const arr = prev.projects
                                ? [...prev.projects]
                                : user.projects.map((p) => ({ ...p }));
                              arr[idx].current = e.target.checked;
                              if (e.target.checked) arr[idx].end = "";
                              return { ...prev, projects: arr };
                            })
                          }
                        />
                        Current
                      </label>
                    </div>
                  </div>
                )
              )}
              <button
                className="bg-blue-100 text-blue-700 p-1 px-3 rounded flex items-center gap-1 mt-2 sm:col-span-2"
                onClick={handleProjectAdd}
              >
                <Plus size={16} /> Add Project
              </button>
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
                <div
                  key={idx}
                  className="p-4 border rounded-lg bg-white shadow flex flex-col gap-2"
                >
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt="Thumbnail"
                      className="rounded-lg mb-2 h-20 object-cover w-full"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="text-xs text-gray-500">
                    {project.start} -{" "}
                    {project.current ? "Current" : project.end}
                  </div>
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
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
                value={
                  editValues.skills
                    ? editValues.skills.join(", ")
                    : user.skills.join(", ")
                }
                onChange={(e) =>
                  handleChange(
                    "skills",
                    e.target.value.split(",").map((s) => s.trim())
                  )
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
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
              {(editValues.trainings || user.trainings).map(
                (training: any, idx: number) => (
                  <div
                    key={idx}
                    className="border p-2 mb-2 rounded-lg bg-gray-50 flex flex-col gap-2 relative"
                  >
                    <button
                      className="absolute top-1 right-1 bg-red-100 text-red-600 p-1 rounded hover:bg-red-200"
                      onClick={() => handleTrainingRemove(idx)}
                      title="Remove"
                    >
                      <X size={16} />
                    </button>
                    <input
                      type="text"
                      className="border rounded px-2 py-1"
                      value={training.courseName}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.trainings
                            ? [...prev.trainings]
                            : user.trainings.map((t) => ({ ...t }));
                          arr[idx].courseName = e.target.value;
                          return { ...prev, trainings: arr };
                        })
                      }
                      placeholder="Course Name"
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1"
                      value={training.location}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.trainings
                            ? [...prev.trainings]
                            : user.trainings.map((t) => ({ ...t }));
                          arr[idx].location = e.target.value;
                          return { ...prev, trainings: arr };
                        })
                      }
                      placeholder="Location"
                    />
                    <textarea
                      className="w-full border rounded px-2 py-1"
                      value={training.description}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.trainings
                            ? [...prev.trainings]
                            : user.trainings.map((t) => ({ ...t }));
                          arr[idx].description = e.target.value;
                          return { ...prev, trainings: arr };
                        })
                      }
                      placeholder="Description"
                    />
                    <div className="flex gap-2 flex-wrap items-center">
                      <input
                        type="month"
                        className="border rounded px-2 py-1"
                        value={training.start || ""}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.trainings
                              ? [...prev.trainings]
                              : user.trainings.map((t) => ({ ...t }));
                            arr[idx].start = e.target.value;
                            return { ...prev, trainings: arr };
                          })
                        }
                        placeholder="Start Date"
                      />
                      <input
                        type="month"
                        className="border rounded px-2 py-1"
                        value={training.end || ""}
                        disabled={training.current}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.trainings
                              ? [...prev.trainings]
                              : user.trainings.map((t) => ({ ...t }));
                            arr[idx].end = e.target.value;
                            return { ...prev, trainings: arr };
                          })
                        }
                        placeholder="End Date"
                      />
                      <label className="flex gap-1 items-center text-xs">
                        <input
                          type="checkbox"
                          checked={training.current || false}
                          onChange={(e) =>
                            setEditValues((prev: any) => {
                              const arr = prev.trainings
                                ? [...prev.trainings]
                                : user.trainings.map((t) => ({ ...t }));
                              arr[idx].current = e.target.checked;
                              if (e.target.checked) arr[idx].end = "";
                              return { ...prev, trainings: arr };
                            })
                          }
                        />
                        Current
                      </label>
                    </div>
                  </div>
                )
              )}
              <button
                className="bg-blue-100 text-blue-700 p-1 px-3 rounded flex items-center gap-1 mt-2"
                onClick={handleTrainingAdd}
              >
                <Plus size={16} /> Add Training
              </button>
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
                <li key={idx}>
                  <strong>{item.courseName}</strong>{" "}
                  {item.location && <>({item.location})</>} <br />
                  <span className="text-xs">{item.description}</span> <br />
                  <span className="text-xs text-gray-500">
                    {item.start} - {item.current ? "Current" : item.end}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Professional Experience */}
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Professional
            {editSection !== "professional" && (
              <button
                className="bg-white p-1 rounded hover:bg-gray-100 shadow"
                onClick={() => onEdit("professional")}
                title="Edit Professional"
              >
                <Edit size={16} />
              </button>
            )}
          </h2>
          {editSection === "professional" ? (
            <>
              {(editValues.professional || user.professional).map(
                (prof: any, idx: number) => (
                  <div
                    key={idx}
                    className="border p-2 mb-2 rounded-lg bg-gray-50 flex flex-col gap-2 relative"
                  >
                    <button
                      className="absolute top-1 right-1 bg-red-100 text-red-600 p-1 rounded hover:bg-red-200"
                      onClick={() => handleProfessionalRemove(idx)}
                      title="Remove"
                    >
                      <X size={16} />
                    </button>
                    <input
                      type="text"
                      className="border rounded px-2 py-1"
                      value={prof.jobRole}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.professional
                            ? [...prev.professional]
                            : user.professional.map((p) => ({ ...p }));
                          arr[idx].jobRole = e.target.value;
                          return { ...prev, professional: arr };
                        })
                      }
                      placeholder="Job Role"
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1"
                      value={prof.companyName}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.professional
                            ? [...prev.professional]
                            : user.professional.map((p) => ({ ...p }));
                          arr[idx].companyName = e.target.value;
                          return { ...prev, professional: arr };
                        })
                      }
                      placeholder="Company Name"
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1"
                      value={prof.location}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.professional
                            ? [...prev.professional]
                            : user.professional.map((p) => ({ ...p }));
                          arr[idx].location = e.target.value;
                          return { ...prev, professional: arr };
                        })
                      }
                      placeholder="Location"
                    />
                    <textarea
                      className="w-full border rounded px-2 py-1"
                      value={prof.description}
                      onChange={(e) =>
                        setEditValues((prev: any) => {
                          const arr = prev.professional
                            ? [...prev.professional]
                            : user.professional.map((p) => ({ ...p }));
                          arr[idx].description = e.target.value;
                          return { ...prev, professional: arr };
                        })
                      }
                      placeholder="Description"
                    />
                    <div className="flex gap-2 flex-wrap items-center">
                      <input
                        type="month"
                        className="border rounded px-2 py-1"
                        value={prof.start || ""}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.professional
                              ? [...prev.professional]
                              : user.professional.map((p) => ({ ...p }));
                            arr[idx].start = e.target.value;
                            return { ...prev, professional: arr };
                          })
                        }
                        placeholder="Start Date"
                      />
                      <input
                        type="month"
                        className="border rounded px-2 py-1"
                        value={prof.end || ""}
                        disabled={prof.current}
                        onChange={(e) =>
                          setEditValues((prev: any) => {
                            const arr = prev.professional
                              ? [...prev.professional]
                              : user.professional.map((p) => ({ ...p }));
                            arr[idx].end = e.target.value;
                            return { ...prev, professional: arr };
                          })
                        }
                        placeholder="End Date"
                      />
                      <label className="flex gap-1 items-center text-xs">
                        <input
                          type="checkbox"
                          checked={prof.current || false}
                          onChange={(e) =>
                            setEditValues((prev: any) => {
                              const arr = prev.professional
                                ? [...prev.professional]
                                : user.professional.map((p) => ({ ...p }));
                              arr[idx].current = e.target.checked;
                              if (e.target.checked) arr[idx].end = "";
                              return { ...prev, professional: arr };
                            })
                          }
                        />
                        Current
                      </label>
                    </div>
                  </div>
                )
              )}
              <button
                className="bg-blue-100 text-blue-700 p-1 px-3 rounded flex items-center gap-1 mt-2"
                onClick={handleProfessionalAdd}
              >
                <Plus size={16} /> Add Professional
              </button>
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-green-500 text-white p-1 px-3 rounded flex items-center gap-1"
                  onClick={() => onSave("professional")}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <ul className="list-disc pl-5 text-gray-700">
              {user.professional.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.jobRole}</strong> at {item.companyName} (
                  {item.location}) <br />
                  <span className="text-xs">{item.description}</span>
                  <br />
                  <span className="text-xs text-gray-500">
                    {item.start} - {item.current ? "Current" : item.end}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Accomplishments */}
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
                  handleChange(
                    "accomplishments",
                    e.target.value.split("\n").map((s) => s.trim())
                  )
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
        <section className="mb-8 relative border p-5 rounded-lg bg-gray-100">
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
                  handleChange(
                    "extracurricular",
                    e.target.value.split("\n").map((s) => s.trim())
                  )
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
        {/* <section className="mb-12 relative">
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
        </section> */}
      </div>
    </div>
  );
};

export default PortfolioPage;
