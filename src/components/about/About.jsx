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
              <h5>School</h5>
              <small>
                I completed my school at government boys higher secondary school
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
            Hi, I’m Kumaresan T, a MERN Stack Developer. I started my career in
            Mechanical Engineering, my passion for technology led me to switch
            to the IT industry. I enrolled in a mern-stack development course
            and fell in love with both front-end and back-end development.
          </p>

          <p>
            I have over a year of experience working with React.js, Redux,
            JavaScript, Node.js, and MongoDB. I enjoy building web applications
            and constantly learning new technologies. Right now, I’m working as
            a Software Developer at Q-Gate Infotech, where I help create
            interactive web-based solutions. I’m always excited to learn more
            and grow in this field!
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
