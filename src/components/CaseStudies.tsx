import { useState } from "react";

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "AI for Civil Engineering",
      category: "TRI Reporting Assistant",
      description:
        "Free your engineers from tedious tasks to focus on high-value problem-solving.",
      features: [
        "Automated report generation",
        "Real-time data processing",
        "Compliance monitoring",
        "Risk assessment analytics",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Modern%20civil%20engineering%20dashboard%20interface%20with%20clean%20white%20background%2C%20professional%20data%20visualization%20charts%20and%20graphs%2C%20construction%20project%20analytics%2C%20technical%20drawings%20and%20blueprints%2C%20minimalist%20design%20with%20blue%20and%20gray%20color%20scheme%2C%20engineering%20workflow%20automation%20tools&width=600&height=400&seq=case-001&orientation=landscape",
      icon: "ri-building-line",
      color: "blue",
    },
    {
      title: "AI for Marketing",
      category: "Performance Optimization",
      description:
        "Get actionable insights in seconds through the tools you already use.",
      features: [
        "Campaign performance tracking",
        "Customer behavior analysis",
        "Automated A/B testing",
        "ROI optimization",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Marketing%20analytics%20dashboard%20with%20clean%20white%20background%2C%20colorful%20performance%20charts%20and%20graphs%2C%20campaign%20metrics%20visualization%2C%20conversion%20funnel%20analysis%2C%20modern%20UI%20design%20with%20purple%20and%20pink%20gradients%2C%20marketing%20automation%20tools&width=600&height=400&seq=case-002&orientation=landscape",
      icon: "ri-line-chart-line",
      color: "purple",
    },
    {
      title: "AI for Investment Firms",
      category: "Portfolio Reporting",
      description:
        "Automate tedious analysis workflows and maximize portfolio returns.",
      features: [
        "Portfolio performance tracking",
        "Risk assessment models",
        "Market trend analysis",
        "Automated reporting",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Financial%20investment%20dashboard%20with%20clean%20white%20background%2C%20professional%20portfolio%20charts%20and%20graphs%2C%20market%20analysis%20visualization%2C%20investment%20performance%20metrics%2C%20modern%20fintech%20UI%20design%20with%20green%20and%20blue%20color%20scheme%2C%20trading%20analytics%20tools&width=600&height=400&seq=case-003&orientation=landscape",
      icon: "ri-funds-line",
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built on Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real AI solutions delivered by our expert talent for leading
            companies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Case study content */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeCase === index
                    ? "bg-white shadow-lg border-2 border-blue-200"
                    : "bg-white/50 hover:bg-white hover:shadow-md"
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      study.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : study.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    <i className={`${study.icon} text-xl`}></i>
                  </div>

                  <div className="flex-1">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                        study.color === "blue"
                          ? "bg-blue-100 text-blue-700"
                          : study.color === "purple"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      <i className="ri-arrow-right-line"></i>
                      {study.category}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>

                    <p className="text-gray-600 mb-4">{study.description}</p>

                    {activeCase === index && (
                      <div className="space-y-2">
                        {study.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <i
                              className={`ri-check-line text-${study.color}-600`}
                            ></i>
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[500px]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Custom AI agents.
                </h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Growth drivers.
                </h4>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  Efficiency makers.
                </h5>
                <p className="text-gray-600 mb-8">
                  Intelligent assistants that automate complex processes,
                  extract insights from unstructured data, help predict
                  outcomes, and more.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Explore AI Solutions
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].title}
                  className="w-full h-64 object-cover object-top transition-all duration-500"
                />
              </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-4">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeCase === index
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to build your custom AI solution?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
