export default function Development() {
  const phases = [
    {
      title: "Discovery & Research",
      description:
        "Deep dive into your business requirements and technical constraints",
      duration: "1-2 weeks",
      icon: "ri-search-line",
      color: "blue",
    },
    {
      title: "MVP Development",
      description: "Build and test your minimum viable AI solution",
      duration: "2-4 weeks",
      icon: "ri-code-line",
      color: "purple",
    },
    {
      title: "Production Deployment",
      description: "Scale, optimize, and deploy your AI solution to production",
      duration: "2-4 weeks",
      icon: "ri-rocket-line",
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Concept to Production
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined AI development process gets you from idea to market
            faster than ever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    phase.color === "blue"
                      ? "bg-blue-100"
                      : phase.color === "purple"
                      ? "bg-purple-100"
                      : "bg-green-100"
                  }`}
                >
                  <i
                    className={`${phase.icon} text-2xl ${
                      phase.color === "blue"
                        ? "text-blue-600"
                        : phase.color === "purple"
                        ? "text-purple-600"
                        : "text-green-600"
                    } w-8 h-8 flex items-center justify-center`}
                  ></i>
                </div>

                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>

                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    phase.color === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : phase.color === "purple"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                  {phase.duration}
                </div>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="ri-arrow-right-line text-gray-400 text-2xl w-8 h-8 flex items-center justify-center"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
