import styles from './Header.module.scss';
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";

const navItems = [
    {label: 'Accueil', path: '/'},
    {label: 'A propos', path: '/about'},
];

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo"/>
        </div>
        <nav className={styles.navbar}>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({isActive}) => isActive ? styles.active : undefined}
                            to={item.path}>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
