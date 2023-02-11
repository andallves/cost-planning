import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />

      <Container custumClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
