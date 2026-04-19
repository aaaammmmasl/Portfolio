import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import LenisScroll from "./components/LenisScroll";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";

// BACKGROUND

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);
  return (
    <div>
        {/* {loading ? (
          <Intro />
        ) : ( */}
        <div>
          <LenisScroll />
          <Navbar />
          <Home />
        </div>
        {/* )} */}
    </div>
  );
}

export default App;
