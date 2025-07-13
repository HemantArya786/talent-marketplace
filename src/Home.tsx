// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const swiperModules = [Pagination, Autoplay];

  const aiAgents = [
    {
      id: 1,
      name: "DataMind Pro",
      description:
        "Advanced analytics and data processing AI agent that transforms complex datasets into actionable insights with machine learning algorithms",
      rating: 4.9,
      icon: "fas fa-brain",
      image:
        "https://readdy.ai/api/search-image?query=futuristic%20AI%20robot%20brain%20with%20glowing%20neural%20networks%20on%20clean%20white%20background%20minimalist%20tech%20design&width=300&height=200&seq=agent1&orientation=landscape",
    },
    {
      id: 2,
      name: "ContentCraft AI",
      description:
        "Creative writing and content generation specialist that produces high-quality articles, marketing copy, and creative content",
      rating: 4.8,
      icon: "fas fa-pen-fancy",
      image:
        "https://readdy.ai/api/search-image?query=creative%20AI%20writing%20assistant%20with%20floating%20text%20and%20digital%20pen%20on%20clean%20white%20background%20modern%20design&width=300&height=200&seq=agent2&orientation=landscape",
    },
    {
      id: 3,
      name: "CodeGenius",
      description:
        "Programming and software development AI that writes, debugs, and optimizes code across multiple programming languages",
      rating: 4.9,
      icon: "fas fa-code",
      image:
        "https://readdy.ai/api/search-image?query=AI%20coding%20assistant%20with%20floating%20code%20symbols%20and%20programming%20elements%20on%20clean%20white%20background%20tech%20style&width=300&height=200&seq=agent3&orientation=landscape",
    },
  ];

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      credentials: "PhD in Machine Learning",
      expertise: ["Deep Learning", "Neural Networks", "Computer Vision"],
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20Asian%20female%20AI%20researcher%20in%20modern%20office%20setting%20clean%20background%20portrait%20style&width=150&height=150&seq=expert1&orientation=squarish",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      credentials: "AI Strategy Consultant",
      expertise: ["Business AI", "Strategy", "Implementation"],
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20Hispanic%20male%20business%20consultant%20in%20suit%20clean%20office%20background%20portrait%20style&width=150&height=150&seq=expert2&orientation=squarish",
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      credentials: "NLP Research Director",
      expertise: ["Natural Language", "Conversational AI", "Linguistics"],
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20Caucasian%20female%20researcher%20with%20glasses%20in%20modern%20lab%20setting%20clean%20background%20portrait%20style&width=150&height=150&seq=expert3&orientation=squarish",
    },
  ];

  const companies = [
    { name: "TechCorp", icon: "fab fa-microsoft" },
    { name: "InnovateLab", icon: "fab fa-google" },
    { name: "DataFlow", icon: "fab fa-amazon" },
    { name: "AIVentures", icon: "fab fa-apple" },
    { name: "SmartSys", icon: "fab fa-meta" },
    { name: "FutureTech", icon: "fab fa-tesla" },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Readdy.ai has revolutionized how we approach AI integration in our business. The platform's intuitive interface and powerful agents have increased our productivity by 300% while reducing operational costs significantly.",
      author: "Jennifer Park",
      position: "CTO at InnovateNow",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20Asian%20female%20executive%20in%20business%20attire%20clean%20office%20background%20confident%20portrait&width=80&height=80&seq=testimonial1&orientation=squarish",
    },
    {
      id: 2,
      text: "The expert network on Readdy.ai connected us with world-class AI specialists who guided our digital transformation journey. Their insights were invaluable in implementing cutting-edge solutions.",
      author: "David Thompson",
      position: "CEO at DataDriven Solutions",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20Caucasian%20male%20CEO%20in%20business%20suit%20clean%20modern%20office%20background%20executive%20portrait&width=80&height=80&seq=testimonial2&orientation=squarish",
    },
    {
      id: 3,
      text: "From prototype to production, Readdy.ai's AI agents helped us accelerate development cycles and deliver exceptional results to our clients. The platform is a game-changer for any tech company.",
      author: "Maria Santos",
      position: "Product Manager at TechFlow",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20Latina%20female%20product%20manager%20in%20modern%20workspace%20clean%20background%20confident%20portrait&width=80&height=80&seq=testimonial3&orientation=squarish",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20abstract%20AI%20technology%20background%20with%20geometric%20shapes%20neural%20networks%20and%20flowing%20data%20streams%20in%20deep%20blue%20gradient%20professional%20tech%20aesthetic&width=1440&height=1024&seq=hero&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="font-poppins text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Unleash the Power of
            <span className="block text-blue-200">Artificial Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Connect with top AI agents, collaborate with world-class experts,
            and transform your business with cutting-edge artificial
            intelligence solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="!rounded-button whitespace-nowrap bg-white text-blue-900 hover:bg-blue-50 px-12 py-4 text-lg font-semibold cursor-pointer"
            >
              Get Started Free
              <i className="fas fa-arrow-right ml-3"></i>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!rounded-button whitespace-nowrap border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 text-lg font-semibold cursor-pointer"
            >
              Watch Demo
              <i className="fas fa-play ml-3"></i>
            </Button>
          </div>
          <div className="mt-16 flex justify-center items-center gap-8 text-blue-200">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div className="w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-80">AI Agents</div>
            </div>
            <div className="w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm opacity-80">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top AI Agents Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top AI Agents
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most powerful and popular AI agents designed to
              accelerate your workflow and boost productivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {aiAgents.map((agent) => (
              <Card
                key={agent.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <i className={`${agent.icon} text-blue-600 text-xl`}></i>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="font-poppins text-xl text-gray-900">
                    {agent.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < Math.floor(agent.rating) ? "" : "text-gray-300"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({agent.rating})
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {agent.description}
                  </CardDescription>
                  <Button className="!rounded-button whitespace-nowrap w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Try Now
                    <i className="fas fa-rocket ml-2"></i>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experts Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Experts
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with industry-leading AI specialists and researchers who
              can guide your AI transformation journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <Card
                key={expert.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="w-24 h-24 mx-auto border-4 border-blue-100">
                      <AvatarImage
                        src={expert.avatar}
                        alt={expert.name}
                        className="object-cover object-top"
                      />
                      <AvatarFallback className="bg-blue-600 text-white text-2xl font-bold">
                        {expert.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                  </div>
                  <CardTitle className="font-poppins text-xl text-gray-900">
                    {expert.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {expert.credentials}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {expert.expertise.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="!rounded-button whitespace-nowrap w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
                  >
                    Connect
                    <i className="fas fa-user-plus ml-2"></i>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies that trust Readdy.ai to power their AI
              initiatives and drive innovation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <i
                    className={`${company.icon} text-4xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300 mb-4`}
                  ></i>
                  <h3 className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {company.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="relative">
            <Swiper
              modules={swiperModules}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="text-center py-8">
                    <div className="mb-8">
                      <i className="fas fa-quote-left text-4xl text-blue-400 mb-6"></i>
                      <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto font-light">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-blue-400">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="object-cover object-top"
                        />
                        <AvatarFallback className="bg-blue-600 text-white font-bold">
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-blue-300">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20technology%20network%20background%20with%20connected%20nodes%20and%20flowing%20data%20streams%20in%20deep%20blue%20gradient%20modern%20digital%20aesthetic&width=1440&height=600&seq=cta&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Join over 50,000 companies already using Readdy.ai to accelerate
            their AI journey and unlock unprecedented growth opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="!rounded-button whitespace-nowrap bg-white text-blue-900 hover:bg-blue-50 px-16 py-6 text-xl font-semibold cursor-pointer"
            >
              Join Readdy.ai
              <i className="fas fa-rocket ml-3"></i>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!rounded-button whitespace-nowrap border-white text-white hover:bg-white hover:text-blue-900 px-16 py-6 text-xl font-semibold cursor-pointer"
            >
              Schedule Demo
              <i className="fas fa-calendar ml-3"></i>
            </Button>
          </div>
          <div className="flex justify-center items-center gap-12 text-blue-200">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-poppins text-2xl font-bold mb-6 text-blue-400">
                Readdy.ai
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering businesses with cutting-edge AI solutions and expert
                guidance for the future of work.
              </p>
              <div className="flex gap-4">
                <i className="fab fa-twitter text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"></i>
                <i className="fab fa-linkedin text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"></i>
                <i className="fab fa-github text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"></i>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    AI Agents
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Expert Network
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    API Access
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Readdy.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-paypal text-2xl"></i>
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
