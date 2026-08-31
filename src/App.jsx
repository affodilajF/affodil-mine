import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./pages/MainScreen/index";
import React, { useEffect } from "react";
import { Navbar } from "@material-tailwind/react";
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  // useEffect(() => {
  //   document.title = "Affodilaj Fadil";
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
