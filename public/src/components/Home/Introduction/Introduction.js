import React from "react";
import styles from "./Introduction.module.css";
import clouds from "./Clouds.png";
import geisel from "./Geisel.png";
import grass from "./Grass.png";
import sun from "./Sun.png";

function Introduction() {
    return (
        <div className={styles.introduction}>
            <div className={styles["intro-text"]}>
                Welcome to my portfolio website!<br></br>
                My name is Nyan Min Htet.<br></br>
                I'm a 3rd year student studying computer science at UC San Diego.
            </div>
            <img src={clouds} alt="clouds"></img>
            <img src={geisel} alt="clouds"></img>
            <img src={grass} alt="clouds"></img>
            <img src={sun} alt="clouds"></img>
        </div>
    );
}

export default Introduction;