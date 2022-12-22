import "../hero/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="HERO__main-container">
      <div className="HERO__left-container">
        <div className="HERO__dog-container">
          <img
            src="https://html.merku.love/petopia/assets/images/banner/cat_img_2.png"
            alt=""
          />
        </div>
        <div className="HERO__circle"></div>
        <div className="HERO__circl-1"></div>
      </div>
      <div className="HERO__mid-container">
        <div className="HERO__title">
          <h1>Wybierz idealnie dopasowaną karmę dla wojego pupila</h1>
        </div>
        <div className="HERO__chose-container">
          <div className="HERO__item-dog">
            <Link to="/krok-1">
              <div className="HERO__single-item">
                <h2>Pies</h2>
                <img
                  src="https://www.szybkauprawa.pl/img/kot.png"
                  alt=""
                  className="HERO__cat-img"
                />
              </div>
            </Link>
          </div>

          <div className="HERO__item-cat">
            <Link to="/krok-1">
              <div className="HERO__single-item">
                <h2>Kot</h2>
                <img
                  src="https://www.szybkauprawa.pl/img/kot.png"
                  alt=""
                  className="HERO__cat-img"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="HERO__baner-main">
          <div className="HERO__mini-baner-1">
            <div className="HERO__icons-bottom-baner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                class="bi bi-balloon-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                />
              </svg>
            </div>
            <div className="HERO__icons-bottom-baner">
              <h3>Obliczysz potrzeby Twojego zwierzaka</h3>
            </div>
            <div className="HERO__icons-bottom-baner">
              <p>
                Dzięki podanym informacjom o <strong>zwierzaku łatwo</strong>{" "}
                określisz jego potrzeby
              </p>
            </div>
          </div>

          <div className="HERO__mini-baner-2">
            <div className="HERO__icons-bottom-baner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                class="bi bi-balloon-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                />
              </svg>
            </div>
            <div className="HERO__icons-bottom-baner">
              <h3>Dobierzesz optymalną dietę</h3>
            </div>
            <div className="HERO__icons-bottom-baner">
              <p>Nasz konfigurator dobierze idealną karmę do jego potrzeb</p>
            </div>
          </div>
          <div className="HERO__mini-baner-3">
            <div className="HERO__icons-bottom-baner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                class="bi bi-balloon-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                />
              </svg>
            </div>
            <div className="HERO__icons-bottom-baner">
              <h3>Znajdziesz karmy w najlepszych cenach</h3>
            </div>
            <div className="HERO__icons-bottom-baner">
              <p>
                W marketplace Appet otrzymasz najlepsze oferty wielu dostawców
                jednej karmy
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="HERO__right-container">
        <div className="HERO__dog-container">
          <img
            src="https://html.merku.love/petopia/assets/images/banner/cat_img_1.png"
            alt=""
          />
        </div>
        <div className="HERO__circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
