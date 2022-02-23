import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Business from "./pages/business";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="business/:businessId" element={<Business />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
