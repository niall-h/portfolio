import React from "react";
import "./index.css";
import Landing from "./components/Home/Landing/Landing";
import Introduction from "./components/Home/Introduction/Introduction";
import MyStory from "./components/Home/MyStory/MyStory";
import Myanmar from "./components/Home/Myanmar/Myanmar";

function Home() {
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