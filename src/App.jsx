import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import LenisScroll from "./components/LenisScroll";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);
  return (
    <>
    <ThemeProvider>
      {loading ? (
        <Intro />
      ) : (
        <div>
          <LenisScroll />
          <Navbar />
          <Home />
        </div>
      )}
      </ThemeProvider>
    </>
  );
}

export default App;
