import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaLinux, FaChrome, FaAndroid } from "react-icons/fa";
import { SiVisualstudiocode, SiPycharm } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows size={26} />
        <div className="tech-icons-text">Windows</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaLinux size={26} />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChrome size={26} />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={26} />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm size={26} />
        <div className="tech-icons-text">PyCharm</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAndroid size={26} />
        <div className="tech-icons-text">Android Studio</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
