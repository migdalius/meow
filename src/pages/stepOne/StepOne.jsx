import Navigation from "../../components/nav/Navigation";
import Step from "../../components/step/Step";
import "../stepOne/stepOne.css";

const StepOne = () => {
  return (
    <div className="app">
      <Navigation />
      <Step />
    </div>
  );
};

export default StepOne;
