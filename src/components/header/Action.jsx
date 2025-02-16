import React from "react";
import RESUME from "./T_Kumaresan_1+Year_exp.pdf";
const Action = () => {
  return (
    <div className="action">
      <a
        className="btn"
        href={RESUME}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <a className="btn btn-primary" href="#contact">
        Contact me!
      </a>
    </div>
  );
};

export default Action;
