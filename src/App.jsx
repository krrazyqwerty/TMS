import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/common/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Insights from "./components/Insights";
import Contacts from "./components/Contacts";
import Footer from "./components/common/Footer.jsx";

import FAQ from "./components/pages/FAQ.jsx";
// import Guides from "./components/pages/Guides.jsx";
import Privacy from "./components/pages/Privacy.jsx";
import Terms from "./components/pages/Terms.jsx";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Insights />
      <Contacts />

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" elemnt={<About />} />
        <Route path="/features" elemnt={<Features />} />
        <Route path="/insights" elemnt={<Insights />} />
        <Route path="/contacts" elemnt={<Contacts />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/guides" element={<Guides />} /> */}
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      
      <Footer />
    </Router>
  );
};

export default App;
