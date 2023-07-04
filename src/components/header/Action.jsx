import React from "react";
import RESUME from "./KUMARESAN.pdf";
const Action = () => {
  return (
    <div className="action">
      <a className="btn" href={RESUME}>
        Download Resume
      </a>
      <a className="btn btn-primary" href="#contact">
        Contact me!
      </a>
    </div>
  );
};

export default Action;
