import React, { useRef, useState } from "react";
import useIntersection from "../../Helpers/useIntersection";
import findOffsetTop from "../../Helpers/findOffsetTop";
import styles from "./Myanmar.module.css";
import backgroundImage from "./Myanmar.jpg";
import hotAirBalloon from "./HotAirBalloon.png";

const Myanmar = ({ offsetY }) => {
    const [offset, setOffset] = useState(0);
    const targetRef = useRef(null);
    const inViewport = useIntersection(targetRef, "200px");

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
            className={styles.container}
            ref={targetRef}
            onLoad={() => setOffset(findOffsetTop(targetRef))}
        >
            <img
                src={backgroundImage}
                alt="myanmar"
                className={styles.background}
                style={setStyle("Y", 0.5)}
            ></img>
            <img
                src={hotAirBalloon}
                alt="hotairballoon"
                className={styles["hot-air-balloon-3"]}
                style={setStyle("X", -0.2)}
            ></img>
            <img
                src={hotAirBalloon}
                alt="hotairballoon"
                className={styles["hot-air-balloon-2"]}
                style={setStyle("X", -0.6)}
            ></img>
            <img
                src={hotAirBalloon}
                alt="hotairballoon"
                className={styles["hot-air-balloon-1"]}
                style={setStyle("X", -1)}
            ></img>
            <div
                className={styles.biography}
                style={setStyle("Y", -0.5)}
            >
                I was born and raised in Myanmar, a country enriched with
                culture and beauty the world has yet to see.<br></br>
                <br></br>
                She was hidden among the mountains, and the historical relics,
                and one brutal, brutal dictatorship which continues to this day.
                <br></br>
                <br></br>As exquisite as Myanmar was, she was also
                technologically regressive, thanks to a power-hungry military.
                <br></br>
                <br></br>Growing up, I was exposed to very little technology. I
                nearly majored in the humanities for college. But fate had other
                plans. At age 16, I discovered coding.
            </div>
        </div>
    );
};

export default Myanmar;
