import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/Services" element={<Services />} />
<Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}
