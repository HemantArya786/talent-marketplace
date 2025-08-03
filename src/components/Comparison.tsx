// import { useState } from 'react';

export default function Comparison() {
  // const [showMore, setShowMore] = useState(false);

  const mainPoints = [
    {
      criteria: "Speed to Hire",
      traditional: "Slow (2-6 weeks avg)",
      freelancer: "Fast (1-2 weeks)",
      gtmotion: "2-5 days with AI-matching and verified availability",
      icon: "ri-star-fill",
      color: "blue-600",
    },
    {
      criteria: "Talent Quality",
      traditional: "Mixed; depends on agency bench",
      freelancer: "Variable; hard to verify claims",
      gtmotion: "Pre-vetted AI experts with proven GitHub, models, and certs",
      icon: "ri-checkbox-circle-fill",
      color: "green-600",
    },
    {
      criteria: "AI Specialization",
      traditional: "Rarely deep AI expertise",
      freelancer: "Generic freelancers with limited AI focus",
      gtmotion: "Focused only on LLM, NLP, CV, RAG, MLOps engineers",
      icon: "ri-medal-fill",
      color: "yellow-600",
    },
    {
      criteria: "Pricing Transparency",
      traditional: "Hidden margins",
      freelancer: "Transparent but low accountability",
      gtmotion:
        "Milestone-based transparent pricing with AI proposal assistant",
      icon: "ri-price-tag-3-fill",
      color: "purple-600",
    },
    {
      criteria: "Delivery Support",
      traditional: "Project managers assigned",
      freelancer: "Self-managed",
      gtmotion: "Sprint management, AI task assistant, milestone dashboards",
      icon: "ri-checkbox-circle-fill",
      color: "green-600",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            We ship working AI in weeks while consultants are still writing
            proposals
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A.Team combines lean teams of AI experts with pre-built
            infrastructure that accelerates your path to value with AI.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 overflow-x-auto">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-4 gap-6">
              {/* Headers */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Criteria
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Traditional Agency
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Freelancer Platform
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  GTMotion Talentspace
                </h3>
              </div>

              {/* Dynamic rows */}
              {mainPoints.map((point, index) => (
                <div key={index} className="contents">
                  <div className="py-4 border-b border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {point.criteria}
                    </h4>
                  </div>
                  <div className="py-4 border-b border-gray-200">
                    <p className="text-sm text-gray-700">{point.traditional}</p>
                  </div>
                  <div className="py-4 border-b border-gray-200">
                    <p className="text-sm text-gray-700">{point.freelancer}</p>
                  </div>
                  <div className="py-4 border-b border-gray-200 flex items-center gap-2">
                    <i
                      className={`${point.icon} text-${point.color} w-4 h-4 flex items-center justify-center`}
                    ></i>
                    <p className="text-sm text-gray-900 font-medium">
                      {point.gtmotion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
            Get Started with GTMotion
          </button>
        </div>
      </div>
    </section>
  );
}
