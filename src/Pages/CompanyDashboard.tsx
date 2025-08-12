const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    dateTime: "2025-08-10 10:30 AM",
    about: "Looking for a skilled React developer to build user interfaces.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    applicants: 5,
  },
  {
    id: 2,
    title: "Backend Developer",
    dateTime: "2025-08-09 2:00 PM",
    about: "Node.js backend API development for a fintech project.",
    skills: ["Node.js", "Express", "MongoDB"],
    applicants: 8,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    dateTime: "2025-08-08 5:15 PM",
    about: "Designing beautiful and functional UI for our mobile app.",
    skills: ["Figma", "Adobe XD", "Wireframing"],
    applicants: 3,
  },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posted Jobs</h1>
      <div className="space-y-4">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <span className="text-sm text-gray-500">{job.dateTime}</span>
            </div>
            <p className="text-gray-700 mb-2">{job.about}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {job.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Applicants: <span className="font-bold">{job.applicants}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
