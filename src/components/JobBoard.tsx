import { Link } from "react-router-dom";

export default function JobBoard() {
  const jobs = [
    {
      title: "Senior Machine Learning Engineer",
      company: "TechFlow AI",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$180K - $250K",
      tags: ["Python", "TensorFlow", "AWS", "Deep Learning"],
      posted: "2 days ago",
      applicants: 23,
    },
    {
      title: "Computer Vision Specialist",
      company: "AutoDrive Corp",
      location: "Austin, TX",
      type: "Contract",
      salary: "$120/hr",
      tags: ["OpenCV", "PyTorch", "YOLO", "C++"],
      posted: "1 day ago",
      applicants: 15,
    },
    {
      title: "NLP Engineer",
      company: "ChatBot Solutions",
      location: "Remote",
      type: "Full-time",
      salary: "$150K - $200K",
      tags: ["BERT", "GPT", "Transformers", "Python"],
      posted: "3 days ago",
      applicants: 31,
    },
    {
      title: "Data Scientist",
      company: "FinTech Analytics",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140K - $180K",
      tags: ["Python", "R", "SQL", "Statistics"],
      posted: "1 day ago",
      applicants: 28,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Job Board</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI and machine learning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <i className="ri-map-pin-line"></i>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="ri-money-dollar-circle-line"></i>
                  <span>{job.salary}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {job.posted} • {job.applicants} applicants
                </div>
                <Link
                  to={`/job/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={"/jobs"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              View All Jobs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
