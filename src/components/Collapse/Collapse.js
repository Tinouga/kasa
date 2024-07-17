import styles from "./Collapse.module.scss";
import {useState } from 'react';
import { ReactComponent as ArrowIcon } from "../../assets/arrow_back.svg";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className={`${styles.collapse} ${isOpen ? styles.open : undefined}`}>
            <button onClick={toggleCollapse} className={styles.collapseButton}>
                <span>{title}</span>
                <ArrowIcon />
            </button>
            {isOpen && <div className={styles.collapseContent}>{children}</div>}
        </article>
    )
};

export default Collapse;
