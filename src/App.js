

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact"

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
