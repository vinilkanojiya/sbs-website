import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>

      {/* {Navbar routes} */}
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<h1>Company Page</h1>} />
      <Route path="/solutions" element={<h1>Solutions Page</h1>} />
      <Route path="/investors" element={<h1>Investors Page</h1>} />
      <Route path="/careers" element={<h1>Careers Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />

      {/* {Company routes} */}
      <Route path="/company/about" element={<h1>Company - About Page</h1>} />
      <Route path="/company/board" element={<h1>Company - Board Page</h1>} />
      <Route path="/company/management" element={<h1>Company - Management Page</h1>} />
      <Route path="/company/news" element={<h1>Company - News Page</h1>} />

      {/* {Solutions routes} */}
      <Route path="/solutions/security/india" element={<h1>Solutions - Security - India Page</h1>} />
      <Route path="/solutions/security/international" element={<h1>Solutions - Security - International Page</h1>} />
      <Route path="/solutions/facility" element={<h1>Solutions - Facility Page</h1>} />
      <Route path="/solutions/logistics" element={<h1>Solutions - Logistics Page</h1>} />
    </Routes>
  );
};

export default AppRoutes;