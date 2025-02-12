import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Insights from "./components/Insights";
import Contacts from "./components/Contacts";
import Footer from "./components/common/Footer.jsx";

import FAQ from "./components/pages/FAQ.jsx";
import Privacy from "./components/pages/Privacy.jsx";
import Terms from "./components/pages/Terms.jsx";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
