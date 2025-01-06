import React, { useState } from 'react';

const VideoCard = ({ videoId, title, description }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const RiskCard = ({ title, steps, icon }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <ul className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <span className="font-medium text-blue-600 shrink-0">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const KnowCyber = () => {
  // Sample video data
  const videos = [
    {
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "Social Media Privacy Tips",
      description: "Quick tips to protect your privacy on social media platforms"
    },
    {
      videoId: "8VFzHYtOARw",
      title: "Password Security Basics",
      description: "Essential knowledge about creating and managing secure passwords"
    },
    {
      videoId: "inWWhr5tnEA",
      title: "Phishing Attack Prevention",
      description: "How to identify and avoid common phishing attempts"
    }
  ];

  // Sample risk management data
  const riskManagement = [
    {
      icon: "🔒",
      title: "Account Security",
      steps: [
        "Enable Two-Factor Authentication on all accounts",
        "Use unique passwords for each service",
        "Regularly update security questions",
        "Monitor account activity for suspicious behavior"
      ]
    },
    {
      icon: "🛡️",
      title: "Device Protection",
      steps: [
        "Keep operating system and apps updated",
        "Install reliable antivirus software",
        "Enable device encryption",
        "Regular backup of important data"
      ]
    },
    {
      icon: "🌐",
      title: "Online Safety",
      steps: [
        "Use HTTPS-secured websites only",
        "Avoid public Wi-Fi for sensitive tasks",
        "Be cautious with email attachments",
        "Don't share personal information unnecessarily"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Know Your Cyber Security</h1>
          <p className="text-xl text-blue-100">
            Learn through quick videos and practical security steps
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Video Section */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Quick Security Tips
              </h2>
              <p className="text-gray-600">
                Watch these short videos to learn about everyday online security
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </section>

        {/* Risk Management Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Security Risk Management
            </h2>
            <p className="text-gray-600">
              Essential steps to protect yourself from cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskManagement.map((risk, index) => (
              <RiskCard key={index} {...risk} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowCyber; 