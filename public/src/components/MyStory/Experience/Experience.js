import React from "react";
import styles from "./Experience.module.css";
import computerLayer from "./Computer2.png";
import vscode from "./vscode.png";
import education from "./Education.png";
import work from "./Work.png";
import soundcloud from "./soundcloud-icon.png";
import LinkedIn from "./linkedIn-icon.png";
import Github from "./github-icon.png";
import VSCodeIcon from "./vscode-icon.png";

const Experience = ({ offsetY }) => {
    return (
        <div className={styles.container}>
            <div className={styles["computer-container"]}>
                <img
                    className={styles.computer}
                    src={computerLayer}
                    alt="computer"
                ></img>
                <div className={styles["app-bar-container"]}>
                    <div className={styles["app-bar"]}></div>
                    <a
                        href="https://github.com/niall-h"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Github}
                            alt="Github"
                            className={`${styles.icon} ${styles.github}`}
                        ></img>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nyan-min-htet/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={LinkedIn}
                            alt="LinkedIn"
                            className={`${styles.icon} ${styles.linkedIn}`}
                        ></img>
                    </a>
                    <a
                        href="https://soundcloud.com/ni4llh"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={soundcloud}
                            alt="soundcloud"
                            className={`${styles.icon} ${styles.soundcloud}`}
                        ></img>
                    </a>
                    <div className={styles.divider}></div>
                    <img
                        src={VSCodeIcon}
                        alt="VSCode-icon"
                        className={`${styles.icon} ${styles["vscode-icon"]}`}
                    ></img>
                </div>
            </div>
            <img className={styles.vscode} src={vscode} alt="vscode"></img>
            <div className={styles["spacer"]}></div>
            <img
                className={styles["screen-content"]}
                src={education}
                alt="education"
            ></img>
            <img
                className={styles["screen-content"]}
                src={work}
                alt="work"
            ></img>
        </div>
    );
};

export default Experience;
