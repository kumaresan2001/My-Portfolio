import React from "react";
import "./About.css";
import animationData from "../../lotties/headshot.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { BiMedal, BiUser, BiFolder } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Player className="name" autoplay loop src={animationData}></Player>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiMedal className="about__icon" />
              <h5>Schooling</h5>
              <small>
                I completed my schooling at government boys higher secondary
                school
              </small>
            </article>
            <article className="about__card">
              <BiUser className="about__icon" />
              <h5>College</h5>
              <small>
                I completed my B.E(mechanical) at avs engineering college with
                8.3cgpa.
              </small>
            </article>
            <article className="about__card">
              <BiFolder className="about__icon" />
              <h5>Hobbies</h5>
              <small>
                When I'm not in front of a computer screen, I'm probably
                watching movies, reading books, or crossing off another item on
                my bucket list.
              </small>
            </article>
          </div>
          <p>
            I completed my B.E. in Mechanical Engineering. Due to certain
            reasons, I planned to switch my career to the IT industry. So, I
            decided to level up my skills and shortly after that, I enrolled
            myself in a full-stack development course. I started to learn
            full-stack with joy. I have a strong passion for both front-end and
            back-end development. I love to learn and I am always looking to
            learn and experiment with new technologies! This is how a Mechanical
            Engineer turned into a full-stack developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
