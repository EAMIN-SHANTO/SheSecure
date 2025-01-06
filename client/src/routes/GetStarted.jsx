import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from 'react';

const ScenarioCard = ({ image, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-48 bg-gray-100 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = '/shes.svg'; // Fallback to your logo if image fails to load
          e.target.className = 'w-full h-full object-contain p-4';
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
        Learn More 
        <span className="text-xl">→</span>
      </button>
    </div>
  </div>
);

const GetStarted = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useState(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resources...</p>
        </div>
      </div>
    );
  }

  const everydayScenarios = [
    {
      image: "/webdesign.jpg",
      title: "Social Media Privacy",
      description: "Learn how to protect your personal information on social media platforms and avoid common privacy pitfalls."
    },
    {
      image: "/featured4.jpeg",
      title: "Safe Online Shopping",
      description: "Discover secure payment methods and how to identify legitimate online stores from scams."
    },
    {
      image: "/userImg.jpeg",
      title: "Email Safety",
      description: "Recognize phishing attempts and learn how to keep your email communications secure."
    }
  ];

  const securityHandouts = [
    {
      image: "/logo.png",
      title: "Password Management",
      description: "Essential guide to creating and managing strong passwords, with recommended password manager tools."
    },
    {
      image: "/logose.png",
      title: "Two-Factor Authentication",
      description: "Step-by-step guide to setting up 2FA on your important accounts for enhanced security."
    },
    {
      image: "/womc.jpeg",
      title: "VPN Usage Guide",
      description: "Understanding VPNs and how they protect your online privacy, with setup instructions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Cybersecurity Learning Hub</h1>
            <p className="text-xl text-blue-100">
              Your journey to digital safety starts here. Explore practical guides and real-world scenarios.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Everyday Scenarios Section */}
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
              <Link to="/scenarios" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Scenarios →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {everydayScenarios.map((scenario, index) => (
                <ScenarioCard key={index} {...scenario} />
              ))}
            </div>
          </section>

          {/* Security Handouts Section */}
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
              <Link to="/security" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Guides →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityHandouts.map((handout, index) => (
                <ScenarioCard key={index} {...handout} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take Your Security to the Next Level?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community to get access to advanced tutorials, expert webinars, 
              and connect with other security-conscious women.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted; 