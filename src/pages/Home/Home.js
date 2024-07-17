import styles from "./Home.module.scss";
import imgSource1 from "../../assets/img_src_1.png";
import logements from "../../assets/data/logements.json";
import LocationCard from "../../components/LocationCard";
import Banner from "../../components/Banner";

const Home = () => {
    const locationsCards = logements.map(location => (
        <LocationCard key={location.id} location={location} />
    ));

    return (
        <main className={styles.home}>
            <Banner title={"Chez vous, partout et ailleurs"} cover={imgSource1} />
            <section className={styles.locationsContainer}>
                {locationsCards}
            </section>
        </main>
    )
}

export default Home;
