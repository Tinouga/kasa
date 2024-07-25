import styles from "./LocationCard.module.scss";
import {Link} from "react-router-dom";

const LocationCard = ({location}) => {
    const cardStyle = {
        backgroundImage: `url(${location.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <Link to={`/logement/${location.id}`}>
            <article className={styles.card} style={cardStyle}>
                <h2>{location.title}</h2>
            </article>
        </Link>
    )
};

export default LocationCard;
