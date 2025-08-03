export default function TrustedBy() {
  const companies = [
    { name: "Google", icon: "ri-google-fill" },
    { name: "Microsoft", icon: "ri-microsoft-fill" },
    { name: "Amazon", icon: "ri-amazon-fill" },
    { name: "Meta", icon: "ri-meta-fill" },
    { name: "Apple", icon: "ri-apple-fill" },
    { name: "Netflix", icon: "ri-netflix-fill" },
    { name: "Spotify", icon: "ri-spotify-fill" },
    { name: "Uber", icon: "ri-uber-fill" },
    { name: "Airbnb", icon: "ri-airbnb-fill" },
    { name: "Tesla", icon: "ri-car-fill" },
    { name: "Nvidia", icon: "ri-cpu-fill" },
    { name: "OpenAI", icon: "ri-robot-fill" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted By</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading companies choose GTMotion for their AI talent needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <i className={`${company.icon} text-3xl text-gray-600`}></i>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Join 500+ companies that trust GTMotion for their AI hiring needs
          </p>
        </div>
      </div>
    </section>
  );
}
