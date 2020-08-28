import React from "react";
import Section from "../../Section";
import {
  serviceObjOne,
  serviceObjTwo,
  serviceObjThree,
  serviceObjFour,
  serviceObjFive,
  serviceObjSix,
  serviceObjSeven,
  serviceObjEight,
} from "./Data";
import Plans from "../../Plans";

function Services() {
  return (
    <>
      <Section {...serviceObjOne} />
      <Section {...serviceObjTwo} />
      <Section {...serviceObjThree} />
      <Section {...serviceObjFour} />
      <Section {...serviceObjFive} />
      <Section {...serviceObjSix} />
      <Section {...serviceObjSeven} />
      <Section {...serviceObjEight} />
      <Plans />
    </>
  );
}

export default Services;
