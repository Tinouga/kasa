import styles from "./Layout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useLayout = (content) => (
    <div className={styles.layout}>
        <div className={styles.mainContainer}>
            <Header/>
            {content}
        </div>
        <Footer/>
    </div>
);

export default useLayout;
