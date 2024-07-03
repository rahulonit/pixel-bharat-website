import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Aboutus from "./pages/Aboutus";
import './App.css';
import ScrollToTop from "./componets/ScrollToTop";
import  Cursor  from "./componets/cursor";
import Career from "./pages/Career";
import FindJob from "./pages/FindJob";
import JobPofile from "./pages/JobPofile";
import Service from "./pages/Service";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/about-us" element={<Aboutus/>} />
        <Route path="/careers" element={<Career/>} />
        <Route path="/find-job" element={<FindJob/>} />
        <Route path="/job-profile/:id" element={<JobPofile/>} />
        <Route path="/service/:title" element={<Service/>} />
        
      </Routes>
      <ScrollToTop />
      <Cursor />
    </BrowserRouter>
  );
}

export default App;
