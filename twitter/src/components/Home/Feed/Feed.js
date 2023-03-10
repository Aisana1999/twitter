import "./Feed.css";
import { useState, useEffect } from "react";

function Feed(props) {
  const [alltweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("new tweets");
    setTweets(props.tweets);
  }, [props.tweets]);

  // trendData is a variable to store data.
  // setTrendData is a setter function to update the variable.
  // useState converts into a state.
  // state=> any changes will refresh the component.
  const [trendData, setTrendData] = useState([]);
  let data= "My Data";
  //manages side effects of component re-rendering.
  useEffect(() => {
    //task which needs to be managed
    //1.read data from trend.json file
    fetch("trend.json");
    //2.Data is retrieved
    .then(res=>{
      console.log("Raw Data");
      console.log(res);
      return res.json();
    })
    //3.Data is converted .
    .then(convertedData=>{
      //trendData=convertedData;
      setTrendData(convertedData);
      console.log(trendData.length);//6
    })
  });

  return{
    <div className="feed-main">
    {/* Search Box */}
    <div className="search-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
  }
}
export default Feed;
