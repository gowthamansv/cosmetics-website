import "./App.css";
import "./assets/fonts/fonts.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Router>
      <Navbar setShowCart={setShowCart} setShowMenu={setShowMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showCart={showCart}
              setShowCart={setShowCart}
              showMenu={showMenu}
            />
          }
        />
        <Route path="/catalogue" element={<Catalogue />} />
        {/* <Route path="/cart" element={} /> */}
        {/* <Route path="/menu" element={} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
