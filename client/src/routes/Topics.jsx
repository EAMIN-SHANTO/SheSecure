import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ source, title, date, description, link, tag }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
  >
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm text-blue-600 font-medium">{source}</span>
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${tag === 'Critical' ? 'bg-red-100 text-red-700' : 
            tag === 'Warning' ? 'bg-yellow-100 text-yellow-700' : 
            'bg-green-100 text-green-700'}
        `}>
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  </a>
);

const ResourceCard = ({ icon, title, description, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </a>
);

const Topics = () => {
  const latestNews = [
    {
      source: "CISA",
      title: "Critical Infrastructure Security Alert",
      date: "2 hours ago",
      description: "New vulnerabilities discovered in industrial control systems affecting multiple sectors.",
      link: "https://www.cisa.gov/news",
      tag: "Critical"
    },
    {
      source: "NIST",
      title: "Updated Cybersecurity Framework",
      date: "1 day ago",
      description: "NIST releases updated cybersecurity framework with new privacy controls.",
      link: "https://www.nist.gov/cyberframework",
      tag: "Update"
    },
    {
      source: "US-CERT",
      title: "Ransomware Alert",
      date: "3 days ago",
      description: "New ransomware variant targeting healthcare organizations detected.",
      link: "https://www.us-cert.gov/ncas",
      tag: "Warning"
    }
  ];

  const resources = [
    {
      icon: "🛡️",
      title: "OWASP Top 10",
      description: "Learn about the most critical web application security risks.",
      link: "https://owasp.org/www-project-top-ten/"
    },
    {
      icon: "🔍",
      title: "CVE Database",
      description: "Search for known vulnerabilities and exposures.",
      link: "https://cve.mitre.org/"
    },
    {
      icon: "🎓",
      title: "Security Training",
      description: "Free cybersecurity training resources and courses.",
      link: "https://www.cybrary.it/"
    }
  ];

  const tools = [
    {
      icon: "🔒",
      title: "Have I Been Pwned",
      description: "Check if your email has been compromised in data breaches.",
      link: "https://haveibeenpwned.com/"
    },
    {
      icon: "🌐",
      title: "VirusTotal",
      description: "Analyze suspicious files, domains, IPs and URLs.",
      link: "https://www.virustotal.com/"
    },
    {
      icon: "🔐",
      title: "SSL Labs",
      description: "Test SSL/TLS configurations of websites.",
      link: "https://www.ssllabs.com/ssltest/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Cybersecurity Topics</h1>
          <p className="text-xl text-blue-100">
            Stay informed with the latest news, tools, and resources
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Latest News Section */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News & Alerts</h2>
              <p className="text-gray-600">Stay updated with recent cybersecurity incidents and alerts</p>
            </div>
            <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium">
              View All News →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Security Resources</h2>
            <p className="text-gray-600">Essential resources for cybersecurity knowledge</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Security Tools</h2>
            <p className="text-gray-600">Useful tools for security testing and monitoring</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <ResourceCard key={index} {...tool} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Topics; 