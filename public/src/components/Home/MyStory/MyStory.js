import React, { useEffect, useState } from "react";
import styles from "./MyStory.module.css";

function MyStory() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles["story-title-container"]}>
            <div
                className={styles["this-is-my-story"]}
                style={{ "font-size": `${offsetY * 0.05}px` }}
            >
                This is my story.
            </div>
            <div className={styles.spacer}></div>
            <div className={styles["black-background"]}></div>
        </div>
    );
}

export default MyStory;
