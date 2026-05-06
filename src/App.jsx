import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import CtaBanner from "./components/CtaBanner";

function App() {
  return (<>
    <Navbar />
    <AppRoutes />
    <CtaBanner />
    <Footer/>
  </>
  );
}

export default App;