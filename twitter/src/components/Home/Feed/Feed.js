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
}
export default Feed;
