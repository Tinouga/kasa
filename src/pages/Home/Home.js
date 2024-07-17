import styles from "./Home.module.scss";
import imgSource1 from "../../assets/img_src_1.png";
import logements from "../../assets/data/logements.json";
import LocationCard from "../../components/LocationCard";

const Home = () => {
    const headerStyle = {
        backgroundImage: `url(${imgSource1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const locationsCards = logements.map(location => (
        <LocationCard key={location.id} location={location} />
    ));

    return (
        <main className={styles.home}>
            <header style={headerStyle}>
                <h1>Chez vous, partout et ailleurs</h1>
            </header>
            <section className={styles.locationsContainer}>
                {locationsCards}
            </section>
        </main>
    )
}

export default Home;
