import styles from "./Error.module.scss";
import {Link} from "react-router-dom";
import useLayout from "../../useLayout";

const Error = () => {
    return (
        <main className={styles.error}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>Retourner sur la page d’accueil</Link>
        </main>
    );
};

const ErrorBoundary = () => useLayout(<Error/>);

export default ErrorBoundary;
