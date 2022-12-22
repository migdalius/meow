import "../stepFive/stepFive.css";
import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";

const StepFive = () => {
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
                <div className="STEP__topBar-progress-5">
                  <div className="STEP__topBar-progress-value-5"></div>
                </div>
              </div>
              <div className="STEP__topBar-step">
                <p>Krok 5 z 6</p>
              </div>
            </div>
          </div>
          <div className="STEP__five-container">
            <div>
              <p className="STEP__second-title mt-60 mb-60">
                Czy "name" jest po "sterylizacji / kastracji"
              </p>
            </div>
            <div className="STEP__five-problem mb-60">
              <button>Nie ma problemów</button>
              <button>Cierpi na</button>
            </div>

            <div className="STEP__five-radio-container">
              <div className="STEP__five-grid-1">
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Zapalenie trzustki</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Cukrzyca</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Skóra i sierść</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Wątroba</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Stawy</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nowotwory</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Wrażliwy żółądek</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Serce</label>
                </div>
              </div>
              <div className="STEP__five-grid-1">
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Padaczka</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nieswoiste zapalenie jelit</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nerki</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Kamienie nerkowe</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nietolerancja pokarmowa</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Rekonwalescencja</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Zabuzenie wchłaniania</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Niperlipidemia</label>
                </div>
              </div>
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

export default StepFive;
