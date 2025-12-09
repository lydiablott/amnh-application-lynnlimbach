import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trilobite from "./pages/Trilobite";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Coverletter from "./pages/Coverletter";
import Impressum  from "./pages/Impressum";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilobite" element={<Trilobite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />   
          <Route path="/coverletter" element={<Coverletter />} />
          <Route path="/impressum" element={<Impressum />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

