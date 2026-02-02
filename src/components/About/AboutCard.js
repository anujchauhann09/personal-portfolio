import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Anuj Chauhan</span> from{" "}
            <span className="purple">Uttarakhand, India</span>.
            <br />I am an aspiring{" "}
            <span className="purple">Software Engineer</span> with a strong
            interest in building scalable and impactful applications.
            <br />
            Currently, I am pursuing my{" "}
            <span className="purple">
              Master of Computer Applications (MCA)
            </span>{" "}
            at <span className="purple">Graphic Era University</span>.
            <br />
            <br />
            Outside of coding, I enjoy learning new technologies, improving my
            problem-solving skills, and continuously working on projects that
            help me grow as a developer.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every problem is an opportunity to build something better."{" "}
          </p>
          <footer className="blockquote-footer">Anuj Chauhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
