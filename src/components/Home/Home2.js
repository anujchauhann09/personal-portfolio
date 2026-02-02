import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an aspiring Software Engineer who enjoys turning ideas into
              practical and scalable applications. I’m currently pursuing my
              Master’s in Computer Applications (MCA) and actively building
              projects to strengthen my fundamentals and real-world engineering
              skills.
              <br />
              <br />
              I’m comfortable working with
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript, Java, C++, and SQL{" "}
                </b>
              </i>
              and I enjoy applying these across backend and full-stack
              development.
              <br />
              <br />
              My primary interests lie in building
              <i>
                <b className="purple">
                  {" "}
                  Backend Systems, RESTful APIs, and Data-Driven Web
                  Applications{" "}
                </b>
              </i>
              with a focus on clean architecture, scalability, and reliability.
              <br />
              <br />
              Whenever possible, I enjoy developing applications using
              <b className="purple"> Node.js </b>, backend frameworks like
              <b className="purple"> FastAPI</b> and
              <b className="purple"> Django</b>, along with modern frontend
              tools such as{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
