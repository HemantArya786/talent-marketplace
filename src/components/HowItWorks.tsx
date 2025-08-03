import { useState } from "react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("hiring");

  const hiringSteps = [
    {
      title: "Posting jobs is always free",
      description:
        "Post your AI project requirements and get matched with pre-vetted experts. No upfront costs, no hidden fees.",
      icon: "ri-add-circle-line",
    },
    {
      title: "Get proposals and hire",
      description:
        "Review detailed proposals from qualified AI experts. Chat with candidates, check portfolios, and make your choice.",
      icon: "ri-user-search-line",
    },
    {
      title: "Pay when work is done",
      description:
        "Secure milestone payments protected by escrow. Only pay when you're satisfied with the delivered results.",
      icon: "ri-secure-payment-line",
    },
  ];

  const expertSteps = [
    {
      title: "Create your expert profile",
      description:
        "Showcase your AI expertise, tech stack, and previous work. Complete our technical assessment to get verified.",
      icon: "ri-profile-line",
    },
    {
      title: "Get matched with projects",
      description:
        "Our AI algorithm matches you with relevant projects based on your skills, experience, and preferences.",
      icon: "ri-magic-line",
    },
    {
      title: "Work and get paid securely",
      description:
        "Collaborate with clients through our platform. Track milestones, communicate seamlessly, and receive payments on time.",
      icon: "ri-money-dollar-circle-line",
    },
  ];

  const currentSteps = activeTab === "hiring" ? hiringSteps : expertSteps;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How it works
          </h2>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("hiring")}
                className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "hiring"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                For hiring
              </button>
              <button
                onClick={() => setActiveTab("expert")}
                className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "expert"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                For finding work
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i
                    className={`${step.icon} text-green-600 w-6 h-6 flex items-center justify-center`}
                  ></i>
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
            {activeTab === "hiring"
              ? "Post Your First Job"
              : "Join as AI Expert"}
          </button>
        </div>
      </div>
    </section>
  );
}
