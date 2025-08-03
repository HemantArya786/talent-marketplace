import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Mitchell",
      role: "CTO at TechFlow",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20male%20executive%20CTO%20with%20modern%20corporate%20background%2C%20clean%20professional%20headshot%20with%20business%20suit%20and%20confident%20expression%2C%20contemporary%20office%20environment%20with%20subtle%20technology%20elements&width=300&height=300&seq=client-001&orientation=squarish",
      quote:
        "We hired a computer vision expert in 2 days. GTMotion saved us weeks of effort and delivered exactly what we needed.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Product Manager at DataCorp",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20female%20product%20manager%20with%20modern%20corporate%20background%2C%20clean%20professional%20headshot%20with%20business%20attire%20and%20warm%20smile%2C%20contemporary%20office%20environment%20with%20data%20visualization%20elements&width=300&height=300&seq=client-002&orientation=squarish",
      quote:
        "Their vetting process ensures quality—every time. The ML engineer we hired exceeded our expectations and delivered on schedule.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder at AI Startup",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20male%20startup%20founder%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20casual%20business%20attire%20and%20entrepreneurial%20expression%2C%20contemporary%20startup%20office%20environment&width=300&height=300&seq=client-003&orientation=squarish",
      quote:
        "The talent pool is incredible. We found a senior NLP engineer who helped us build our chatbot from scratch in record time.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Data at FinTech Inc",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20female%20data%20executive%20with%20modern%20corporate%20background%2C%20clean%20professional%20headshot%20with%20business%20attire%20and%20professional%20expression%2C%20contemporary%20office%20environment%20with%20financial%20technology%20elements&width=300&height=300&seq=client-004&orientation=squarish",
      quote:
        "GTMotion connected us with a data scientist who transformed our analytics. The platform made the entire process seamless.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "VP Engineering at ScaleUp",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20male%20VP%20of%20engineering%20with%20modern%20corporate%20background%2C%20clean%20professional%20headshot%20with%20business%20attire%20and%20technical%20leadership%20expression%2C%20contemporary%20office%20environment%20with%20engineering%20elements&width=300&height=300&seq=client-005&orientation=squarish",
      quote:
        "The quality of AI talent is outstanding. Our MLOps engineer set up our entire infrastructure in just 3 weeks.",
      rating: 5,
    },
    {
      name: "Lisa Johnson",
      role: "Director of Innovation at Enterprise Corp",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20female%20innovation%20director%20with%20modern%20corporate%20background%2C%20clean%20professional%20headshot%20with%20executive%20attire%20and%20visionary%20expression%2C%20contemporary%20office%20environment%20with%20innovation%20elements&width=300&height=300&seq=client-006&orientation=squarish",
      quote:
        "Working with GTMotion has been transformative. The AI researcher we hired is now leading our breakthrough projects.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What our clients say about working with our AI talent
          </p>
        </div>

        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <img
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover object-top"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center cursor-pointer"
              >
                <i className="ri-arrow-left-line text-xl text-gray-600"></i>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center cursor-pointer"
              >
                <i className="ri-arrow-right-line text-xl text-gray-600"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
