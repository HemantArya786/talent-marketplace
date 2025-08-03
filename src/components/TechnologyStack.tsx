export default function TechnologyStack() {
  const techCategories = [
    {
      title: "AI & Machine Learning",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      technologies: [
        {
          name: "GPT-4",
          description: "Language processing",
          icon: "ri-brain-line",
          color: "bg-green-100 text-green-800",
        },
        {
          name: "LangChain",
          description: "AI application framework",
          icon: "ri-links-line",
          color: "bg-blue-100 text-blue-800",
        },
        {
          name: "TensorFlow",
          description: "Machine learning",
          icon: "ri-cpu-line",
          color: "bg-purple-100 text-purple-800",
        },
        {
          name: "spaCy",
          description: "NLP processing",
          icon: "ri-translate-line",
          color: "bg-orange-100 text-orange-800",
        },
      ],
    },
    {
      title: "Backend & APIs",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      technologies: [
        {
          name: "Python",
          description: "Core backend language",
          icon: "ri-code-line",
          color: "bg-green-100 text-green-800",
        },
        {
          name: "FastAPI",
          description: "API framework",
          icon: "ri-rocket-line",
          color: "bg-red-100 text-red-800",
        },
        {
          name: "Node.js",
          description: "Runtime environment",
          icon: "ri-nodejs-line",
          color: "bg-yellow-100 text-yellow-800",
        },
        {
          name: "Redis",
          description: "Caching & sessions",
          icon: "ri-database-line",
          color: "bg-purple-100 text-purple-800",
        },
      ],
    },
    {
      title: "Frontend & UI",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      technologies: [
        {
          name: "React",
          description: "Frontend library",
          icon: "ri-reactjs-line",
          color: "bg-blue-100 text-blue-800",
        },
        {
          name: "Next.js",
          description: "React framework",
          icon: "ri-window-line",
          color: "bg-gray-100 text-gray-800",
        },
        {
          name: "Tailwind CSS",
          description: "Styling framework",
          icon: "ri-palette-line",
          color: "bg-cyan-100 text-cyan-800",
        },
        {
          name: "TypeScript",
          description: "Type-safe JavaScript",
          icon: "ri-file-text-line",
          color: "bg-blue-100 text-blue-800",
        },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      technologies: [
        {
          name: "AWS",
          description: "Cloud platform",
          icon: "ri-cloud-line",
          color: "bg-orange-100 text-orange-800",
        },
        {
          name: "Docker",
          description: "Containerization",
          icon: "ri-box-line",
          color: "bg-blue-100 text-blue-800",
        },
        {
          name: "Kubernetes",
          description: "Container orchestration",
          icon: "ri-settings-line",
          color: "bg-purple-100 text-purple-800",
        },
        {
          name: "PostgreSQL",
          description: "Primary database",
          icon: "ri-database-2-line",
          color: "bg-green-100 text-green-800",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Cutting-edge technologies and tools used to build this comprehensive
            AI-powered talent platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center`}
                      >
                        <i className={`${tech.icon} text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-green-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    Enterprise Security
                  </p>
                  <p className="text-sm text-gray-600">
                    SOC 2 Type II compliant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-speed-line text-blue-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">99.9% Uptime</p>
                  <p className="text-sm text-gray-600">
                    Highly available platform
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-global-line text-purple-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Global Scale</p>
                  <p className="text-sm text-gray-600">Serving 50+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
