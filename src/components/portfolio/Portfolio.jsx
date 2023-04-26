import React from "react";
import "./Portfolio.css";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData1 from "../../lotties/products.json";
import animationData2 from "../../lotties/115257-products.json";

import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import Button from "@mui/material/Button";

const projects = [
  {
    id: 1,
    image: animationData1,
    title: "Equipment Rental Portal",

    description:
      "The admin will be able to manage rental requests, inventory, and pricing, and the applicatio will be integrated with a customer relationship management system.The application should allow users to view product details, view images, easily add and remove products from their rental cart, and pay for their rental. ",
    site: "https://github.com/kumaresan2001/Webcode-Forntend",
    source: "Source Code",
    live: "https://dazzling-pasca-4ccd5f.netlify.app/",
    livename: "Live",
  },
  {
    id: 2,
    image: animationData2,
    title: "Inventory Management Tool",

    description:
      "This project is to develop an inventory management web application using React, providing auser-friendly interface for users to manage their inventory..It will allow users to easily add, delete, and modify items in their inventory, track the totalproducts and total quantity bought, sold, out of stock, and available stock, generatecustomizable reports to view the summary of their inventory, define roles and permissions for users to control who can access certain features, and provide an API for developers to integrate with their own applications.",
    site: "https://github.com/kumaresan2001/Capston-Forntend",
    source: "Source Code",
    live: "	https://gleaming-macaron-192bb7.netlify.app",
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
              <div style={{ color: "#4db5ff" }}>
                Tech Stack used:<br></br>{" "}
                <Button variant="outlined">ReactJs</Button>&nbsp;
                <Button variant="outlined">ExpressJs</Button>&nbsp;
                <Button variant="outlined">MongoDB</Button>&nbsp;
                <Button variant="outlined">Bootstrap</Button>&nbsp;
              </div>
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
