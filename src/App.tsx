import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import { About } from "@/pages/About";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
