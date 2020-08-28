import React from "react";
import Section from "../../Section";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Plans from "../../Plans";

function Home() {
  return (
    <>
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
      <Section {...homeObjFour} />
      <Plans />
    </>
  );
}

export default Home;
