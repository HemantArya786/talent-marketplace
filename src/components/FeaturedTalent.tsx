import { useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedTalent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const talents = [
    {
      name: "Sarah Chen",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Asian%20female%20AI%20engineer%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20confident%20smile%2C%20contemporary%20office%20environment%20with%20subtle%20technology%20elements&width=300&height=300&seq=talent-001&orientation=squarish",
      specialization: "Machine Learning Engineer",
      experience: "8+ years",
      companies: ["Google", "Tesla", "NVIDIA"],
      rating: 4.9,
      reviews: 47,
      techStack: [
        {
          name: "TensorFlow",
          logo: "https://readdy.ai/api/search-image?query=TensorFlow%20logo%20icon%2C%20orange%20and%20white%20official%20brand%20colors%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=tf-logo&orientation=squarish",
        },
        {
          name: "PyTorch",
          logo: "https://readdy.ai/api/search-image?query=PyTorch%20logo%20icon%2C%20orange%20flame%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=pytorch-logo&orientation=squarish",
        },
        {
          name: "OpenCV",
          logo: "https://readdy.ai/api/search-image?query=OpenCV%20logo%20icon%2C%20blue%20and%20green%20colors%2C%20computer%20vision%20library%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=opencv-logo&orientation=squarish",
        },
        {
          name: "Keras",
          logo: "https://readdy.ai/api/search-image?query=Keras%20logo%20icon%2C%20red%20neural%20network%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=keras-logo&orientation=squarish",
        },
      ],
      description:
        "AI/ML expert specialized in computer vision and autonomous systems. Led ML initiatives at major tech companies.",
    },
    {
      name: "Marcus Rodriguez",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Hispanic%20male%20data%20scientist%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20glasses%20and%20confident%20expression%2C%20contemporary%20office%20environment%20with%20data%20visualization%20elements&width=300&height=300&seq=talent-002&orientation=squarish",
      specialization: "Data Scientist",
      experience: "6+ years",
      companies: ["Netflix", "Spotify", "Uber"],
      rating: 4.8,
      reviews: 62,
      techStack: [
        {
          name: "Python",
          logo: "https://readdy.ai/api/search-image?query=Python%20programming%20language%20logo%20icon%2C%20blue%20and%20yellow%20snake%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=python-logo&orientation=squarish",
        },
        {
          name: "R",
          logo: "https://readdy.ai/api/search-image?query=R%20programming%20language%20logo%20icon%2C%20blue%20R%20letter%20symbol%2C%20statistical%20computing%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=r-logo&orientation=squarish",
        },
        {
          name: "Tableau",
          logo: "https://readdy.ai/api/search-image?query=Tableau%20logo%20icon%2C%20blue%20and%20white%20data%20visualization%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=tableau-logo&orientation=squarish",
        },
        {
          name: "Apache Spark",
          logo: "https://readdy.ai/api/search-image?query=Apache%20Spark%20logo%20icon%2C%20orange%20lightning%20bolt%20symbol%2C%20big%20data%20processing%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=spark-logo&orientation=squarish",
        },
      ],
      description:
        "Senior data scientist with expertise in predictive modeling and business intelligence. Built recommendation systems at scale.",
    },
    {
      name: "Emily Johnson",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Caucasian%20female%20NLP%20engineer%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20friendly%20expression%2C%20contemporary%20office%20environment%20with%20AI%20technology%20elements&width=300&height=300&seq=talent-003&orientation=squarish",
      specialization: "NLP Engineer",
      experience: "7+ years",
      companies: ["OpenAI", "Microsoft", "Meta"],
      rating: 5.0,
      reviews: 38,
      techStack: [
        {
          name: "Transformers",
          logo: "https://readdy.ai/api/search-image?query=Hugging%20Face%20Transformers%20logo%20icon%2C%20yellow%20and%20blue%20colors%2C%20AI%20language%20model%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=transformers-logo&orientation=squarish",
        },
        {
          name: "BERT",
          logo: "https://readdy.ai/api/search-image?query=BERT%20NLP%20model%20logo%20icon%2C%20Google%20AI%20colors%2C%20natural%20language%20processing%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=bert-logo&orientation=squarish",
        },
        {
          name: "spaCy",
          logo: "https://readdy.ai/api/search-image?query=spaCy%20NLP%20library%20logo%20icon%2C%20blue%20and%20white%20colors%2C%20natural%20language%20processing%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=spacy-logo&orientation=squarish",
        },
        {
          name: "LangChain",
          logo: "https://readdy.ai/api/search-image?query=LangChain%20logo%20icon%2C%20chain%20link%20symbol%2C%20LLM%20framework%2C%20green%20and%20blue%20colors%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=langchain-logo&orientation=squarish",
        },
      ],
      description:
        "NLP specialist with focus on conversational AI and language models. Built enterprise chatbots and AI assistants.",
    },
    {
      name: "David Kumar",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Indian%20male%20computer%20vision%20specialist%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20confident%20smile%2C%20contemporary%20office%20environment%20with%20computer%20vision%20technology%20elements&width=300&height=300&seq=talent-004&orientation=squarish",
      specialization: "Computer Vision Specialist",
      experience: "10+ years",
      companies: ["Tesla", "Waymo", "Apple"],
      rating: 4.9,
      reviews: 55,
      techStack: [
        {
          name: "OpenCV",
          logo: "https://readdy.ai/api/search-image?query=OpenCV%20logo%20icon%2C%20blue%20and%20green%20colors%2C%20computer%20vision%20library%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=opencv-logo-2&orientation=squarish",
        },
        {
          name: "YOLO",
          logo: "https://readdy.ai/api/search-image?query=YOLO%20object%20detection%20logo%20icon%2C%20yellow%20and%20black%20colors%2C%20real-time%20detection%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=yolo-logo&orientation=squarish",
        },
        {
          name: "MediaPipe",
          logo: "https://readdy.ai/api/search-image?query=MediaPipe%20Google%20logo%20icon%2C%20blue%20and%20green%20colors%2C%20computer%20vision%20framework%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=mediapipe-logo&orientation=squarish",
        },
        {
          name: "TensorRT",
          logo: "https://readdy.ai/api/search-image?query=NVIDIA%20TensorRT%20logo%20icon%2C%20green%20and%20black%20colors%2C%20AI%20inference%20optimization%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=tensorrt-logo&orientation=squarish",
        },
      ],
      description:
        "Computer vision expert with 10+ years experience in autonomous vehicles and medical imaging systems.",
    },
    {
      name: "Lisa Wang",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Asian%20female%20MLOps%20engineer%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20confident%20expression%2C%20contemporary%20office%20environment%20with%20cloud%20infrastructure%20elements&width=300&height=300&seq=talent-005&orientation=squarish",
      specialization: "MLOps Engineer",
      experience: "5+ years",
      companies: ["Amazon", "Uber", "Airbnb"],
      rating: 4.8,
      reviews: 43,
      techStack: [
        {
          name: "Kubernetes",
          logo: "https://readdy.ai/api/search-image?query=Kubernetes%20logo%20icon%2C%20blue%20wheel%20symbol%2C%20container%20orchestration%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=k8s-logo&orientation=squarish",
        },
        {
          name: "Docker",
          logo: "https://readdy.ai/api/search-image?query=Docker%20logo%20icon%2C%20blue%20whale%20symbol%2C%20containerization%20platform%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=docker-logo&orientation=squarish",
        },
        {
          name: "MLflow",
          logo: "https://readdy.ai/api/search-image?query=MLflow%20logo%20icon%2C%20blue%20and%20orange%20colors%2C%20machine%20learning%20lifecycle%20management%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=mlflow-logo&orientation=squarish",
        },
        {
          name: "AWS",
          logo: "https://readdy.ai/api/search-image?query=Amazon%20AWS%20logo%20icon%2C%20orange%20and%20blue%20colors%2C%20cloud%20computing%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=aws-logo&orientation=squarish",
        },
      ],
      description:
        "MLOps specialist focused on scalable ML infrastructure and model deployment. Built production ML pipelines at scale.",
    },
    {
      name: "James Thompson",
      photo:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Caucasian%20male%20AI%20researcher%20with%20modern%20tech%20background%2C%20clean%20professional%20headshot%20with%20intellectual%20expression%2C%20contemporary%20office%20environment%20with%20research%20and%20academic%20elements&width=300&height=300&seq=talent-006&orientation=squarish",
      specialization: "AI Researcher",
      experience: "12+ years",
      companies: ["Stanford", "DeepMind", "OpenAI"],
      rating: 5.0,
      reviews: 29,
      techStack: [
        {
          name: "JAX",
          logo: "https://readdy.ai/api/search-image?query=JAX%20Google%20logo%20icon%2C%20blue%20and%20yellow%20colors%2C%20machine%20learning%20research%20framework%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=jax-logo&orientation=squarish",
        },
        {
          name: "Weights & Biases",
          logo: "https://readdy.ai/api/search-image?query=Weights%20and%20Biases%20wandb%20logo%20icon%2C%20yellow%20and%20black%20colors%2C%20ML%20experiment%20tracking%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=wandb-logo&orientation=squarish",
        },
        {
          name: "Ray",
          logo: "https://readdy.ai/api/search-image?query=Ray%20distributed%20computing%20logo%20icon%2C%20blue%20and%20orange%20colors%2C%20scalable%20ML%20framework%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=ray-logo&orientation=squarish",
        },
        {
          name: "Gymnasium",
          logo: "https://readdy.ai/api/search-image?query=Gymnasium%20OpenAI%20Gym%20logo%20icon%2C%20blue%20and%20white%20colors%2C%20reinforcement%20learning%20environment%20symbol%2C%20clean%20minimal%20design%20on%20white%20background&width=32&height=32&seq=gym-logo&orientation=squarish",
        },
      ],
      description:
        "AI researcher with 15+ publications and PhD from Stanford. Expertise in reinforcement learning and neural architecture search.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(talents.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(talents.length / 3)) %
        Math.ceil(talents.length / 3)
    );
  };

  const visibleTalents = talents.slice(
    currentIndex * 3,
    (currentIndex + 1) * 3
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured AI Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our top-rated AI engineers and data scientists
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTalents.map((talent, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={talent.photo}
                    alt={talent.name}
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{talent.name}</h3>
                    <p className="text-gray-600">{talent.specialization}</p>
                    <p className="text-sm text-blue-600 font-medium">
                      {talent.experience} experience
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {talent.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Previous Companies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {talent.companies.map((company, companyIndex) => (
                      <span
                        key={companyIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {talent.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg"
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-sm text-blue-800 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`ri-star-fill ${
                            i < Math.floor(talent.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {talent.rating} ({talent.reviews} reviews)
                    </span>
                  </div>
                </div>

                <Link
                  to={`/talent/${talent.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                    View Profile
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl text-gray-600"></i>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(talents.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )
              )}
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
    </section>
  );
}
