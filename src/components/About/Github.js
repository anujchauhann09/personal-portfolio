import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";

function Github() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 className="project-heading pb-4">
        Days I <strong className="purple">Code</strong>
      </h1>

      <div style={{ width: "100%", overflowX: "auto" }}>
        <GitHubCalendar
          username="anujchauhann09"
          blockSize={width < 576 ? 10 : width < 768 ? 12 : 15}
          blockMargin={width < 576 ? 3 : 5}
          fontSize={width < 576 ? 10 : 14}
          color="#c084f5"
        />
      </div>
    </Row>
  );
}

export default Github;