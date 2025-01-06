import React from 'react';
import { Link } from "react-router-dom";

const ModuleCard = ({ icon, title, description, progress }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {progress && (
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

const CampaignCard = ({ image, title, date, description }) => (
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
      <div className="text-sm text-blue-600 mb-2">{date}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const InteractiveLearning = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Interactive Learning Modules */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Interactive Learning Modules</h2>
          <p className="text-gray-600 mb-8">Master cybersecurity through hands-on learning experiences</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleCard 
              icon="🔒"
              title="Password Security"
              description="Learn about creating strong passwords and using password managers"
              progress={75}
            />
            <ModuleCard 
              icon="🛡️"
              title="Online Privacy"
              description="Protect your digital identity and personal information"
              progress={40}
            />
            <ModuleCard 
              icon="📱"
              title="Mobile Security"
              description="Secure your mobile devices and applications"
              progress={20}
            />
          </div>
        </div>
      </section>

      {/* Awareness Campaigns */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Awareness Campaigns & Updates</h2>
          <p className="text-gray-600 mb-8">Stay informed about the latest in cybersecurity</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CampaignCard 
              image="/webdesign.jpg"
              title="Cybersecurity Awareness Month"
              date="October 2023"
              description="Join our month-long campaign to enhance your digital security knowledge"
            />
            <CampaignCard 
              image="/featured4.jpeg"
              title="Social Engineering Workshop"
              date="Coming Soon"
              description="Learn to identify and prevent social engineering attacks"
            />
            <CampaignCard 
              image="/userImg.jpeg"
              title="Digital Privacy Week"
              date="November 2023"
              description="A week-long event focused on protecting your online privacy"
            />
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Community Engagement</h2>
          <p className="text-gray-600 mb-8">Connect with other security-conscious women</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upcoming Events */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Virtual Meetup: Cybersecurity Basics",
                    date: "Oct 15, 2023",
                    time: "3:00 PM EST"
                  },
                  {
                    title: "Workshop: Ethical Hacking",
                    date: "Oct 22, 2023",
                    time: "2:00 PM EST"
                  },
                  {
                    title: "Panel: Women in Cybersecurity",
                    date: "Oct 29, 2023",
                    time: "4:00 PM EST"
                  }
                ].map((event, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Join →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Networking */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Networking</h3>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Connect with mentors, peers, and industry experts in our growing community.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Find a Mentor
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Join Discussion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveLearning; 