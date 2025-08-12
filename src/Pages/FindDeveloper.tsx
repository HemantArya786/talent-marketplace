import axios from "axios";
import React, { useState, useEffect } from "react";

const categoryOptions = [
  "Generative AI",
  "Machine Learning Engineering",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "AI Infrastructure & MLOps",
  "Applied AI",
  "AI Research",
  "AI Product & Strategy",
  "Ethical AI & Governance",
  "Speech & Audio AI",
  "Data Engineering for AI",
  "Robotics & Autonomous Systems",
  "Creative AI"
];

const skillsData: Record<string, string[]> = {
  "Generative AI": ["Prompt Engineering", "LLM Engineering", "Fine-Tuning", "RAG Systems", "Conversational AI", "Diffusion Models", "GenAI Research", "Text Generation", "Image Generation", "Audio/Video Generation"],
  "Machine Learning Engineering": ["Model Training", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Scikit-learn", "TensorFlow", "PyTorch", "Model Deployment"],
  "Natural Language Processing (NLP)": ["Text Classification", "Named Entity Recognition", "Tokenization", "Text Summarization", "Translation", "Sentiment Analysis", "Hugging Face Transformers"],
  "Computer Vision": ["Image Classification", "Object Detection", "Semantic Segmentation", "Facial Recognition", "OCR", "OpenCV", "YOLO", "Transformers for Vision"],
  "AI Infrastructure & MLOps": ["MLflow", "Kubeflow", "Docker", "Kubernetes", "CI/CD for ML", "Model Monitoring", "Data Versioning", "AWS SageMaker", "Vertex AI", "Azure ML"],
  "Applied AI": ["AI for Healthcare", "AI in Finance", "Recommendation Systems", "Chatbots", "Voice Assistants", "Search Ranking", "Fraud Detection"],
  "AI Research": ["Model Architectures", "Transfer Learning", "Reinforcement Learning", "Self-Supervised Learning", "Research Paper Implementation", "ArXiv Reading", "Benchmarking"],
  "AI Product & Strategy": ["AI Product Management", "AI Roadmapping", "A/B Testing", "UX for AI", "AI Product Metrics", "Cross-functional Collaboration"],
  "Ethical AI & Governance": ["Bias Detection", "Fairness in AI", "Explainable AI (XAI)", "Privacy-preserving AI", "AI Regulations", "Responsible AI", "Model Transparency"],
  "Speech & Audio AI": ["Speech Recognition", "Voice Cloning", "Text-to-Speech", "Audio Classification", "Audio Generation", "ASR", "Whisper by OpenAI"],
  "Data Engineering for AI": ["Data Cleaning", "Data Pipelines", "ETL for ML", "Data Lakes", "Apache Spark", "Feature Engineering", "BigQuery"],
  "Robotics & Autonomous Systems": ["SLAM", "Path Planning", "Reinforcement Learning", "Computer Vision for Robotics", "ROS (Robot Operating System)"],
  "Creative AI": ["AI Music Composition", "AI Art Generation", "Style Transfer", "Video Generation", "Creative Prompting", "Generative Design"]
};

type Developer = {
  userId: number;
  fullName: string;
  bio: string;
  userProfileImageURL: string;
  backgroundImageURL: string;
  experience: string[];
  location: {
    country: string;
    city: string;
  };
  categories: string[];
  education: {
    degree: string;
  }[];
  skills: string[];
};

const locations = ["Delhi", "Bangalore", "Mumbai", "Hyderabad", "Madrid", "Warsaw", "Singapore", "London"];
const educations = ["Bachelors", "Masters", "SSC/10th", "MSc AI", "12th/Intermediate"];

// const generateDummyDevelopers = (count: number): Developer[] => {
//   return Array.from({ length: count }, (_, i) => {
//     const category = categoryOptions[Math.floor(Math.random() * categoryOptions.length)];
//     const categorySkills = skillsData[category];
//     const randomSkills = categorySkills.sort(() => 0.5 - Math.random()).slice(0, 3);

//     return {
//       id: i + 1,
//       name: `Developer ${i + 1}`,
//       about: `Experienced ${category} specialist with strong expertise in ${randomSkills[0]}.`,
//       profilePic: `https://i.pravatar.cc/150?img=${i + 10}`,
//       skills: randomSkills,
//       experience: Math.floor(Math.random() * 5) + 1,
//       location: locations[Math.floor(Math.random() * locations.length)],
//       category,
//       education: educations[Math.floor(Math.random() * educations.length)],
//     };
//   });
// };

const MultiSelectDropdown = ({
  label,
  options,
  selectedValues,
  onChange
}: {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-2 border border-blue-300 bg-blue-50 rounded flex justify-between items-center hover:bg-blue-100 transition"
      >
        {label} ({selectedValues.length})
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          className="absolute z-10 bg-white border rounded shadow-md mt-1 w-full max-h-60 overflow-y-auto"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="sticky top-0 bg-white p-2 border-b">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${label.toLowerCase()}...`}
              className="w-full border rounded px-2 py-1 text-sm"
            />
          </div>

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <label
                key={option}
                className="flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={() => toggleValue(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500 text-sm">No results found</div>
          )}
        </div>
      )}

      {selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedValues.map((value) => (
            <span
              key={value}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center"
            >
              {value}
              <button
                onClick={() => toggleValue(value)}
                className="ml-1 text-red-500"
              >
                x
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const DevelopersListPage = () => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<string[]>([]);

  const developersPerPage = 10;

  const Experience = (dev: Developer): number => {
    if (!dev.experience || dev.experience.length === 0) return 0;

    let totalMonths = 0;
    const now = new Date();

    dev.experience.forEach((job: any) => {
      const start = new Date(job.startDate);
      const end = job.currentlyWorking || !job.endDate ? now : new Date(job.endDate);

      const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

      totalMonths += months;
    });

    return Math.floor(totalMonths / 12);
  };

  useEffect(() => {
    // setDevelopers(generateDummyDevelopers(50));
    const fetchData = async () => {

      try {
        const res = await axios.get(`http://localhost:3000/api/users`)

        const responseData = await res.data
        setDevelopers(responseData)
        console.log(responseData);

      }
      catch (err) {
        throw await err
      }
    }
    fetchData()
  }, []);

  const filteredDevelopers = developers.filter((dev) => {
    const yearsOfExperience = Experience(dev);

    return (
      (selectedSkills.length === 0 || selectedSkills.some((skill) => dev.skills.includes(skill))) &&
      (selectedExperience.length === 0 || selectedExperience.includes(yearsOfExperience.toString())) &&
      (selectedLocation.length === 0 || selectedLocation.includes(dev.location.city)) &&
      (selectedCategory.length === 0 || dev.categories.some((cat) => selectedCategory.includes(cat))) &&
      (selectedEducation.length === 0 || dev.education.some((edu) => selectedEducation.includes(edu.degree)))
    );
  });


  const totalPages = Math.ceil(filteredDevelopers.length / developersPerPage);
  const currentDevelopers = filteredDevelopers.slice((currentPage - 1) * developersPerPage, currentPage * developersPerPage);

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4 border border-gray-200">
        <h2 className="text-lg font-semibold mb-2 text-blue-700">Filters</h2>

        <MultiSelectDropdown label="Location" options={locations} selectedValues={selectedLocation} onChange={setSelectedLocation} />
        <MultiSelectDropdown label="Category" options={categoryOptions} selectedValues={selectedCategory} onChange={setSelectedCategory} />
        <MultiSelectDropdown label="Experience" options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].reverse()} selectedValues={selectedExperience} onChange={setSelectedExperience} />
        <MultiSelectDropdown label="Education" options={educations} selectedValues={selectedEducation} onChange={setSelectedEducation} />
        <MultiSelectDropdown label="Skills" options={Object.values(skillsData).flat()} selectedValues={selectedSkills} onChange={setSelectedSkills} />
      </div>

      <div className="md:col-span-3">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">Developer Directory</h1>
        <div className="flex flex-col gap-6">
          {currentDevelopers.map((dev) => (
            <div
              key={dev.userId}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row items-center hover:shadow-xl hover:scale-[1.01] transition-transform border border-gray-200"
            >
              <img src={dev.userProfileImageURL} alt={dev.fullName} className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 border-4 border-purple-200" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-blue-800">{dev.fullName || `Developer${dev.userId}`}</h2>
                <p className="text-sm text-gray-600">{dev.bio || ""}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {Experience(dev) || ""} year(s) | {dev.location.city || "India"} | {dev.education.map((e) => e.degree).join(", ") || ""}
                </p>
                <span className="block text-xs text-gray-400 mt-1">Category: {dev.categories || ""}</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {dev.skills.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-200 text-blue-900 rounded hover:bg-blue-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="self-center font-medium text-gray-700">Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-200 text-blue-900 rounded hover:bg-blue-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevelopersListPage;
