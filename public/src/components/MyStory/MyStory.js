import React, { useState, useEffect } from "react";
import Landing from "./Landing/Landing";
import Introduction from "./Introduction/Introduction";
import Background from "./Background/Background";
import Myanmar from "./Myanmar/Myanmar";
import Experience from "./Experience/Experience";

function MyStory() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="homepage">
            <Landing offsetY={offsetY} />
            <Introduction offsetY={offsetY} />
            <Background offsetY={offsetY} />
            <Myanmar offsetY={offsetY} />
            <Experience offsetY={offsetY} />
            <div
                style={{
                    height: "30vh",
                    backgroundImage:
                        "linear-gradient(rgb(129, 196, 202), white)",
                }}
            ></div>
        </div>
    );
}

export default MyStory;
