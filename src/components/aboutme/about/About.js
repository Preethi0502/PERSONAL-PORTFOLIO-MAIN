import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Hey, I'm Preethi. I'm an aspiring software engineer with a passion for creating innovative solutions.
                <br />
                <br />
                As a BE (CSE) graduate from Sathyabama Institute of Science and Technology, 
                I have a strong foundation in Java Full Stack Development, 
                with project experience in blockchain, cloud storage security, AI, and web development.
                <br />
                <br />
                I'm proud to have been recognized at ICOECA 2024 for my blockchain research.
                I also hold certifications in Flutter, Machine Learning, and Java Full Stack Development.
                <br />
                <br />
                I'm excited to kickstart my career and create impactful solutions that shape the future of innovation.
                Feel free to explore my portfolio or connect with me to discuss opportunities!
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;