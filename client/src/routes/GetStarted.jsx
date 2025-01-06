import React from 'react';
import { Link } from "react-router-dom";

const GetStarted = () => {
  console.log('GetStarted component rendered');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-100 p-4 mb-4 rounded">
          Test: GetStarted Component Loaded
        </div>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 rounded-xl mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Get Started with Cybersecurity</h1>
            <p className="text-xl text-blue-100">
              Begin your journey to becoming cyber-secure with our step-by-step guide
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3">
                <span className="text-2xl">1</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Assessment
                </h2>
                <p className="text-gray-600 mb-4">
                  Take our security assessment to understand your current security posture
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                  Start Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Add more steps as needed */}
        </div>
      </div>
    </div>
  );
};

export default GetStarted; 