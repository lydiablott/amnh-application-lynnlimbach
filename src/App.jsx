import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Coverletter from "./pages/Coverletter";
import Impressum from "./pages/Impressum";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/amnh-application-lynnlimbach">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amnh-application-lynnlimbach" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/coverletter" element={<Coverletter />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
