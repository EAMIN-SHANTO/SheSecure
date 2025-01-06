import React from 'react';
import { Link } from "react-router-dom";

const ScenarioCard = ({ image, title, description }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.src = '/shes.svg';
        e.target.className = 'w-full h-full object-contain p-4';
      }}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <Link to="#" className="mt-4 text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
        Learn More <span>→</span>
      </Link>
    </div>
  </div>
);

const Learn = () => {
  console.log('Learn component rendered');
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-red-100 p-4 mb-4 rounded">
          Test: Learn Component Loaded
        </div>
        {/* Header Banner */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Cybersecurity Learning Hub</h1>
            <p className="text-xl text-blue-100">
              Your journey to digital safety starts here. Explore practical guides and real-world scenarios.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Everyday Online Scenarios Section */}
          <section className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Everyday Online Scenarios
                </h2>
                <p className="text-gray-600">
                  Learn how to stay safe in common online situations
                </p>
              </div>
              <Link 
                to="/scenarios" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Scenarios →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScenarioCard 
                image="/webdesign.jpg"
                title="Social Media Privacy"
                description="Learn how to protect your personal information on social media platforms and avoid common privacy pitfalls."
              />
              <ScenarioCard 
                image="/featured4.jpeg"
                title="Safe Online Shopping"
                description="Discover secure payment methods and how to identify legitimate online stores from scams."
              />
              <ScenarioCard 
                image="/userImg.jpeg"
                title="Email Safety"
                description="Recognize phishing attempts and learn how to keep your email communications secure."
              />
            </div>
          </section>

          {/* Security Essentials Section */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Security Essentials
                </h2>
                <p className="text-gray-600">
                  Practical guides and tools to enhance your digital security
                </p>
              </div>
              <Link 
                to="/security" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Guides →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScenarioCard 
                image="/webdesign.jpg"
                title="Password Management"
                description="Essential guide to creating and managing strong passwords, with recommended password manager tools."
              />
              <ScenarioCard 
                image="/featured4.jpeg"
                title="Two-Factor Authentication"
                description="Step-by-step guide to setting up 2FA on your important accounts for enhanced security."
              />
              <ScenarioCard 
                image="/userImg.jpeg"
                title="VPN Usage Guide"
                description="Understanding VPNs and how they protect your online privacy, with setup instructions."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Learn; 