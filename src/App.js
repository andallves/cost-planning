import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./components/layout/Container";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        <li><Link to={"/newproject"}>New Project</Link></li>
      </ul>

      <Container custumClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/newproject" element={<NewProject/>}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
