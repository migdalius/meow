import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import StepTwo from "./pages/stepTwo/StepTwo";
import StepThree from "./pages/stepThree/StepThree";
import StepFour from "./pages/stepFour/StepFour";
import StepFive from "./pages/stepFive/StepFive";
import StepOne from "./pages/stepOne/StepOne";
import List from "./pages/list/List";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/krok-1" element={<StepOne />} />
        <Route path="/krok-2" element={<StepTwo />} />
        <Route path="/krok-3" element={<StepThree />} />
        <Route path="/krok-4" element={<StepFour />} />
        <Route path="/krok-5" element={<StepFive />} />
        <Route path="/lista-produktow" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
