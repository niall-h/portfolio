import React, { useRef, useState } from "react";
import useIntersection from "../../Helpers/useIntersection";
import findOffsetTop from "../../Helpers/findOffsetTop";
import styles from "./Myanmar.module.css";
import CloudsLeft from "./clouds-left.png";
import CloudsRight from "./clouds-right.png";
import hotAirBalloon from "./HotAirBalloon.png";
import Mountains from "./Mountains.png";
import Bullet from "./Bullet.png";
import AR from "./AR.png";

const Myanmar = ({ offsetY }) => {
  const [offset, setOffset] = useState(0);
  const targetRef = useRef(null);
  const inViewport = useIntersection(targetRef, "0px");

  const setStyle = (axis, amount) => {
    return inViewport
      ? {
          transform: `translate${axis}(${(offsetY - offset) * amount}px)`,
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
        src={hotAirBalloon}
        alt="hotairballoon"
        className={styles["hot-air-balloon-3"]}
        style={setStyle("X", 0.3)}
      ></img>
      <img
        src={hotAirBalloon}
        alt="hotairballoon"
        className={styles["hot-air-balloon-2"]}
        style={setStyle("X", 0.5)}
      ></img>
      <img
        src={hotAirBalloon}
        alt="hotairballoon"
        className={styles["hot-air-balloon-1"]}
        style={setStyle("X", -0.7)}
      ></img>
      <img
        src={CloudsLeft}
        alt="clouds"
        className={styles["clouds-left"]}
        style={setStyle("X", 0.2)}
      ></img>
      <img
        src={CloudsRight}
        alt="clouds"
        className={styles["clouds-right"]}
        style={setStyle("X", -0.2)}
      ></img>
      <h1 className={styles["biography-left"]} style={setStyle("X", -0.3)}>
        I was born and raised in
        <div className={styles.myanmar}>MYANMAR,</div> a country enriched with
        culture and beauty the world has yet to see.
      </h1>
      <h1 className={styles["biography-up"]} style={setStyle("Y", -0.5)}>
        She was hidden among the mountains, and the historical relics, and one
        brutal, brutal dictatorship which continues to this day.
      </h1>
      <img
        src={Mountains}
        alt="mountains"
        className={styles["mountains"]}
      ></img>
      <h1 className={styles["biography-right"]} style={setStyle("X", 0.6)}>
        As exquisite as Myanmar was, she was also technologically regressive,
        thanks to a power-hungry military.
      </h1>
      <img src={AR} alt="AR" className={styles["AR"]}></img>
      <img
        src={Bullet}
        alt="bullet"
        className={styles["bullet"]}
        style={setStyle("X", -1)}
      ></img>
      <h1 className={styles["biography-down"]}>
        Growing up, I was exposed to very little technology. I nearly majored in
        the humanities for college. But fate had other plans. At age 16, I
        discovered coding.
      </h1>
    </div>
  );
};

export default Myanmar;
