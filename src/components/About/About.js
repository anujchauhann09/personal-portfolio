import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row
            style={{
              justifyContent: "center",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Col
              xs={12}
              md={7}
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>

            <Col
              xs={12}
              md={5}
              style={{
                paddingTop: "20px",
                paddingBottom: "30px",
                textAlign: "center",
              }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>

          <h1 className="project-heading text-center">
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading text-center">
            <strong className="purple">Tools</strong> I use
          </h1>

          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;