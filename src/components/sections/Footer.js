import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="footer" className="flex_column">
      <div className="footer-links">
        <a
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/alessandro-sgherri-a7523b22b/"
          target="_blank"
        >
          <BsLinkedin size={36}/>
        </a>
        <a
          rel="noreferrer noopener"
          href="https://github.com/AlexSgherri"
          target="_blank"
        >
          <BsGithub size={36} />
        </a>
      </div>
      <h5>ALESSANDRO SGHERRI <span className="highlight">©2022</span></h5>
    </footer>
  );
}
