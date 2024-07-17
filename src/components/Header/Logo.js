import styles from "./Logo.module.scss";
import logo from "../../assets/logo.png";

const Logo = () => (
    <div className={styles.logo}>
        <img src={logo} alt="Logo"/>
    </div>
);

export default Logo;
