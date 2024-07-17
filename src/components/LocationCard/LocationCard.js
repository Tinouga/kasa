import styles from "./LocationCard.module.scss";

const LocationCard = ({ location }) => {
    const cardStyle = {
        backgroundImage: `url(${location.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <article className={styles.card} style={cardStyle}>
            <h2>{location.title}</h2>
        </article>
    )
};

export default LocationCard;
