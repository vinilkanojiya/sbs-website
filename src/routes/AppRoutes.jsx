import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CultureAndValues from "../pages/CultureAndValues";
import Founder from "../pages/Founder";
import TrainingAndDevelopment from "../pages/TrainingAndDevelopment";
import SecuritySolutions from "../pages/SecuritySolutions";
import FacilitySolutions from "../pages/FacilitySolutions";
import CashLogisticsSolutions from "../pages/CashLogisticsSolutions";
import Careers from "../pages/Careers";
const AppRoutes = () => {
  return (
    <Routes>

      {/* {Navbar routes} */}
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<h1>Company Page</h1>} />
      <Route path="/solutions" element={<h1>Solutions Page</h1>} />
      <Route path="/investors" element={<h1>Investors Page</h1>} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />

      {/* {Company routes} */}
      <Route path="/company/about/culture-and-values" element={<CultureAndValues/>} />
      <Route path="/company/about/founder" element={<Founder/>} />
      <Route path="/company/about/training-and-development" element={<TrainingAndDevelopment/>} />

      <Route path="/company/board" element={<h1>Company - Board Page</h1>} />
      <Route path="/company/management" element={<h1>Company - Management Page</h1>} /> 
      <Route path="/company/news" element={<h1>Company - News Page</h1>} />

      {/* {Solutions routes} */}
      <Route path="/solutions/security" element={<SecuritySolutions />} />
      <Route path="/solutions/facility" element={<FacilitySolutions />} />
      <Route path="/solutions/logistics" element={<CashLogisticsSolutions />} />
    </Routes>
  );
};

export default AppRoutes;