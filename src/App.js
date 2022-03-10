import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/home";
import Business from "./pages/business";
import ForBusiness from "./pages/for-business";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy";
import Search from "./pages/search";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
      <Route path="business/:businessId" element={<Business />} />
      <Route path="for-business" element={<ForBusiness />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="search" element={<Search />} />
      <Route index element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
