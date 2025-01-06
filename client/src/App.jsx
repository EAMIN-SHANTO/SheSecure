import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Homepage from "./routes/Homepage.jsx";
import GetStarted from "./routes/GetStarted.jsx";
import Learn from "./routes/Learn.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import InteractiveLearning from "./routes/InteractiveLearning.jsx";
import KnowCyber from "./routes/KnowCyber.jsx";
import CyberQuiz from "./routes/CyberQuiz.jsx";
import Topics from "./routes/Topics.jsx";

const App = () => {
  console.log('App rendered');

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Each route should have its own unique component */}
          <Route path="/" element={<Homepage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/interactive-learning" element={<InteractiveLearning />} />
          <Route path="/learn/*" element={<Learn />} /> {/* Added /* for nested routes */}
          
          {/* These should be child routes of /learn */}
          <Route path="/learn/scenarios" element={<Learn />} />
          <Route path="/learn/security" element={<Learn />} />
          
          {/* Blog post routes */}
          <Route path="/post/:slug" element={<SinglePostPage />} />
          
          <Route path="/know-cyber" element={<KnowCyber />} />
          
          <Route path="/quiz" element={<CyberQuiz />} />
          
          <Route path="/topics" element={<Topics />} />
          
          <Route path="*" element={
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600">Page not found</p>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;