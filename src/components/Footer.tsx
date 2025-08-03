import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link
              to={"/"}
              className="text-2xl font-bold text-blue-400 mb-4 inline-block"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              GTMotion
            </Link>
            <p className="text-gray-400 mb-6">
              The world's leading AI talent marketplace. Connect with vetted AI
              engineers, ML specialists, and data scientists.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                <i className="ri-youtube-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-twitter-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
              >
                <i className="ri-github-fill w-6 h-6 flex items-center justify-center text-2xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hire AI Talent
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Talent</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apply as Expert
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Find AI Jobs
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Talent Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Latest Jobs
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link
                to={"#"}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to={"#"}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to={"#"}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </Link>
              <Link
                to={"#"}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Accessibility
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              2024 GTMotion. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
