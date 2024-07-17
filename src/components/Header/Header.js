import styles from './Header.module.scss';
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => (
    <header className={styles.header}>
        <Logo/>
        <NavBar />
    </header>
);

export default Header;
