import { useState } from "react";
import { Link } from "react-router-dom";

export default function AIExpertMatching() {
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const availableTags = [
    "Deployment",
    "Bug Fixing",
    "Backend & Database Integration",
    "Production-ready",
    "Design Improvements",
    "API Integration",
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Data Analysis",
    "Mobile App",
    "Web Development",
  ];

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleGenerateBrief = async () => {
    if (!projectDescription.trim()) return;

    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // Here you would typically redirect to results or show matching experts
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Take your no-code, AI projects to the finish line
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get matched with the right expert to turn your prototype into a
            real, working product.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="I'm working on a project in LOVABLE and would like expert support on..."
              className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              maxLength={500}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">
                We'll translate your description into an English brief.
              </p>
              <span className="text-sm text-gray-400">
                {projectDescription.length}/500
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-4">
              Select relevant tags to help us find the perfect expert:
            </p>
            <div className="flex flex-wrap gap-3">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedTags.includes(tag)
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleGenerateBrief}
              disabled={!projectDescription.trim() || isGenerating}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                !projectDescription.trim() || isGenerating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <i className="ri-magic-line text-lg"></i>
                  Generate brief
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <i className="ri-brain-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                AI-Powered Matching
              </h3>
              <p className="text-sm text-gray-600">
                Our AI analyzes your project and finds the perfect expert match
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <i className="ri-shield-check-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Vetted Experts
              </h3>
              <p className="text-sm text-gray-600">
                All experts are thoroughly screened and verified
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <i className="ri-time-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Fast Turnaround
              </h3>
              <p className="text-sm text-gray-600">
                Get matched within 24 hours and start your project
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Join 1,000+ companies that have successfully launched their AI
            projects
          </p>
          <Link to={"/success-stories"}>
            <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
              View Success Stories →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
