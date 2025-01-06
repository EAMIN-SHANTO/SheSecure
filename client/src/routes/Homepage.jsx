import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Unified Navigation */}
      <header className="bg-[#F0E6FF] fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-3">
                <img src="/shes.svg" alt="SheSecure" className="h-10" />
                <span className="text-xl font-semibold text-gray-800">SheSecure</span>
              </Link>
            </div>

            {/* Main Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium">Home</Link>
              <Link to="/department" className="text-gray-700 hover:text-blue-700 font-medium">Department</Link>
              <Link to="/topics" className="text-gray-700 hover:text-blue-700 font-medium">Topics</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium">About</Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              <button className="p-2 hover:bg-[#E6D9FF] rounded-full transition-colors">
                <span className="text-gray-600">🔍</span>
              </button>
              
              {/* Login Button */}
              <button className="hidden md:block bg-[#2B4EFF] text-white px-6 py-1.5 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Login
              </button>

              {/* Join Button */}
              <button className="bg-[#2B4EFF] text-white px-6 py-1.5 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Join SheSecure
              </button>

              {/* Mobile Menu Button */}
              <button className="p-2 hover:bg-[#E6D9FF] rounded-full transition-colors md:hidden">
                <span className="text-gray-600">☰</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#F0E6FF] to-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Hero Content */}
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Empowering Women in 
                  <span className="text-blue-600"> Cybersecurity</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Join our community of women learning and growing together in the digital security space. 
                  Get access to resources, training, and support.
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Hero Image/Illustration */}
              <div className="flex-1 flex justify-center">
                <img 
                  src="/shes.svg" 
                  alt="Cybersecurity Illustration" 
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="flex-grow">
              <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">About SheSecure</h2>
                
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      SheSecure is dedicated to empowering women in the digital world through education, 
                      resources, and community support. We believe in creating a safer online environment 
                      where women can confidently navigate digital spaces.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {icon: "🔒", title: "Security Education", desc: "Comprehensive cybersecurity training"},
                        {icon: "📚", title: "Resources", desc: "Up-to-date security best practices"},
                        {icon: "👥", title: "Community", desc: "Supportive network of professionals"},
                        {icon: "🎯", title: "Tools", desc: "Practical security tools and guides"},
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-xl">
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 shrink-0">
              <div className="sticky top-28">
                <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Community Guidelines</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Core Values</h4>
                      <ul className="space-y-3">
                        {[
                          "Respect all members",
                          "Share accurate information",
                          "Maintain confidentiality",
                          "Report suspicious activities",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-blue-600">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I agree to follow these guidelines
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;