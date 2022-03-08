import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Business from "./pages/business";
import ForBusiness from "./pages/for-business";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="business/:businessId" element={<Business />} />
        <Route path="for-business" element={<ForBusiness />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
