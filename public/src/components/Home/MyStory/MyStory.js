import React, { useState, useRef } from "react";
import styles from "./MyStory.module.css";
import useIntersection from "../../Helpers/useIntersection";
import findOffsetTop from "../../Helpers/findOffsetTop";

function MyStory({ offsetY }) {
    const [offset, setOffset] = useState(0);
    const targetRef = useRef(null);
    const inViewport = useIntersection(targetRef, "200px");

    const setStyle = (amount) => {
        return inViewport
            ? (offsetY + window.innerHeight - offset) * amount
            : 50;
    };

    return (
        <div
            className={styles["story-title-container"]}
            ref={targetRef}
            onLoad={() => setOffset(findOffsetTop(targetRef))}
        >
            <div
                className={styles["this-is-my-story"]}
                style={{ "font-size": setStyle(0.03) + "px" }}
            >
                This is my story.
            </div>
            <div className={styles.spacer}></div>
            <div className={styles["black-background"]}></div>
        </div>
    );
}

export default MyStory;
