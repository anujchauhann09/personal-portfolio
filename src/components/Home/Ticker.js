const items = [
  "React.js", "Node.js", "FastAPI", "Python", "PostgreSQL",
  "Redis", "Docker", "AWS", "LangChain", "Pinecone",
  "Next.js", "MongoDB", "Kafka", "TypeScript", "Django",
  "React.js", "Node.js", "FastAPI", "Python", "PostgreSQL",
  "Redis", "Docker", "AWS", "LangChain", "Pinecone",
  "Next.js", "MongoDB", "Kafka", "TypeScript", "Django",
];

function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div className="ticker-item" key={i}>
            <span>✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
