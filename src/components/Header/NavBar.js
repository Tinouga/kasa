import styles from "./NavBar.module.scss";
import {NavLink} from "react-router-dom";

const navItems = [
    {label: 'Accueil', path: '/'},
    {label: 'A propos', path: '/about'},
];

const NavBar = () => (
    <nav className={styles.navbar}>
        <ul>
            {navItems.map((item, index) => (
                <li key={index}>
                    <NavLink
                        className={({isActive}) => isActive && styles.active}
                        to={item.path}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default NavBar;
