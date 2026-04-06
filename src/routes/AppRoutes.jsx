import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CultureAndValues from "../pages/CultureAndValues";

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
      <Route path="/company/about/culture-and-values" element={<CultureAndValues/>} />
      <Route path="/company/about/founder" element={<h1>Company - Founder</h1>} />
      
      <Route path="/company/board-of-directors" element={<h1>Company - board-of-directors Page</h1>} />
      <Route path="/company/group-management-committee" element={<h1>Company - Group-management-committee</h1>} />
      <Route path="/company/news-and-media" element={<h1>Company - news-and-media Page</h1>} />
      <Route path="/company/training-and-development" element={<h1>Company - training and development Page</h1>} />

      {/* {Solutions routes} */}
      <Route path="/solutions/security/india" element={<h1>Solutions - Security - India Page</h1>} />
      <Route path="/solutions/security/international" element={<h1>Solutions - Security - International Page</h1>} />
      <Route path="/solutions/facility-management-solutions" element={<h1>Solutions - facility management solutions Page</h1>} />
      <Route path="/solutions/cash-logistics-solutions" element={<h1>Solutions - cash logistics solutions Page</h1>} />
    </Routes>
  );
};

export default AppRoutes;