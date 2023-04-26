import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/kumaresan-t-5030b3273
        "
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/kumaresan2001?tab=repositories"
        target="_blank"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default Socials;
