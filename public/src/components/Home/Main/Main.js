import React from "react";
import styles from "./Main.module.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => {
    return (
        <div className={styles.container}>
            <Router>
                <NavBar />
            </Router>
        </div>
    );
};

export default Main;
