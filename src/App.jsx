import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./pages/MainScreen/index";
import React, { useEffect } from "react";
import { Navbar } from "@material-tailwind/react";

function App() {
  // useEffect(() => {
  //   document.title = "Affodilaj Fadil";
  // }, []);

  return (
    <Router>
      <div >
        <MainScreen />
      </div>
      <Routes>
        <Route path="/" element={""} />
        {/* <Route path="/about" Component={MainScreen} element={""} />
        <Route path="/projects" Component={MainScreen} element={""} />
        <Route path="/technologies" Component={MainScreen} element={""} /> */}
      </Routes>
    </Router>
  );
}

export default App;
