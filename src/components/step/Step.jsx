import "../step/step.css";
import { Link } from "react-router-dom";

const Step = () => {
  return (
    <section className="STEP__main-section">
      <div className="STEP-container">
        <div className=" STEP__top-bar">
          <div className="STEP__topBar-title">
            <div className="STEP__title">Konfigurator</div>
            <div className="STEP_topBar-desc">
              Wybierz idealnie dopasowaną karmę
            </div>
            <div className="STEP__topbar-process-container">
              <div className="STEP__topBar-progress">
                <div className="STEP__topBar-progress-value"></div>
              </div>
            </div>
            <div className="STEP__topBar-step">
              <p>Krok 1 z 6</p>
            </div>
          </div>
        </div>
        <div className="STEP__first-container STEP_conteiner-one">
          <p className="STEP__second-title">
            Jak sie nazywa twój kotek/piesek?
          </p>
          <input type="text" className="STEP__inpust-one" />
        </div>
        <hr></hr>
        <div className="STEP__first-container STEP_conteiner-two">
          <p className="STEP__second-title">Jakiej płci jest "name"</p>
          <div className="STEP__two-icons-container">
            <button className="STEP__two-container">
              <img
                src="../img/icons/chlopak.png"
                alt=""
                className="STEP__icons"
              />
              <p>Chłopak</p>
            </button>
            <button className="STEP__two-container">
              <img
                src="../img/icons/dziewczyna.png"
                alt=""
                className="STEP__icons"
              />
              <p>Dziewczyna</p>
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="STEP__first-container STEP_conteiner-three">
          <p className="STEP__second-title">W jakim wieku jest "name"</p>
          <div>
            ma <input type="text" className="STEP__small-input" />
            lat i <input type="text" className="STEP__small-input" /> miesiący
          </div>
        </div>
        <hr></hr>
        <div className="STEP__first-container STEP_conteiner-four">
          <Link to="/krok-2" className="STEP__link-button">
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
  );
};

export default Step;
