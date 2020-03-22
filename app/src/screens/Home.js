import React from "react";
import { ActionBar, CountersBar } from "../components";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <div className="title">
        <p>C O U N T E R S</p>
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
