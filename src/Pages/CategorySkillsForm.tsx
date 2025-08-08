import { useState, useRef } from "react";
import axios from "axios";

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
  "Creative AI"];

const skillsData = {

  "Generative AI": [
    "Prompt Engineering",
    "LLM Engineering",
    "Fine-Tuning",
    "RAG Systems",
    "Conversational AI",
    "Diffusion Models",
    "GenAI Research",
    "Text Generation",
    "Image Generation",
    "Audio/Video Generation"
  ],
  "Machine Learning Engineering": [
    "Model Training",
    "Supervised Learning",
    "Unsupervised Learning",
    "Model Evaluation",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Model Deployment"
  ],
  "Natural Language Processing (NLP)": [
    "Text Classification",
    "Named Entity Recognition",
    "Tokenization",
    "Text Summarization",
    "Translation",
    "Sentiment Analysis",
    "Hugging Face Transformers"
  ],
  "Computer Vision": [
    "Image Classification",
    "Object Detection",
    "Semantic Segmentation",
    "Facial Recognition",
    "OCR",
    "OpenCV",
    "YOLO",
    "Transformers for Vision"
  ],
  "AI Infrastructure & MLOps": [
    "MLflow",
    "Kubeflow",
    "Docker",
    "Kubernetes",
    "CI/CD for ML",
    "Model Monitoring",
    "Data Versioning",
    "AWS SageMaker",
    "Vertex AI",
    "Azure ML"
  ],
  "Applied AI": [
    "AI for Healthcare",
    "AI in Finance",
    "Recommendation Systems",
    "Chatbots",
    "Voice Assistants",
    "Search Ranking",
    "Fraud Detection"
  ],
  "AI Research": [
    "Model Architectures",
    "Transfer Learning",
    "Reinforcement Learning",
    "Self-Supervised Learning",
    "Research Paper Implementation",
    "ArXiv Reading",
    "Benchmarking"
  ],
  "AI Product & Strategy": [
    "AI Product Management",
    "AI Roadmapping",
    "A/B Testing",
    "UX for AI",
    "AI Product Metrics",
    "Cross-functional Collaboration"
  ],
  "Ethical AI & Governance": [
    "Bias Detection",
    "Fairness in AI",
    "Explainable AI (XAI)",
    "Privacy-preserving AI",
    "AI Regulations",
    "Responsible AI",
    "Model Transparency"
  ],
  "Speech & Audio AI": [
    "Speech Recognition",
    "Voice Cloning",
    "Text-to-Speech",
    "Audio Classification",
    "Audio Generation",
    "ASR",
    "Whisper by OpenAI"
  ],
  "Data Engineering for AI": [
    "Data Cleaning",
    "Data Pipelines",
    "ETL for ML",
    "Data Lakes",
    "Apache Spark",
    "Feature Engineering",
    "BigQuery"
  ],
  "Robotics & Autonomous Systems": [
    "SLAM",
    "Path Planning",
    "Reinforcement Learning",
    "Computer Vision for Robotics",
    "ROS (Robot Operating System)"
  ],
  "Creative AI": [
    "AI Music Composition",
    "AI Art Generation",
    "Style Transfer",
    "Video Generation",
    "Creative Prompting",
    "Generative Design"
  ]

  // "GTM Expert": [
  //   "Market Research",
  //   "Product Positioning",
  //   "Lead Generation",
  //   "Sales Funnel Optimization",
  //   "SEO",
  //   "Content Marketing",
  //   "Paid Ads",
  //   "Customer Journey Mapping",
  //   "Partnership Strategy",
  //   "Brand Messaging",
  //   "Analytics",
  //   "Email Marketing",
  // ],
};

export default function CategorySkillsForm() {
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [accomplishments, setAccomplishments] = useState("");
  const [extracurricular, setExtracurricular] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [warning, setWarning] = useState("");

  const dropdownRef = useRef(null);

  const filteredSkills =
    category && skillsData[category]
      ? skillsData[category].filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : [];

  const handleSkillSelect = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      if (skills.length < 10) {
        setSkills([...skills, skill]);
        setWarning("");
      } else {
        setWarning("You can select a maximum of 10 skills.");
        setTimeout(() => setWarning(""), 2000);
      }
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      category,
      skills,
      accomplishments,
      extracurricular,
    };

    try {
      const res = await axios.put(
        "https://your-api-endpoint.com/update-profile", // replace with your API
        payload
      );
      console.log("Data saved:", res.data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.pexels.com/photos/7376/startup-photos.jpg?_gl=1*vs7dzp*_ga*MjExOTU2ODc1OS4xNzU0NjQwMjEy*_ga_8JE65Q40S6*czE3NTQ2NDI5MDQkbzIkZzEkdDE3NTQ2NDI5NTkkajUkbDAkaDA."
          alt="Form Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg space-y-5"
        >
          <h2 className="text-3xl font-bold mb-4">Fill Your Details</h2>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSkills([]);
              }}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select a category</option>
              {categoryOptions.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Skills Dropdown */}
          {category && (
            <div
              className="relative"
              ref={dropdownRef}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <label className="block mb-1 font-medium">Skills</label>
              <div
                className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer flex justify-between items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {skills.length > 0
                  ? `${skills.length} skill(s) selected`
                  : "Select skills"}
                <span className="text-gray-400">▼</span>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg animate-fadeIn max-h-56 overflow-y-auto">
                  <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-b border-gray-200 p-2 text-sm outline-none"
                  />
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSkillSelect(skill)}
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${skills.includes(skill) ? "bg-blue-100" : ""
                          }`}
                      >
                        {skill}
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-gray-400">
                      No skills found
                    </div>
                  )}
                </div>
              )}

              {/* Selected Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                  >
                    {s}
                    <button
                      type="button"
                      className="text-blue-500 hover:text-red-500"
                      onClick={() => handleRemoveSkill(s)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              {/* Warning Message */}
              {warning && (
                <p className="text-red-500 text-sm mt-1">{warning}</p>
              )}

              <p className="mt-1 text-sm text-gray-600">
                Selected Skills: {skills.length} / 10
              </p>
            </div>
          )}

          {/* Accomplishments */}
          <div>
            <label className="block mb-1 font-medium">Accomplishments</label>
            <textarea
              value={accomplishments}
              onChange={(e) => setAccomplishments(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              rows="3"
            ></textarea>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <label className="block mb-1 font-medium">
              Extracurricular Activities
            </label>
            <textarea
              value={extracurricular}
              onChange={(e) => setExtracurricular(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              rows="3"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex space-y-2 flex-col justify-between pt-4">

            <button
              type="submit"
              className="px-4  py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4    py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
              onClick={() => console.log("Skipped")}
            >
              Skip this page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
