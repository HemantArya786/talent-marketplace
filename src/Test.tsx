// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

// import React, { useState } from 'react';

const Test: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Readdy.ai?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect the world's best AI & GTM professionals with companies
              that need to scale fast and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Abstract%20digital%20network%20connections%20with%20AI%20brain%20neural%20pathways%2C%20modern%20tech%20illustration%2C%20clean%20minimalist%20design%2C%20blue%20and%20purple%20gradient%20background%2C%20high%20quality%20digital%20art&width=96&height=96&seq=feature-001&orientation=squarish"
                  alt="AI Talent"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Top AI Talent
              </h3>
              <p className="text-gray-600">
                Access vetted AI specialists, machine learning engineers, and
                data scientists ready to transform your business.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20marketing%20growth%20chart%20with%20upward%20trending%20arrows%2C%20professional%20business%20illustration%2C%20clean%20design%2C%20green%20and%20teal%20gradient%20background%2C%20high%20quality%20digital%20art&width=96&height=96&seq=feature-002&orientation=squarish"
                  alt="GTM Experts"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                GTM Experts
              </h3>
              <p className="text-gray-600">
                Connect with go-to-market strategists, growth hackers, and sales
                professionals who drive results.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Lightning%20fast%20speed%20concept%20with%20dynamic%20motion%20lines%2C%20modern%20tech%20illustration%2C%20clean%20minimalist%20design%2C%20orange%20and%20red%20gradient%20background%2C%20high%20quality%20digital%20art&width=96&height=96&seq=feature-003&orientation=squarish"
                  alt="Fast Matching"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Our AI-powered matching system connects you with the right
                talent in hours, not weeks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Verified Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-400">Average Match Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies and professionals who trust Readdy.ai
            for their talent needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Get Started as Company
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Join as Freelancer
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Readdy.ai</h3>
              <p className="text-gray-400 mb-4">
                Connecting top AI & GTM talent with companies that move fast.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-twitter text-gray-400 hover:text-white cursor-pointer text-xl"></i>
                <i className="fab fa-linkedin text-gray-400 hover:text-white cursor-pointer text-xl"></i>
                <i className="fab fa-github text-gray-400 hover:text-white cursor-pointer text-xl"></i>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">For Companies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Find Talent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Create Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Readdy.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Test;
