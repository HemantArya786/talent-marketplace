import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your AI Projects?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of companies and AI professionals who trust GTMotion
          Talentspace
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to={"/hire-talent"}>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Find AI Talent
            </button>
          </Link>
          <Link to={"/apply"}>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Join as AI Expert
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-lightbulb-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-blue-100">
              Advanced algorithms match you with the perfect talent in real-time
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Rigorous Vetting</h3>
            <p className="text-blue-100">
              Multi-step screening process ensures only top-tier professionals
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-chat-3-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Seamless Collaboration
            </h3>
            <p className="text-blue-100">
              Built-in tools for communication, project management, and payments
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-100 mb-4">
            Join our community of 10,000+ AI professionals and 500+ companies
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to={"#"}
              className="text-white hover:text-blue-200 transition-colors"
            >
              About Us
            </Link>
            <Link
              to={"#"}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
            <Link
              to={"#"}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to={"#"}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
