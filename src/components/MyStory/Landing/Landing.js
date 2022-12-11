import React from "react";
import styles from "./Landing.module.css";
import scrollIcon from "./scroll-icon.png";

const Landing = ({ offsetY }) => {
    const ScrollButton = () => {
        const scrollToBottom = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        };

        return (
            <button
                className={styles.btn}
                onClick={scrollToBottom}
                style={{
                    display: offsetY < 3 ? "inline" : "none",
                }}
            >
                Been here before?
            </button>
        );
    };

    return (
        <div className={styles["landing-page"]}>
            <div className={styles.welcome}>
                <div className={styles["welcome-text"]}>Hey there!</div>
                <img
                    src={scrollIcon}
                    alt="scroll"
                    className={styles["scroll-icon"]}
                ></img>
                <div className={styles.scroll}>Scroll down</div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default Landing;
