import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Animals from "./Pages/Animals";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Fetch from "./Pages/Fetch";
import Termsandconditions from "./Pages/Termsandconditions";
import Cookiespolicy from "./Pages/Cookiespolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
export default function 
App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/animal-care" element={<Animals/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
        <Route path="/terms&conditions" element={<Termsandconditions/>}/>
        <Route path="/cookies-policy" element={<Cookiespolicy/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>


        {/* routes for error page */}
          <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
