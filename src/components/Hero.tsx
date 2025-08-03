import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20environment%20with%20diverse%20team%20of%20AI%20engineers%20and%20data%20scientists%20working%20on%20advanced%20technology%20projects%2C%20futuristic%20workspace%20with%20multiple%20monitors%20displaying%20machine%20learning%20algorithms%20and%20data%20visualizations%2C%20clean%20contemporary%20design%20with%20blue%20and%20purple%20lighting%2C%20professional%20atmosphere%20suitable%20for%20tech%20startup%20or%20enterprise%20setting&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Top AI Engineers, On-Demand
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
          Hire vetted AI developers, ML engineers, and data scientists for your
          next big project — fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to={"/hire-talent"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Hire Talent
            </button>
          </Link>
          <Link to={"/apply"}>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Apply as AI Expert
            </button>
          </Link>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap cursor-pointer">
              Find talent
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium whitespace-nowrap cursor-pointer">
              Browse jobs
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search by role, skills, or keywords"
              className="w-full px-6 py-4 pr-20 rounded-lg border border-gray-300 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium whitespace-nowrap cursor-pointer flex items-center gap-2">
              <i className="ri-search-line"></i>
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <i className="ri-microsoft-fill w-8 h-8 flex items-center justify-center text-2xl"></i>
              <span>Microsoft</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-building-line w-8 h-8 flex items-center justify-center text-2xl"></i>
              <span>Airbnb</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-building-2-line w-8 h-8 flex items-center justify-center text-2xl"></i>
              <span>Enterprise</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-global-line w-8 h-8 flex items-center justify-center text-2xl"></i>
              <span>Glassdoor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
