import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SOCIAL_LINKS } from "../constants/personal";

const CONTACT_ICONS = [
  { href: SOCIAL_LINKS.github, icon: <AiFillGithub />, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: SOCIAL_LINKS.email, icon: <HiMail />, label: "Email" },
];

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
            LET'S BUILD<br />
            <span style={{ color: "var(--accent-green)" }}>SOMETHING</span>
          </h2>
          <p className="contact-sub">
            Open to full-time roles, freelance projects, and interesting collaborations.
            If you have something worth building, let's talk.
          </p>
          <div className="contact-btns">
            <a href={SOCIAL_LINKS.email} className="btn-glow">
              <HiMail /> Say Hello
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-secondary-custom">
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
          <div className="contact-links">
            {CONTACT_ICONS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                className="contact-link"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer>
        <div className="footer-new">
          <span className="footer-copy">Designed & built by <span>Anuj Chauhan</span></span>
          <span className="footer-copy">© {year} · All rights reserved</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
