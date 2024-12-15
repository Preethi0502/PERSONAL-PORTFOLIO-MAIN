import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ICOECA_Certificate from "../../images/Conference Certificate-1.png";
import Cognibot_Certificate from "../../images/PT-1 Cognibot Certificate-1.png";
import Algoxfusion_Certificate from "../../images/PT-2 Algoxfusion Certificate-1.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={ICOECA_Certificate}
                alt="ICOECA Certificate"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={Cognibot_Certificate}
                alt="Cognibot Certificate"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={Algoxfusion_Certificate}
                alt="Algoxfusion Certificate"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
