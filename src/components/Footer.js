import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="contact-section">
        <div className="contact-bg" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            Contact
          </div>
          <h2 className="contact-heading">
            LET'S BUILD
            <br />
            <span style={{ color: "var(--accent-green)" }}>SOMETHING</span>
          </h2>
          <p className="contact-sub">
            Open to full-time roles, freelance projects, and interesting collaborations.
            If you have something worth building, let's talk.
          </p>
          <div className="contact-btns">
            <a href="mailto:heyanujchauhan@gmail.com" className="btn-glow">
              <HiMail /> Say Hello
            </a>
            <a
              href="https://www.linkedin.com/in/anujchauhann"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-custom"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/anujchauhann09" target="_blank" rel="noreferrer" className="contact-link" aria-label="GitHub">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/anujchauhann" target="_blank" rel="noreferrer" className="contact-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:heyanujchauhan@gmail.com" className="contact-link" aria-label="Email">
              <HiMail />
            </a>
          </div>
        </motion.div>
      </section>

      <footer>
        <div className="footer-new">
          <span className="footer-copy">
            Designed & built by <span>Anuj Chauhan</span>
          </span>
          <span className="footer-copy">© {year} · All rights reserved</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
