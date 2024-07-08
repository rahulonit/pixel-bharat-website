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
import { useState } from "react";
import CollabPopup from "./componets/Collabpopup";
import Collaborate from "./componets/Collaborate.jsx"
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

const togglePopup = ({event}) => {
  

    setIsPopupOpen(true);

  
};
const togglePopupClose = (event) => {
  
  if (event) {
    event.stopPropagation(); // Check if event is defined before using it
  }
  
  setIsPopupOpen(false); // Close the popup


};
  return (<>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home isOpen={togglePopup} onClose={togglePopupClose} />} />
        <Route path="/project" element={<Project isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/contact" element={<Contact isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/team" element={<Team isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/about-us" element={<Aboutus isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/careers" element={<Career isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/find-job" element={<FindJob isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/job-profile/:id" element={<JobPofile isOpen={togglePopup} onClose={togglePopupClose}/>} />
        <Route path="/service/:title" element={<Service isOpen={togglePopup} onClose={togglePopupClose}/>} />
      </Routes>
      <ScrollToTop />
      <Cursor />
    </BrowserRouter>
   {isPopupOpen && <CollabPopup isOpen={togglePopup} onclose={togglePopupClose}/>}
   </>);
}

export default App;
