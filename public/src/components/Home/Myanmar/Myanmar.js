import React, { useEffect, useState } from "react";
import styles from "./Myanmar.module.css";
import { Parallax } from "react-parallax";
import backgroundImage from "./Myanmar.jpg";
import hotAirBalloon from "./HotAirBalloon.png";

const Myanmar = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div className={styles.container}>
            <Parallax
                className={styles.background}
                bgImage={backgroundImage}
                alt="myanmar"
                strength={700}
            ></Parallax>
            <img
                src={hotAirBalloon}
                alt="hotairballoon"
                className={styles["hot-air-balloon-3"]}
                style={{ transform: `translateX(${offsetY * -0.2}px)` }}
            ></img>
            <img
                src={hotAirBalloon}
                alt="hotairballoon"
                className={styles["hot-air-balloon-2"]}
                style={{ transform: `translateX(${offsetY * -0.6}px)` }}
            ></img>
            <img
                src={hotAirBalloon}
                alt="hotairballoon"
                className={styles["hot-air-balloon-1"]}
                style={{ transform: `translateX(${offsetY * -1}px)` }}
            ></img>
            <div
                className={styles.biography}
                style={{ transform: `translateY(${offsetY * -0.5}px)` }}
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
