import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import "../stepThree/stepThree.css";

const StepThree = () => {
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
                <div className="STEP__topBar-progress-3">
                  <div className="STEP__topBar-progress-value-3"></div>
                </div>
              </div>
              <div className="STEP__topBar-step">
                <p>Krok 3 z 6</p>
              </div>
            </div>
          </div>

          <div className="STEP__first-container STEP_conteiner-two">
            <p className="STEP__second-title">Jaką sylwetkę ma "name"?</p>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer">
                <p>Za chuda</p>
              </button>
              <button className="STEPTHREE-constainer">
                <p>Idealna</p>
              </button>
            </div>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer">
                <p>Lekko zaokrąglona</p>
              </button>
              <button className="STEPTHREE-constainer">
                <p>Otyła</p>
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="STEP__first-container STEP_conteiner-two">
            <p className="STEP__second-title">Jaki "name" ma apetyt?</p>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer">
                <p>Wybredny</p>
              </button>
              <button className="STEPTHREE-constainer">
                <p>Jest Niejadkiem</p>
              </button>
            </div>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer">
                <p>Ładnie je</p>
              </button>
              <button className="STEPTHREE-constainer">
                <p>Pochłania Wszystko</p>
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="STEP__first-container STEP_conteiner-three mb-80">
            <p className="STEP__second-title">Jak aktywny jest "name"?</p>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer-img btn-p">
                <p>Śpioch</p>
                <img
                  src="../img/icons/sleep.png"
                  alt=""
                  className="STEPTHREE-img"
                />
              </button>
              <button className="STEPTHREE-constainer-img ">
                <p>Trochę aktywny</p>
                <img
                  src="../img/icons/pelny_energii.png"
                  alt=""
                  className="STEPTHREE-img"
                />
              </button>
            </div>
            <div className="STEP__two-icons-container">
              <button className="STEPTHREE-constainer-img ">
                <p>Aktywny</p>
                <img
                  src="../img/icons/smycz.png"
                  alt=""
                  className="STEPTHREE-img"
                />
              </button>
              <button className="STEPTHREE-constainer-img ">
                <p>Bardzo aktywny</p>
                <img
                  src="../img/icons/bieganie.png"
                  alt=""
                  className="STEPTHREE-img"
                />
              </button>
            </div>
            <div className="squer-1">0-0.5h</div>
            <div className="squer-2">0.5-1h</div>
            <div className="squer-3">1-2h</div>
            <div className="squer-4">3h+</div>
          </div>

          <div className="STEP__first-container STEP_conteiner-four">
            <Link to="/krok-4" className="STEP__link-button">
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

export default StepThree;
