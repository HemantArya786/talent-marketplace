import { Link } from "react-router-dom";

export default function TalentCategories() {
  const categories = [
    {
      id: "machine-learning-engineers",
      title: "Machine Learning Engineers",
      description: "Deep learning, neural networks, model optimization",
      count: "2,847 engineers",
      icon: "ri-robot-line",
    },
    {
      id: "computer-vision-specialists",
      title: "Computer Vision Specialists",
      description: "Image recognition, object detection, video analysis",
      count: "1,923 engineers",
      icon: "ri-eye-line",
    },
    {
      id: "nlp-engineers",
      title: "NLP Engineers",
      description: "Language models, chatbots, text processing",
      count: "1,456 engineers",
      icon: "ri-message-3-line",
    },
    {
      id: "data-scientists",
      title: "Data Scientists",
      description: "Statistical analysis, predictive modeling, insights",
      count: "3,521 engineers",
      icon: "ri-bar-chart-line",
    },
    {
      id: "mlops-engineers",
      title: "MLOps Engineers",
      description: "Model deployment, monitoring, infrastructure",
      count: "987 engineers",
      icon: "ri-settings-3-line",
    },
    {
      id: "ai-researchers",
      title: "AI Researchers",
      description: "Cutting-edge research, publications, innovation",
      count: "672 engineers",
      icon: "ri-lightbulb-line",
    },
    {
      id: "deep-learning-engineers",
      title: "Deep Learning Engineers",
      description: "Neural architectures, transformers, generative AI",
      count: "1,789 engineers",
      icon: "ri-brain-line",
    },
    {
      id: "robotics-engineers",
      title: "Robotics Engineers",
      description: "Autonomous systems, ROS, sensor integration",
      count: "834 engineers",
      icon: "ri-robot-2-line",
    },
    {
      id: "ai-product-managers",
      title: "AI Product Managers",
      description: "Product strategy, AI implementation, roadmaps",
      count: "567 engineers",
      icon: "ri-product-hunt-line",
    },
    {
      id: "data-engineers",
      title: "Data Engineers",
      description: "Data pipelines, ETL, big data infrastructure",
      count: "2,198 engineers",
      icon: "ri-database-2-line",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Explore millions of pros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our specialized AI and ML talent across key domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <i className={`${category.icon} text-2xl text-green-600`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {category.description}
                </p>
                <div className="mt-auto">
                  <span className="text-green-600 font-medium text-sm">
                    {category.count}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
            Browse All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
