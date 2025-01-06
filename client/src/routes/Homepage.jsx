import React from 'react';
import { Link, useLocation } from "react-router-dom";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const CategoryLink = ({ to, icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`
        px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium
        transition-all relative
        ${isActive 
          ? 'bg-blue-50 text-blue-700' 
          : 'text-gray-700 hover:bg-gray-50'
        }
      `}
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                Empowering Women in{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Join our community of women learning and growing together in digital security. 
                Get access to resources, training, and support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/get-started"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/interactive-learning"
                  className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-3xl" />
              <img 
                src="/shes.svg" 
                alt="Cybersecurity Illustration" 
                className="relative w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="bg-white shadow-sm border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <nav className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              <CategoryLink to="/cyber-news" icon="🔔" text="Cyber News" />
              <CategoryLink to="/cyber-attacks" icon="⚠️" text="Cyber Attacks" />
              <CategoryLink to="/resources" icon="🛠️" text="Resources" />
              <CategoryLink to="/vulnerabilities" icon="🎯" text="Vulnerabilities" />
            </nav>

            <Link
              to="/learn"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 ml-4"
            >
              <span>Start Learning</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SheSecure?</h2>
            <p className="text-gray-600">
              We provide comprehensive cybersecurity education tailored for women entering the field
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🎯"
              title="Focused Learning"
              description="Structured courses designed specifically for beginners in cybersecurity"
            />
            <FeatureCard 
              icon="👥"
              title="Community Support"
              description="Connect with mentors and peers who share your passion for security"
            />
            <FeatureCard 
              icon="🛠️"
              title="Practical Skills"
              description="Hands-on exercises and real-world scenarios to build your expertise"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of women who are already part of our cybersecurity community
          </p>
          <Link 
            to="/get-started"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;