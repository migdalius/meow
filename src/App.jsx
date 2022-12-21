import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import StepOne from "./pages/stepOne/StepOne";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/krok-1" element={<StepOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
