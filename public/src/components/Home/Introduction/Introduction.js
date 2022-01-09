import React, { useEffect, useState } from "react";
import styles from "./Introduction.module.css";
import clouds from "./Clouds.png";
import geisel from "./Geisel.png";
import grass from "./Grass.png";
import sun from "./Sun.png";

function Introduction() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.introduction}>
            <div className={styles.container}>
                <img
                    src={sun}
                    alt="sun"
                    className={styles.sun}
                    style={{ transform: `translateY(${offsetY * -0.15}px)` }}
                ></img>
                <img
                    src={clouds}
                    alt="clouds"
                    className={styles.clouds}
                    style={{ transform: `translateX(${offsetY * -1}px)` }}
                ></img>
                <img
                    src={geisel}
                    alt="library"
                    className={styles.geisel}
                    style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                ></img>
                <img src={grass} alt="grass" className={styles.grass}></img>
                <div
                    className={styles["intro-text"]}
                    style={{ transform: `translateY(${offsetY * -0.4}px)` }}
                >
                    Welcome to my portfolio website!<br></br>
                    <br></br>
                    My name is <b>Nyan Min Htet</b>.
                    <br></br>
                    <br></br>
                    I'm a junior at UC San Diego, currently studying Computer
                    Science.
                </div>
            </div>
        </div>
    );
}

export default Introduction;
