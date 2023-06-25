import React from "react";
import "./Portfolio.css";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData1 from "../../lotties/products.json";
import animationData2 from "../../lotties/115257-products.json";
import animationData3 from "../../lotties/17144-food-delivery-boy.json";
import animationData4 from "../../lotties/url.json";
import animationData5 from "../../lotties/pokemon.json";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import Button from "@mui/material/Button";

const projects = [
  {
    id: 1,
    image: animationData1,
    title: "Equipment Rental Portal",

    description:
      "Equipment Rental Portal, User can rent a product using test Razor pay mode. This App have the admin panel also ",
    site: "https://github.com/kumaresan2001/Webcode-Forntend",
    source: "Frontend Code",
    backsite: "https://github.com/kumaresan2001/Webcode-Backend",
    backsource: "Backend Code",
    live: "https://dazzling-pasca-4ccd5f.netlify.app/",
    livename: "Live",
  },
  {
    id: 2,
    image: animationData2,
    title: "Inventory Management Tool",

    description:
      " Inventory management tool analyzes daily product and supply levels to anticipate inventory problems and shortages,developed with User and Admin role ",
    site: "https://github.com/kumaresan2001/Capston-Forntend",
    source: "Frontend Code",
    backsite: "https://github.com/kumaresan2001/day-42-Backend",
    backsource: "Backend Code",
    live: "	https://gleaming-macaron-192bb7.netlify.app",
    livename: "Live",
  },
  {
    id: 3,
    image: animationData3,
    title: "Food App",

    description:
      " Food ordering app with integration of third-party payment processors, developed with User and Admin role.",
    site: "https://github.com/kumaresan2001/day42-Forntend",
    source: "Frontend Code",
    backsite: "https://github.com/kumaresan2001/day-42-Backend",
    backsource: "Backend Code",
    live: "	https://shimmering-pudding-71348b.netlify.app",
    livename: "Live",
  },

  {
    id: 4,
    image: animationData4,
    title: "Url Shortener",

    description:
      " URL shortener ,user can redirects the shorter URL to the original webpage",
    site: "https://github.com/kumaresan2001/URL-Shortner-Forntend",
    source: "Frontend Code",
    backsite: "",
    backsource: "Backend Code",
    live: "	https://visionary-brioche-9ff4c9.netlify.app",
    livename: "Live",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                {/* <img src={project.image} alt={project.title} /> */}

                <Player
                  className="name"
                  autoplay
                  loop
                  src={project.image}
                  alt={project.title}
                  style={{ height: "20rem" }}
                ></Player>
              </div>
              <h3>{project.title}</h3>

              <small className="portfolio__desc">{project.description}</small>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a
                  href={project.site}
                  target="_blank"
                  style={{ marginTop: "1rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <GoMarkGithub />
                  </span>
                  &nbsp;{project.source}
                </a>
                <a
                  href={project.backsite}
                  target="_blank"
                  style={{ marginTop: "1rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <GoMarkGithub />
                  </span>
                  &nbsp;{project.backsource}
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  style={{ marginTop: "1rem", marginRight: "2rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <BiLinkExternal />
                  </span>
                  {project.livename}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
