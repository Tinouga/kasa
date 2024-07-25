import Slideshow from "../../components/Slideshow";
import {useNavigate, useParams} from "react-router-dom";
import logements from "../../assets/data/logements.json";
import {useEffect, useState} from "react";
import styles from "./FicheLogement.module.scss";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";


const FicheLogement = () => {
    const {logementId} = useParams();

    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundLogement = logements.find(l => l.id === logementId);
        if(!foundLogement) {
            navigate('/error');
        }
        setLogement(foundLogement);
    }, [logementId]);

    if (!logement) {
        return <div>Loading...</div>
    }

    // assuming the host's name is a simple first name followed by a last name
    const [hostFirstName, ...hostLastName] = logement.host.name.split(" ");

    return (
        <section className={styles.ficheLogement}>
            <Slideshow pictures={logement.pictures}/>
            <div className={styles.infoContainer}>
                <div className={styles.infoLeftPanel}>
                    <h1>{logement.title}</h1>
                    <p className={styles.infoLocation}>{logement.location}</p>
                    <div className={styles.tags}>
                        {logement.tags.map((tag, index) => (
                            <Tag key={index} tag={tag}/>
                        ))}
                    </div>
                </div>
                <div className={styles.infoRightPanel}>
                    <article className={styles.host}>
                        <div className={styles.hostName}>
                            <h2>{hostFirstName}</h2>
                            <h2>{hostLastName.join(' ')}</h2>
                        </div>
                        <div className={styles.portrait}>
                            <img src={logement.host.picture} alt={logement.host.name}/>
                        </div>
                    </article>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className={styles.collapsesContainer}>
                <Collapse title="Description">
                    <p className={styles.description}>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul className={styles.equipments}>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </section>
    );
};

export default FicheLogement;
