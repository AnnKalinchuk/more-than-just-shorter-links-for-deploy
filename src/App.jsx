import { useState } from "react";

import { useLinks } from "./components/context/LinksContext";
import "./App.scss";
import illustrationWorking from "./assets/images/illustration-working.svg";
import iconBrandRecognition from "./assets/images/icon-brand-recognition.svg";
import iconDetailedRecords from "./assets/images/icon-detailed-records.svg";
import iconFullyCustomizable from "./assets/images/icon-fully-customizable.svg";

import Menu from "./components/Menu/Menu";
import ShortenForm from "./components/ShortenForm/ShortenForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardsLinks from "./components/CardsLinks/CardsLinks";
import SkeletonLoader from "./components/Loader/SkeletonLoader";

const App = () => {
  const [isActiveMenuBurger, setIsActiveMenuBurger] = useState(false);
  const { isLoading, links, setLinks } = useLinks();

  return (
    <div className="app__wrapper">
      <Header
        isActiveMenuBurger={isActiveMenuBurger}
        setIsActiveMenuBurger={setIsActiveMenuBurger}
      />
      <main>
        <section className="feature">
          <div className="feature__content">
            <div className="feature__container">
              <div className="feature__body">
                <h1 className="feature__title">More than just shorter links</h1>
                <p className="feature__description">
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
                </p>
                <div className="feature__button">
                  <a href="#" className="feature__link">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="feature__image">
            <img src={illustrationWorking} className="illustration-working" />
          </div>
        </section>

        <section className="statistics">
          <div className="statistics__container">
            <div className="shorter__link__wrapper">
              <div className="shorter__link__inner">
                <ShortenForm />
              </div>
            </div>
            <div className="statistics__inner">
              {links.length > 0 && <CardsLinks />}
              {isLoading && <SkeletonLoader />}
              <div className="text-info">
                <h2>Advanced Statistics</h2>
                <p>
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </p>
              </div>
              <div className="cards__info">
                <div className="horizontal__line__center"></div>
                <div className="card__info">
                  <div className="card__icon">
                    <img
                      src={iconBrandRecognition}
                      alt="iconBrandRecognition"
                    />
                  </div>
                  <h3 className="card__title">Brand Recognition</h3>
                  <p className="card__text">
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
                <div className="card__info detailed-records">
                  <div className="card__icon">
                    <img src={iconDetailedRecords} alt="iconDetailedRecords" />
                  </div>
                  <h3 className="card__title">Detailed Records</h3>
                  <p className="card__text">
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
                <div className="card__info fully-customizable">
                  <div className="card__icon">
                    <img
                      src={iconFullyCustomizable}
                      alt="iconFullyCustomizable"
                    />
                  </div>
                  <h3 className="card__title">Fully Customizable</h3>
                  <p className="card__text">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="boost">
          <div className="boost__container">
            <div className="boost__inner">
              <h2>Boost your links today</h2>
              <div className="boost__button ">
                <a href="/" className="boost__link">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Menu
        activeStatus={isActiveMenuBurger}
        setActive={setIsActiveMenuBurger}
      />
    </div>
  );
};

export default App;
