import React, { useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Section({
  subject,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
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
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col" data-aos="fade-up">
              <div className="home__section--text-wrapper">
                <div className="subject-heading">{subject}</div>
                <h1 className="heading">{headline}</h1>
                <p className="home__section--subtitle">{description}</p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="secondary">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="50">
              <div className="home__section--img-wrapper">
                <img src={img} alt={alt} className="home__section--img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
