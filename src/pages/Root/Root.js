import {Outlet} from "react-router-dom";
import Header from "../../components/Header";
import styles from "./Root.module.scss";
import {Fragment} from "react";
import Footer from "../../components/Footer";

const Root = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <Header/>
                <Outlet/>
            </div>
            <Footer />
        </>
    );
}

export default Root;
