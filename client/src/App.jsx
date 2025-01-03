import "./App.css";
import "./assets/fonts/fonts.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        {/* <Route path="/cart" element={} /> */}
        {/* <Route path="/menu" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
