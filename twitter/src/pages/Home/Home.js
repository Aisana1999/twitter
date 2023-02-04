import "./Home.css";
import Logo from "../../Components/Home/Logo/Logo";
import Feed from "../../Components/Home/Feed/Feed";
import LoginOption from "../../Components/Home/LoginOption";
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
