import logo from "./logo.svg";
import "./assets/css/index.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { HowItWorks } from "./pages/HowItWorks";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
<Navbar/>
<div className="flex-1">
<div className="flex-1">
      <Routes>
    
        <Route path="*" element={<Navigate to="/" />} />

          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="contact-us" element={<ContactUs />} />

      </Routes>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
