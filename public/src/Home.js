import React, { useState, useEffect } from "react";
import "./index.css";
import Landing from "./components/Home/Landing/Landing";
import Introduction from "./components/Home/Introduction/Introduction";
import MyStory from "./components/Home/MyStory/MyStory";
import Myanmar from "./components/Home/Myanmar/Myanmar";

function Home() {
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
            <Landing />
            <Introduction />
            <MyStory />
            <Myanmar />
        </div>
    );
}

export default Home;
