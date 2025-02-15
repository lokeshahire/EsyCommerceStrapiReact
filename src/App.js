import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from "./Pages/CaseStudy";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case" element={<CaseStudy />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
