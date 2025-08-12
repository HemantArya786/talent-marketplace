//@ts-nocheck

import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { BASE_API } from "@/lib/utils";

type UserType = {
  userId: number;
  name: string;
  email: string;
  phone: number;
  avatar?: string;
  backgroundImageURL?: string;
  userProfileImageURL?: string;
  bio: string;
  location: {
    country: string;
    city: string;
    timezone: string;
  };
  socials: {
    socialType: string;
    url: string;
  }[];
  role: 'user' | string;
  authProvider: 'linkedIn' | 'google' | 'email';
  categories: string[];
  skills: string[];
  title: string;
  projects: {
    title: string;
    techStack: string[];
    projectLiveURL?: string;
    description: string;
  }[];
  experience: {
    title: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    Remote: boolean;
    currentlyWorking: boolean;
    location: string;
    description: string;
  }[];
  education: {
    instituteName: string;
    degree: 'SSC' | '12th/Intermediate' | 'Bachelors' | 'Masters';
    fieldOfStudy?: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }[];
  language: string[];
  charges: {
    userRate: number;
    serviceFeePercent: number;
    finalRate: number;
  };
  training: {
    title: string;
    provider: string;
    location: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }[];
  accomplishments: string[];
  extraCurricular: string[];
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
};

const initialUser: UserType = {
  name: "",
  email: "",
  phone: 0,
  avatar: "",
  backgroundImageURL: "",
  userProfileImageURL: "",
  bio: "",
  location: {
    country: "",
    city: "",
    timezone: ""
  },
  socials: [],
  categories: [],
  skills: [],
  title: "",
  projects: [],
  experience: [],
  education: [],
  language: [],
  charges: {
    userRate: 0,
    serviceFeePercent: 0,
    finalRate: 0
  },
  training: [],
  accomplishments: [],
  extraCurricular: [],
  lastLogin: "",
  createdAt: "",
  updatedAt: "",
};

type Section =
  | "header"
  | "socials"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "trainings"
  | "accomplishments"
  | "extraCurricular"
  | "github"
  | "profileImg"
  | "coverImg";

