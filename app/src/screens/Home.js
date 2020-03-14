import React from "react";
import { ActionBar, CountersBar } from "../components";
import "./Home.css";

function Home() {
  return (
    <div className="App">
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
