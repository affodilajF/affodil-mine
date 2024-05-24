import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./pages/MainScreen/index";

function App() {
  return (
    <Router>
      <div className={`container `}>
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
