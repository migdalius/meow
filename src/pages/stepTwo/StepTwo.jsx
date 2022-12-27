import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import "../stepTwo/stepTwo.css";

const StepTwo = () => {
  return (
    <>
      <div className="STEP__first-container STEP_conteiner-two">
        <p className="STEP__second-title">Czy karma może zawierać cukier?</p>
        <div className="STEP__two-icons-container">
          <button className="STEPTWO-constainer">
            <img src="../img/icons/miska.png" alt="" className="STEP__icons" />
            <p>NIE</p>
          </button>
          <button className="STEPTWO-constainer">
            <img
              src="../img/icons/miska_cukier.png"
              alt=""
              className="STEP__icons"
            />
            <p>TAK</p>
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="STEP__first-container STEP_conteiner-three">
        <p className="STEP__second-title">
          Czy "name" jest po "sterylizacji / kastracji"
        </p>
        <div className="STEP__two-icons-container">
          <button className="STEPTWO-constainer">
            <img
              src="../img/icons/kundelek.png"
              alt=""
              className="STEP__icons"
            />
            <p>Kundelek</p>
          </button>
          <button className="STEPTWO-constainer">
            <img src="../img/icons/rasowy.png" alt="" className="STEP__icons" />
            <p>Rasowy</p>
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="STEP__first-container STEP_conteiner-three">
        <p className="STEP__second-title">Ile waży "name"?</p>
        <div className="STEPTWO-input-container">
          <input type="number" className="STEPTWO__input" placeholder="np: 5" />
          <input
            type="text"
            placeholder="KG"
            className="STEPTWO__input-kg"
            disabled
          />
        </div>
      </div>
      <hr></hr>
      <div className="STEP__first-container STEP_conteiner-four">
        <Link to="/krok-3" className="STEP__link-button">
          <button className="STEP__button">
            Następny krok
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default StepTwo;
