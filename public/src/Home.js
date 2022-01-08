import React, { Component } from "react";
import "./index.css";
import Landing from "./components/Home/Landing/Landing";
import Introduction from "./components/Home/Introduction/Introduction";

function Home() {
    return (
        <div className="homepage">
            <Landing />
            <Introduction />
        </div>
    );
}

export default Home;