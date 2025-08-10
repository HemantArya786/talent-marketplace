import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
};

export default function CategorySkillsForm() {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [accomplishments, setAccomplishments] = useState("");
  const [extracurricular, setExtracurricular] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSkillDropdownOpen, setIsSkillDropdownOpen] = useState(false);
  const [warning, setWarning] = useState("");

  const combinedSkills = selectedCategories.flatMap(
    (cat) => skillsData[cat] || []
  );
  const uniqueSkills = [...new Set(combinedSkills)];
  const filteredSkills = uniqueSkills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
      setSkills((prev) =>
        prev.filter((s) => !(skillsData[category] || []).includes(s))
      );
    } else {
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, category]);
      } else {
        setIsCategoryDropdownOpen(false)
        setWarning("You can select a maximum of 3 categories.");
        setTimeout(() => setWarning(""), 2000);
      }
    }
  };

  const handleSkillSelect = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      if (skills.length < 10) {
        setSkills([...skills, skill]);
        setWarning("");
      } else {
        setIsSkillDropdownOpen(false)
        setWarning("You can select a maximum of 10 skills.");
        setTimeout(() => setWarning(""), 2000);
      }
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const navigate = useNavigate()
  const { userId } = useParams()

  useEffect(() => {

    const fetchData = async () => {

      const res = await fetch(`http://localhost:3000/api/users/${userId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json"
          }
        }
      )

      const data = await res.json()
      console.log(data);

      setSelectedCategories(data.categories)
      setAccomplishments(data.accomplishments)
      setExtracurricular(data.extraCurricular)
      setSkills(data.skills)
    }
    fetchData()
  }, [userId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      categories: selectedCategories,
      skills,
      accomplishments,
      extracurricular,
    };

    try {
      await axios.put(`http://localhost:3000/api/users/${userId}`, payload);

      alert("Categories and skills added successfully!");
      console.log(payload);
      navigate(`/developer/experience-details/${userId}`)

    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen ">
      {/* Left Side */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.pexels.com/photos/7376/startup-photos.jpg"
          alt="Form Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center  justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full  bg-white space-y-5"
        >
          <h2 className="text-3xl font-bold mb-4">Fill Your Details</h2>

          {/* Category Multi-Select */}
          <div
            className="relative"
            onMouseLeave={() => setIsCategoryDropdownOpen(false)}
          >
            <label className="block mb-1 font-medium">Categories</label>
            <div
              className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer flex justify-between items-center"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              {selectedCategories.length > 0
                ? `${selectedCategories.length} category(ies) selected`
                : "Select categories"}
              <span className="text-gray-400">▼</span>
            </div>

            {isCategoryDropdownOpen && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                {categoryOptions.map((cat, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategorySelect(cat)}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}

            {/* Fixed space for warning */}
            <div className="min-h-[20px]">
              {warning && <p className="text-red-500 text-sm">{warning}</p>}
            </div>

          </div>

          {/* Skills Multi-Select */}
          {selectedCategories.length > 0 && (
            <div
              className="relative"
              onMouseLeave={() => setIsSkillDropdownOpen(false)}
            >
              <label className="block mb-1 font-medium">Skills</label>
              <div
                className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer flex justify-between items-center"
                onClick={() => setIsSkillDropdownOpen(!isSkillDropdownOpen)}
              >
                {skills.length > 0
                  ? `${skills.length} skill(s) selected`
                  : "Select skills"}
                <span className="text-gray-400">▼</span>
              </div>

              {isSkillDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto">
                  <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-b border-gray-200 p-2 text-sm outline-none"
                  />
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        <input
                          type="checkbox"
                          checked={skills.includes(skill)}
                          onChange={() => handleSkillSelect(skill)}
                        />
                        {skill}
                      </label>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-gray-400">No skills found</div>
                  )}
                </div>
              )}

              {/* Selected Skills */}
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

              {/* Fixed space for warnings */}
              <div className="min-h-[20px]">
                {warning && <p className="text-red-500 text-sm">{warning}</p>}
              </div>

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

          {/* Extracurricular */}
          <div>
            <label className="block mb-1 font-medium">Extracurricular Activities</label>
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
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
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
