import React, { useEffect } from "react";
import { Button } from "./Button";
import { AiFillGold } from "react-icons/ai";
import { RiVipDiamondLine, RiUser2Fill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Plans() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper" data-aos="fade-up">
          <h1 className="heading">Plans</h1>
          <div className="pricing__container">
            <Link
              to="/sign-up"
              className="pricing__container--card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pricing__container--cardInfo">
                <div className="icon">
                  <RiUser2Fill />
                </div>
                <h3>Starter</h3>
                <h4>8.99€</h4>
                <p>per month</p>
                <ul className="pricing__container--features">
                  <li>100 Transactions</li>
                  <li>Weekly Graph View</li>
                  <li>10,000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="secondary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link
              to="/sign-up"
              className="pricing__container--card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pricing__container--cardInfo">
                <div className="icon">
                  <AiFillGold />
                </div>
                <h3>Gold</h3>
                <h4>29.99€</h4>
                <p>per month</p>
                <ul className="pricing__container--features">
                  <li>1000 Transactions</li>
                  <li>Monthly Graph View</li>
                  <li>100,000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="secondary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link
              to="/sign-up"
              className="pricing__container--card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pricing__container--cardInfo">
                <div className="icon">
                  <RiVipDiamondLine />
                </div>
                <h3>Diamond</h3>
                <h4>99.99€</h4>
                <p>per month</p>
                <ul className="pricing__container--features">
                  <li>Unlimited Transactions</li>
                  <li>Annual Graph View</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="secondary">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Plans;
