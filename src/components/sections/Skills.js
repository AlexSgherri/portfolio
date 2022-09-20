import React, { useEffect, useRef } from "react";

export default function Skills({ checkTopOffset }) {
  const skillsRef = useRef();

  useEffect(() => {
    checkTopOffset(skillsRef, "skills");
  }, []);

  return (
    <section ref={skillsRef} id="skills">
      <h1>Skills</h1>
    </section>
  );
}
