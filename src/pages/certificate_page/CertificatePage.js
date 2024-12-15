import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ConferenceCertificate1 from "../../images/Conference Certificate-1.png";
import CognibotCertificate1 from "../../images/PT-1 Cognibot Certificate-1.png";
import AlgoxfusionCertificate1 from "../../images/PT-2 Algoxfusion Certificate-1.png";
import PentagonSpaceCertificate1 from "../../images/SIST-2024-40110999-OL-Preethi. A (1)-1.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function CertificatePage() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about" style={{ marginTop: "80px" }}>
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Fade left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Fade>
            </Col>
            <Col md={12} className="mt-3">
              <Row className="g-5 mb-5">
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.example.com/certificate1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img
                              className="logo_img"
                              src={ConferenceCertificate1}
                              alt="Conference Certificate 1"
                            />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              ICOECA 2024
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Blockchain-Based Secure Cloud Storage Research
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Issued 2024
                        </h3>
                        <p className="cert-body-desc">
                          Research on blockchain solutions for secure cloud
                          storage.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.example.com/certificate2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img
                              className="logo_img"
                              src={CognibotCertificate1}
                              alt="Cognibot Certificate 1"
                            />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Cognibot
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          AI and Machine Learning Applications
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Issued 2022
                        </h3>
                        <p className="cert-body-desc">
                          AI and machine learning applications in real-world
                          contexts.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.example.com/certificate3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                          className="cert-header"
                          style={{ backgroundColor: "white" }}
                        >
                          <img
                             className="logo_img"
                             src={AlgoxfusionCertificate1}
                             alt="Algoxfusion Certificate 1"
                          />
                         </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Algoxfusion Private Limited
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Flutter Mobile App Development
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Issued 2023
                        </h3>
                        <p className="cert-body-desc">
                          Flutter app development with a focus on user
                          experience.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
              <Row className="g-5">
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.example.com/certificate4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img
                              className="logo_img"
                              src={PentagonSpaceCertificate1}
                              alt="Pentagon Space Certificate 1"
                            />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Pentagon Space
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Java Full Stack Development
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Issued 2024-2025
                        </h3>
                        <p className="cert-body-desc">
                          Java full stack development for both backend and
                          frontend.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="blog--viewAll">
        <Link to="/certificatepage">
          <button className="btn btn-primary">
            View All
            <HiArrowRight className="viewArr" />
          </button>
        </Link>
      </div>
    </div>
  );
}