import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import ICOECA_Logo from "../../images/Conference Certificate-1.png";
import Cognibot_Logo from "../../images/PT-1 Cognibot Certificate-1.png";
import Algoxfusion_Logo from "../../images/PT-2 Algoxfusion Certificate-1.png";
import Pentagon_Logo from "../../images/SIST-2024-40110999-OL-Preethi. A (1)-1.png";

export default function Certification() {
return (
<div>
<Container fluid className="certificate-section" id="about">
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
<Col ms={12} className="mt-3">
<Row className="g-5">
<Col md={4}>
<Fade bottom duration={2000} distance="20px">
<div className="cert-card">
<div className="content">
<a
href="https://www.hackerrank.com/certificates/3573ea1a35bb"
target="_blank"
rel="noopener noreferrer"
>
<div className="content-overlay"></div>
<div
className="cert-header"
style={{ backgroundColor: "white" }}
>
{<img className="logo_img" src={ICOECA_Logo} alt={ICOECA_Logo} />}
</div>
<div className="content-details fadeIn-top">
<h3
className="content-title"
style={{ color: "black" }}
>
Certificate
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
- ICOECA 2024
</h3>
</div>
</div>
</Fade>
</Col>
<Col md={4}>
<Fade bottom duration={2000} distance="20px">
<div className="cert-card">
<div className="content">
<a
href="https://www.cognibot.com/certificate"
target="_blank"
rel="noopener noreferrer"
>
<div className="content-overlay"></div>
<div
className="cert-header"
style={{ backgroundColor: "white" }}
>
{<img className="logo_img" src={Cognibot_Logo} alt={Cognibot_Logo} />}
</div>
<div className="content-details fadeIn-top">
<h3
className="content-title"
style={{ color: "black" }}
>
Certificate
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
- Cognibot
</h3>
</div>
</div>
</Fade>
</Col>
<Col md={4}>
<Fade bottom duration={2000} distance="20px">
<div className="cert-card">
<div className="content">
<a
href="https://www.algoxfusion.com/certificate"
target="_blank"
rel="noopener noreferrer"
>
<div className="content-overlay"></div>
<div
className="cert-header"
style={{ backgroundColor: "white" }}
>
{<img className="logo_img" src={Algoxfusion_Logo} alt={Algoxfusion_Logo} />}
</div>
<div className="content-details fadeIn-top">
<h3
className="content-title"
style={{ color: "black" }}
>
Certificate
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
- Algoxfusion Private Limited
</h3>
</div>
</div>
</Fade>
</Col>
</Row>
</Col>
</Row>
<div className="blog--viewAll">
<Link to="/certificatepage">
<button className="btn btn-primary">
View All
<HiArrowRight className="viewArr" />
</button>
</Link>
</div>
</Container>
</Container>
</div>
);
}