import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../../components/projects/Projects';
import { FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const ProjectPage = () => {
  const projectStyles = {
    backgroundColor: 'rgb(142 70 186 / 31%)',
    border: '1px solid',
  };

  const projectDescStyles = {
    background: '#fbd9ad',
    color: '#b061df',
    fontWeight: 600,
  };

  const projectLangStyles = {
    background: '#fbd9ad',
    color: '#b061df',
    fontWeight: 600,
  };

  // Split projects into two rows
  const midIndex = Math.ceil(projects.length / 2);
  const topRowProjects = projects.slice(0, midIndex);
  const bottomRowProjects = projects.slice(midIndex);

  return (
    <section style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <Container fluid>
        <Container>
          <Row>
            {topRowProjects.map((project, index) => (
              <Col md={3} className="col-sm-12 col-md-4" key={index}>
                <Fade bottom>
                  <div className="singleProject" style={projectStyles}>
                    <div className="projectContent">
                      <h5 style={{ color: '#fbd9ad' }}>{project.title}</h5>
                      <img src={project.image} alt={project.title} />
                      <div className="project--showcaseBtn">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                          aria-labelledby={`code${index}`}
                        >
                          <FaCode
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
                </Fade>
              </Col>
            ))}
          </Row>
          <Row className="mt-5"> // Add margin top to separate rows
            {bottomRowProjects.map((project, index) => (
              <Col md={3} className="col-sm-12 col-md-4" key={index}>
                <Fade bottom>
                  <div className="singleProject" style={projectStyles}>
                    <div className="projectContent">
                      <h5 style={{ color: '#fbd9ad' }}>{project.title}</h5>
                      <img src={project.image} alt={project.title} />
                      <div className="project--showcaseBtn">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                          aria-labelledby={`code${index}`}
                        >
                          <FaCode
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
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default ProjectPage;