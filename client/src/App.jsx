import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./routes/Homepage";
import GetStarted from "./routes/GetStarted";
import SinglePostPage from "./routes/SinglePostPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/get-started" element={<GetStarted />} exact />
          <Route path="/scenarios" element={<GetStarted />} exact />
          <Route path="/security" element={<GetStarted />} exact />
          <Route path="/post/:slug" element={<SinglePostPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;