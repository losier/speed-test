import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <ul className={styles.socials}>
        <li>
          <a
            href="https://github.com/losier"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://aarab.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://Instagram.com/zzcwc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://aarab.vercel.app/project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="mailto:arv95464@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className={styles.copyright}>
        <small>&copy; Losier. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
