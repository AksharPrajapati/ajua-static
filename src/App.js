import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/home";
import Business from "./pages/business";
import ForBusiness from "./pages/for-business";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="business/:businessId" element={<Business />} />
        <Route path="for-business" element={<ForBusiness />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
