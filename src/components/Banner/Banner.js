import styles from "./Banner.module.scss";

const Banner = ({ title, cover }) => {
    const bannerStyle = {
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <header className={styles.banner} style={bannerStyle}>
            {title && <h1>{title}</h1>}
        </header>
    )
};

export default Banner;
