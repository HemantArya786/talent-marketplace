import { Link } from "react-router-dom";

export default function Solutions() {
  const solutions = [
    {
      title: "For Startups",
      description:
        "Access top AI talent without the overhead of full-time hires",
      features: [
        "Flexible engagement models",
        "Cost-effective solutions",
        "Rapid team scaling",
        "Expert guidance",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Modern%20startup%20office%20environment%20with%20young%20entrepreneurs%20and%20AI%20developers%20collaborating%20on%20innovative%20technology%20projects%2C%20open%20workspace%20with%20laptops%20and%20whiteboards%2C%20creative%20and%20energetic%20atmosphere%20with%20contemporary%20design%20elements&width=600&height=400&seq=startup-001&orientation=landscape",
    },
    {
      title: "For Enterprises",
      description:
        "Scale your AI initiatives with enterprise-grade talent solutions",
      features: [
        "Dedicated account management",
        "Bulk hiring capabilities",
        "Custom vetting processes",
        "SLA guarantees",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Professional%20enterprise%20office%20environment%20with%20corporate%20executives%20and%20AI%20specialists%20in%20formal%20meeting%20discussing%20technology%20strategy%2C%20modern%20conference%20room%20with%20presentation%20displays%20and%20business%20charts%2C%20sophisticated%20corporate%20atmosphere&width=600&height=400&seq=enterprise-001&orientation=landscape",
    },
    {
      title: "For Mid-size Companies",
      description: "Perfect balance of quality talent and budget efficiency",
      features: [
        "Curated talent pools",
        "Project-based engagement",
        "Quality assurance",
        "Ongoing support",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Mid-size%20company%20office%20with%20diverse%20team%20of%20professionals%20working%20on%20AI%20and%20data%20science%20projects%2C%20collaborative%20workspace%20with%20modern%20technology%20and%20team%20members%20engaged%20in%20productive%20discussions%2C%20professional%20yet%20approachable%20environment&width=600&height=400&seq=midsize-001&orientation=landscape",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Talent Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored AI hiring solutions for companies of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <i className="ri-checkbox-circle-fill text-blue-600"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={"/consultation"}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={"/consultation"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
