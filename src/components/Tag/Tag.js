import styles from "./Tag.module.scss";

const Tag = ({tag}) => (
    <article className={styles.tag}>
        <span>{tag}</span>
    </article>
);

export default Tag;
