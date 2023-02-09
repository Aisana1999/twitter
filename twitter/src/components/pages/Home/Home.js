import "./Home.css";
import Logo from "../../Components/Page/Logo/Logo";
import Feed from "./Feed/Feed";
import LoginOption from "../../Components/Trend /LoginOption";
import { useState } from "react";

function Home() {
  return (
    <div className="home">
      <div className="leftContainer">
        {" "}
        <Logo /> Left
      </div>
      <div className="centerContainer">
        {" "}
        <Feed /> Center
      </div>
      <div className="rightContainer">
        {" "}
        <LoginOption />
        Right
      </div>
    </div>
  );
}
export default Home;
