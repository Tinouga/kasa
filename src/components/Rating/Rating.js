import styles from "./Rating.module.scss";
import {ReactComponent as StarIcon} from "../../assets/star.svg";

const Rating = ({rating}) => {
    const stars = Array.from({length: 5}, (_, index) => {
        const starType = index < rating ? "full" : "empty";
        return <StarIcon key={index} className={`${styles.star} ${styles[starType]}`} />;
    });

    return (
        <article className={styles.rating}>
            {stars}
        </article>
    );
};

export default Rating;
