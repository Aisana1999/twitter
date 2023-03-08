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
}
export default Feed;
