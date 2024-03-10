import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Contact} from "./components/Contact";
import Timetable from "./components/Timetable";

import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Stagiaire from "./components/Stagiaire";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <nav>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stagaire" element={<Stagiaire />} />
          </Routes>
        </BrowserRouter>
          <Footer/>
      </nav>
    </div>
  );
}

export default App;