const getIconForPlatform = (socialType: string) => {
  switch (socialType.toLowerCase()) {
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

const Test = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [editSection, setEditSection] = useState<Section | null>(null);
  const [editValues, setEditValues] = useState<UserType>(user);
  const [profileImgPreview, setProfileImgPreview] = useState<string>(initialUser?.userProfileImageURL || "");
  const [coverImgPreview, setCoverImgPreview] = useState<string>(initialUser?.backgroundImageURL || "");
  const [profileImgFile, setProfileImgFile] = useState<File | null>(null);
  const [coverImgFile, setCoverImgFile] = useState<File | null>(null);

  const { userId } = useParams();

  // Update preview images whenever user data changes (fixes the problem)
  useEffect(() => {
    setProfileImgPreview(user?.userProfileImageURL || "");
    setCoverImgPreview(user?.backgroundImageURL || "");
  }, [user?.userProfileImageURL, user?.backgroundImageURL]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_API}/api/users/${userId}`, {
          withCredentials: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          console.error("Failed to fetch user data:", response.status);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  // Helper functions
  const onEdit = (section: Section) => {
    setEditSection(section);
    setEditValues({ ...user });
    // For image sections, update preview to current image
    if (section === "profileImg") {
      setProfileImgPreview(user.userProfileImageURL || "");
      setProfileImgFile(null);
    } else if (section === "coverImg") {
      setCoverImgPreview(user.backgroundImageURL || "");
      setCoverImgFile(null);
    }
  };

  const onSave = (section: Section) => {
    if (section === "profileImg") {
      // In real app, upload file and get URL, here just use preview
      setUser((u) => ({
        ...u,
        userProfileImageURL: profileImgPreview,
      }));
      setEditValues((prev) => ({
        ...prev,
        userProfileImageURL: profileImgPreview,
      }));
      setProfileImgFile(null);
    } else if (section === "coverImg") {
      setUser((u) => ({
        ...u,
        backgroundImageURL: coverImgPreview,
      }));
      setEditValues((prev) => ({
        ...prev,
        backgroundImageURL: coverImgPreview,
      }));
      setCoverImgFile(null);
    } else if (section === "socials") {
      setUser((u) => ({
        ...u,
        socials: editValues.socials.map((s: any) => ({
          ...s,
          icon: getIconForPlatform(s.socialType || ""),
        })),
      }));
    }
    // ...rest of your onSave logic for other sections...
    else {
      setUser({ ...user, ...editValues });
    }
    setEditSection(null);
  };

  const onDelete = (section: Section) => {
    if (section === "profileImg") {
      setUser((u) => ({ ...u, userProfileImageURL: "" }));
      setProfileImgPreview("");
      setProfileImgFile(null);
      setEditValues((prev) => ({
        ...prev,
        userProfileImageURL: "",
      }));
    } else if (section === "coverImg") {
      setUser((u) => ({ ...u, backgroundImageURL: "" }));
      setCoverImgPreview("");
      setCoverImgFile(null);
      setEditValues((prev) => ({
        ...prev,
        backgroundImageURL: "",
      }));
    }
    setEditSection(null);
  };

  const handleChange = (field: string, value: string | number) => {
    setEditValues((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // File Input Handlers
  const handleProfileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setProfileImgFile(file);
    const url = URL.createObjectURL(file);
    setProfileImgPreview(url);
    // Set it also in editValues for immediate use
    setEditValues((prev: any) => ({
      ...prev,
      userProfileImageURL: url,
    }));
  };

  const handleCoverImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImgFile(file);
    const url = URL.createObjectURL(file);
    setCoverImgPreview(url);
    setEditValues((prev: any) => ({
      ...prev,
      backgroundImageURL: url,
    }));
  };

  // ...rest of your handlers and render code (identical to your original)...

  // Socials handlers
  const handleSocialRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.socials !== undefined
          ? [...prev.socials]
          : user.socials.map((s) => ({ platform: s.socialType, url: s.url }));
      arr.splice(idx, 1);
      return { ...prev, socials: arr };
    });
  };
  const handleSocialAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      socials: prev.socials
        ? [...prev.socials, { socialType: "", url: "", icon: <Globe /> }]
        : [...user.socials, { socialType: "", url: "", icon: <Globe /> }],
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
            instituteName: "",
            degree: "",
            years: "",
            fieldOfStudy: "",
            startYear: "",
            endYear: "",
          },
        ]
        : [
          ...user.education,
          {
            instituteName: "",
            degree: "",
            years: "",
            fieldOfStudy: "",
            startYear: "",
            endYear: "",
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
            start: "",
            end: ""
          }
        ]
        : [
          ...user.projects,
          {
            name: "",
            description: "",
            url: "",
            start: "",
            end: ""
          }
        ]
    }));
  };

  // Trainings handlers
  const handleTrainingRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.training !== undefined
          ? [...prev.training]
          : user.training.map((t) => ({ ...t }));
      arr.splice(idx, 1);
      return { ...prev, training: arr };
    });
  };
  const handleTrainingAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      training: prev.training
        ? [
          ...prev.training,
          {
            courseName: "",
            description: "",
            location: "",
            start: "",
            end: "",
            current: ""
          },
        ]
        : [
          ...user.training,
          {
            courseName: "",
            description: "",
            location: "",
            start: "",
            end: "",
            current: ""
          },
        ],
    }));
  };

  // Professional section handlers
  const handleProfessionalRemove = (idx: number) => {
    setEditValues((prev: any) => {
      const arr =
        prev.experience !== undefined
          ? [...prev.experience]
          : user.experience.map((p) => ({ ...p }));
      arr.splice(idx, 1);
      return { ...prev, experience: arr };
    });
  };

  const handleProfessionalAdd = () => {
    setEditValues((prev: any) => ({
      ...prev,
      experience: prev.experience
        ? [
          ...prev.experience,
          {
            title: "",
            companyName: "",
            location: "",
            description: "",
            start: "",
            end: "",
            current: false,
          },
        ]
        : [
          ...user.experience,
          {
            title: "",
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

  // Render (identical to your original)
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

      {/* ...rest of your component remains unchanged... */}
      {/* Please insert the rest of your PortfolioPage component here (omitted for brevity) */}
    </div>
  );
};

export default Test;