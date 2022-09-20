import React, { useEffect, useRef } from "react";

export const AboutMe = ({ checkTopOffset }) => {
  const aboutRef = useRef();

  useEffect(() => {
    checkTopOffset(aboutRef, "about");
  }, []);

  return (
    <section ref={aboutRef} id="about">
      <h1>AboutMe</h1>
    </section>
  );
};
