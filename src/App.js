import { Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services'
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
function App() {
  return (
<>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  <Footer/>
</>
  );
}

export default App;