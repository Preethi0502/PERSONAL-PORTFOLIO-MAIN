import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiHackernews } from "react-icons/di";
import Certification from "../../components/certificate/Certification";
import Contactus from "../../components/contactus/Contactus";
import P4 from '../../images/P4.png';
import { projects } from '../../components/projects/Projects';


const ProjectComponent = () => {
  const projectStyles = {
    backgroundColor: 'rgb(142 70 186 / 31%)',
    border: '1px solid',
    width: '300px',
    height: '400px',
    margin: '20px',
  };

  const projectDescStyles = {
    background: '#fbd1ad',
    color: '#b061df',
    fontWeight: 600,
  };

  const projectLangStyles = {
    background: '#fbd1ad',
    color: '#b061df',
    fontWeight: 600,
  };

  return (
    <div className="project-component">
      <Fade cascade>
        <div className="d-flex align-items-center mt-5 home-header">
          <h1
            style={{ fontSize: "60px", paddingBottom: "15px" }}
            className="heading"
          >
            I'M
            <strong className="main-name"> WORKING ON</strong>
          </h1>
          <h1
            style={{ fontSize: "175px", paddingBottom: "15px" }}
            className="heading"
          >
            Projects
          </h1>
        </div>
      </Fade>
      <div className="mt-5">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.slice(0, 2).map((project, index) => (
            <div key={project.title} style={{ margin: '20px' }}>
              <div className="singleProject" style={projectStyles}>
                <div className="projectContent">
                  <h5 style={{ color: '#fbd1ad' }}>{project.title}</h5>
                  <img src={project.image} alt={project.title} />
                  <div className="project--showcaseBtn">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="iconBtn"
                      aria-labelledby={`code${index}`}
                    >
                      <AiFillGithub
                        id={`code${index}`}
                        className="icon"
                        aria-label="Code"
                      />
                    </a>
                  </div>
                </div>
                <p
                  className="project--desc"
                  style={projectDescStyles}
                >
                  {project.description}
                </p>
                <div
                  className="project--lang"
                  style={projectLangStyles}
                >
                  {project.technologies}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <a href="/projects" className="view-all-btn certification-view-btn">
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PREETHI A</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/Preethi0502"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/preethi522/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.hackerrank.com/profile/preethi522002"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <DiHackernews />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src={P4}
                      alt="home pic"                     
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <ProjectComponent />
      <Certification />
      <Contactus />
    </section>
  );
}