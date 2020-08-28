import React, { useRef, useEffect } from "react";
import Plans from "../../Plans";
import { Button } from "../../Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const plansSection = useRef(null);

  const scrollToPlansSection = () =>
    window.scrollTo({
      top: plansSection.current.offsetTop,
      behavior: "smooth",
    });

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="home__section darkBg">
        <div className="container">
          <div
            className="row home__section--row"
            style={{
              display: "flex",
              flexDirection: "start",
            }}
          >
            <div className="col" data-aos="fade-up">
              <div className="home__section--text-wrapper">
                <div className="subject-heading">VIEW OUR PLANS</div>
                <h1 className="heading">Choose the best plan for you</h1>
                <p className={"home__section--subtitle"}>
                  We provide a range of plasn for spesific streamer needs
                </p>

                <Button
                  buttonSize="btn--wide"
                  buttonColor="secondary"
                  onClick={scrollToPlansSection}
                >
                  See more
                </Button>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="50">
              <div className="home__section--img-wrapper">
                <img
                  src="images/Fund.svg"
                  alt="fund"
                  className="home__section--img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={plansSection}>
        <Plans />
      </div>
    </>
  );
};

export default Products;
