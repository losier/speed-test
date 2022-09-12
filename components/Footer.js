import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.copyright}>
        <small>&copy; Losier. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
