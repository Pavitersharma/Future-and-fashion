import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Program from "./pages/Program";
import Admission from "./pages/Admission";
import ContactSection from "./pages/ContactSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Program/>}/>
      <Route path="/admissions" element={<Admission/>}/>
      <Route path="/contact"  element={<ContactSection/>}/>
      <Route  path="/login"  element={<Login/>}/>
      <Route path="/signup"  element={<Signup/>}/>
      
    </Routes>
  );
}

export default App;