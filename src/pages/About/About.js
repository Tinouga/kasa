import styles from "./About.module.scss";
import imgSource2 from "../../assets/img_src_2.png";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

const About = () => {
    const collapseItems = [
        {
            title: "Fiabilité",
            content: <p>lorem ipsum dolor sit amet</p>
        },
        {
            title: "Respect",
            content: <p>lorem ipsum dolor sit amet</p>
        },
        {
            title: "Service",
            content: <p>lorem ipsum dolor sit amet</p>
        },
        {
            title: "Sécurité",
            content: <p>lorem ipsum dolor sit amet</p>
        }
    ]

    return (
        <main className={styles.about}>
            <Banner cover={imgSource2} />
            <section className={styles.collapseContainer}>
                {collapseItems.map((collapse, index) => (
                    <Collapse key={index} title={collapse.title}>
                        {collapse.content}
                    </Collapse>
                ))}
            </section>
        </main>
    )
};

export default About;
