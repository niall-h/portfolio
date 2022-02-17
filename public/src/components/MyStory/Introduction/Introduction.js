import React, { useState, useRef } from "react";
import useIntersection from "../../Helpers/useIntersection";
import findOffsetTop from "../../Helpers/findOffsetTop";
import styles from "./Introduction.module.css";
import clouds from "./Clouds.png";
import geisel from "./Geisel.png";
import land from "./Land.png";
import sun from "./Sun.png";

function Introduction({ offsetY }) {
    const [offset, setOffset] = useState(0);
    const targetRef = useRef(null);
    const inViewport = useIntersection(targetRef, "0px");

    const setStyle = (axis, amount) => {
        return inViewport
            ? {
                  transform: `translate${axis}(${
                      (offsetY - offset) * amount
                  }px)`,
              }
            : { transform: "none" };
    };

    return (
        <div
            className={styles.introduction}
            ref={targetRef}
            onLoad={() => setOffset(findOffsetTop(targetRef))}
        >
            <div className={styles.container}>
                <img
                    src={sun}
                    alt="sun"
                    className={styles.sun}
                    style={setStyle("Y", -0.5)}
                ></img>
                <img
                    src={clouds}
                    alt="clouds"
                    className={styles.clouds}
                    style={setStyle("X", -1)}
                ></img>
                <img
                    src={geisel}
                    alt="library"
                    className={styles.geisel}
                    style={setStyle("Y", 0.1)}
                ></img>
                <img src={land} alt="grass" className={styles.grass}></img>
                <div
                    className={styles["intro-text"]}
                    style={setStyle("Y", -0.4)}
                >
                    Welcome to my portfolio website!<br></br>
                    <br></br>
                    My name is <b>Nyan Min Htet</b>.<br></br>
                    <br></br>
                    I'm an aspiring software engineer, armed with a drive to push boundaries and make impact.
                </div>
            </div>
        </div>
    );
}

export default Introduction;
