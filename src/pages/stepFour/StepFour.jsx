import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import "../stepFour/stepFour.css";

const StepFour = () => {
  return (
    <div className="app">
      <Navigation />
      <section className="STEP__main-section">
        <div className="STEP-container">
          <div className=" STEP__top-bar">
            <div className="STEP__topBar-title">
              <div className="STEP__title">Konfigurator</div>
              <div className="STEP_topBar-desc">
                Wybierz idealnie dopasowaną karmę
              </div>
              <div className="STEP__topbar-process-container">
                <div className="STEP__topBar-progress-4">
                  <div className="STEP__topBar-progress-value-4"></div>
                </div>
              </div>
              <div className="STEP__topBar-step">
                <p>Krok 4 z 6</p>
              </div>
            </div>
          </div>

          <div className="STEP__first-container STEP_conteiner-two">
            <p className="STEP__second-title mt-60">
              Czy "name" ma alegrię lub nietolerancje pokarmową.
            </p>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer">
                <p>Nie ma alergii</p>
              </button>
              <button className="STEPTHREE-constainer">
                <p>Ma alergię na</p>
              </button>
            </div>
            <div className="STEP_topBar-desc mr-bottom">
              Zaznacz jednen lub więcej
            </div>
            <div className="STEP__two-icons-container">
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Jagnięcina
              </label>
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Indyk
              </label>
            </div>
            <div className="STEP__two-icons-container">
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Kurczak
              </label>
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Wołowina
              </label>
            </div>
          </div>
          <div className="mb-60"></div>
          <hr></hr>
          <div className="STEP__first-container STEP_conteiner-three test">
            <p className="STEP__second-title">Jaką karmę lubi "name"?</p>
            <div className="STEP__two-icons-container">
              <button className="STEPTWO-constainer">
                <img
                  src="../img/icons/karma_1.png"
                  alt=""
                  className="STEP__icons"
                />
                <p>Sucha</p>
              </button>
              <button className="STEPTWO-constainer">
                <img
                  src="../img/icons/karma_2.png"
                  alt=""
                  className="STEP__icons"
                />
                <p>Mokra</p>
              </button>
            </div>
            <div className="STEP__two-icons-container">
              <button className="STEPTWO-constainer">
                <img
                  src="../img/icons/karma_3.png"
                  alt=""
                  className="STEP__icons"
                />
                <p>Gotowana żywność</p>
              </button>
              <button className="STEPTWO-constainer">
                <img
                  src="../img/icons/karma_4.png"
                  alt=""
                  className="STEP__icons"
                />
                <p>BARF</p>
              </button>
            </div>
          </div>
          <div className="STEP__first-container STEP_conteiner-four">
            <Link to="/krok-5" className="STEP__link-button">
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
        </div>
      </section>
    </div>
  );
};

export default StepFour;
