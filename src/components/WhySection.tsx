export default function WhySection() {
  const features = [
    {
      icon: "ri-user-star-line",
      title: "Dedicated hiring experts",
      description:
        "Count on an account manager to find you the right talent and see to your project's every need.",
    },
    {
      icon: "ri-shield-check-line",
      title: "Satisfaction guarantee",
      description:
        "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.",
    },
    {
      icon: "ri-tools-line",
      title: "Advanced management tools",
      description:
        "Seamlessly integrate freelancers into your team and projects.",
    },
    {
      icon: "ri-wallet-line",
      title: "Flexible payment models",
      description:
        "Pay per project or opt for hourly rates to facilitate longer-term collaboration.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              The <span className="text-green-600">premium</span> freelance
              solution for businesses
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-checkbox-circle-fill text-green-600 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                Try Now
              </button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Project Status Card */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <i className="ri-pie-chart-line text-gray-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Project Status
                    </h4>
                    <p className="text-sm text-gray-600">
                      92% | 4 steps out of 5
                    </p>
                  </div>
                </div>

                {/* Progress visualization */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>

              {/* Team collaboration image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20collaboration%20scene%20with%20two%20diverse%20women%20working%20together%20on%20laptop%20in%20modern%20office%20environment%2C%20one%20woman%20pointing%20at%20screen%20while%20other%20woman%20looks%20engaged%2C%20clean%20modern%20workspace%20with%20natural%20lighting%2C%20professional%20attire%2C%20teamwork%20and%20productivity%20atmosphere&width=500&height=300&seq=team-collab-001&orientation=landscape"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover object-top"
                />
              </div>

              {/* Revenue chart */}
              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">$8,900</h4>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>

                {/* Simple chart visualization */}
                <div className="flex items-end gap-2 h-16">
                  <div className="bg-green-400 w-4 h-8 rounded-t"></div>
                  <div className="bg-green-400 w-4 h-12 rounded-t"></div>
                  <div className="bg-green-400 w-4 h-10 rounded-t"></div>
                  <div className="bg-green-400 w-4 h-16 rounded-t"></div>
                  <div className="bg-green-400 w-4 h-14 rounded-t"></div>
                  <div className="bg-green-400 w-4 h-12 rounded-t"></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
