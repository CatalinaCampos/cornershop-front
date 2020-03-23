import React from "react";
import { ActionBar, CountersBar } from "../components";
import "./Home.css";

function Home() {
  console.log("render home");
  return (
    <div className="App">
      <div className="title">
        <p>COUNTERS</p>
      </div>
      <div className="bar">
        <ActionBar />
      </div>
      <div className="counters">
        <CountersBar />
      </div>
    </div>
  );
}

export default Home;
