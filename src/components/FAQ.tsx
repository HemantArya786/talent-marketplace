import { useState } from "react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does GTMotion vet AI talent?",
      answer:
        "Our rigorous vetting process includes technical assessments, portfolio reviews, live coding challenges, and reference checks. Only the top 3% of applicants make it through our screening process.",
    },
    {
      question: "What types of AI projects can I hire for?",
      answer:
        "You can hire for machine learning model development, computer vision applications, natural language processing, data science projects, AI automation, MLOps implementation, and custom AI solutions.",
    },
    {
      question: "How quickly can I find AI talent?",
      answer:
        "Most clients receive qualified candidate profiles within 24-48 hours. You can schedule interviews immediately and start projects within a week of posting your requirements.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "We offer flexible payment options including hourly rates, fixed-price projects, and milestone-based payments. All payments are secured through our escrow system for your protection.",
    },
    {
      question: "Do you provide ongoing project support?",
      answer:
        "Yes, we offer dedicated project managers, communication tools, progress tracking, and 24/7 support to ensure your AI projects run smoothly from start to finish.",
    },
    {
      question: "Can I hire talent for long-term projects?",
      answer:
        "Absolutely! Our platform supports both short-term projects and long-term engagements. Many clients build ongoing relationships with our AI experts for continuous development.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer:
        "We offer a satisfaction guarantee. If you're not happy with the delivered work, we'll work with you to find a solution, including reassigning the project to another qualified expert.",
    },
    {
      question: "Do you work with enterprise clients?",
      answer:
        "Yes, we have dedicated enterprise solutions including team scaling, custom vetting processes, compliance support, and dedicated account management for large organizations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about hiring AI talent
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <i
                  className={`ri-arrow-down-s-line w-5 h-5 flex items-center justify-center text-gray-500 transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
