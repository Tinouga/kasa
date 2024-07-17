import styles from "./Footer.module.scss";
import logo from "../../assets/logo_footer.png";

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo"/>
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;
