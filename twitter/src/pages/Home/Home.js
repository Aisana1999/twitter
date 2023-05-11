import "./Home.css";
import Logo from "../../components/Home/Logo/Logo";
import Feed from "../../components/Home/Feed/Feed";
import LoginOption from "../../components/Home/LoginOption/LoginOption";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons//font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";

function Home() {
  console[(tweets, setTweets)] = useState([]);
  function newTweetReceived(newTweet) {
    console.log("This is home component.");
    tweets.push(newTweet);
    setTweets(tweets);
    console.log(newTweet);
  }

  return (
    <div className="home">
      <div className="leftContainer">
        {" "}
        <Logo notifyNewTweet={newTweetReceived} /> Left
      </div>
      <div className="centerContainer">
        {" "}
        <Feed notifyNewTweet={newTweetReceived} /> Center
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
