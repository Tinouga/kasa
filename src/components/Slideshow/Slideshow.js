import styles from "./Slideshow.module.scss";
import {useState} from "react";
import {ReactComponent as ArrowBackIcon} from "../../assets/arrow_backward.svg";
import {ReactComponent as ArrowForwardIcon} from "../../assets/arrow_forward.svg";


const Slideshow = ({pictures}) => {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }

    return (
        <div className={styles.slideshow}>
            {pictures.map((picture, index) => (
                <div key={index} className={index === current ? `${styles.slide} ${styles.active}` : styles.slide}>
                    <img src={picture} alt="Slideshow"/>
                </div>
            ))}
            {length > 1 &&
                <>
                    <button onClick={prevSlide} className={styles.prevBtn}><ArrowBackIcon/></button>
                    <button onClick={nextSlide} className={styles.nextBtn}><ArrowForwardIcon/></button>
                    <span className={styles.count}>{current + 1}/{length}</span>
                </>
            }
        </div>
    );
};

export default Slideshow;
