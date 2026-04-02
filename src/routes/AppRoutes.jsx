import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<h1>Company Page</h1>} />
      <Route path="/solutions" element={<h1>Solutions Page</h1>} />
      <Route path="/investors" element={<h1>Investors Page</h1>} />
      <Route path="/careers" element={<h1>Careers Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
    </Routes>
  );
};

export default AppRoutes;