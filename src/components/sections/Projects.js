import React, { useEffect, useRef } from "react";

export default function Projects({ checkTopOffset }) {
  const projectsRef = useRef();

  useEffect(() => {
    checkTopOffset(projectsRef, "projects");
  }, []);

  return (
    <section ref={projectsRef} id="projects">
      <h1>Projects</h1>
    </section>
  );
}
