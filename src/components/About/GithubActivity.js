import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsStar, BsCircleFill } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import axios from "axios";
import { fadeUp } from "../../utils/animations";
import { GITHUB_USER } from "../../constants/personal";
import { LANG_COLORS } from "../../constants/skills";
import { timeAgo } from "../../utils/time";

function RepoCard({ repo, index }) {
  const langColor = LANG_COLORS[repo.language] || LANG_COLORS.default;
  return (
    <motion.div
      className="gh-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="gh-icon"><BsGithub /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="gh-repo">
          <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: "var(--accent-green)", textDecoration: "none" }}>
            {repo.name}
          </a>
        </div>
        {repo.description && (
          <div className="gh-message" style={{ marginBottom: "6px" }}>
            {repo.description.length > 80 ? repo.description.slice(0, 80) + "…" : repo.description}
          </div>
        )}
        <div className="gh-meta">
          {repo.language && (
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <BsCircleFill style={{ color: langColor, fontSize: "0.6rem" }} />
              {repo.language}
            </span>
          )}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <BsStar /> {repo.stargazers_count}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <VscRepoForked /> {repo.forks_count}
          </span>
          <span>Updated {timeAgo(repo.pushed_at)}</span>
        </div>
      </div>
      <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", flexShrink: 0 }} aria-label={`View ${repo.name} on GitHub`}>
        <BsGithub />
      </a>
    </motion.div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", padding: "0.7rem 1.2rem", display: "flex", flexDirection: "column", gap: "2px" }}>
      <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>{value}</span>
      <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
    </div>
  );
}

function GithubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`)
      .then((res) => {
        setRepos(res.data.filter((r) => !r.fork).slice(0, 6));
        setStats({
          totalStars: res.data.reduce((acc, r) => acc + r.stargazers_count, 0),
          totalRepos: res.data.filter((r) => !r.fork).length,
        });
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ margin: "4rem 0 2rem" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="section-label">GitHub</div>
        <h2 className="section-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.5rem" }}>
          My <span style={{ color: "var(--accent-green)" }}>Repositories</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          Recent projects from my GitHub
        </p>
        {stats && (
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            <StatCard label="Public Repos" value={stats.totalRepos} />
            <StatCard label="Total Stars" value={stats.totalStars} />
            <StatCard label="Profile" value={`@${GITHUB_USER}`} />
          </div>
        )}
      </motion.div>

      {loading ? (
        <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Loading repositories...</div>
      ) : repos.length === 0 ? (
        <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>No public repositories found.</div>
      ) : (
        <div className="github-activity-grid">
          {repos.map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i} />)}
        </div>
      )}
    </div>
  );
}

export default GithubActivity;
