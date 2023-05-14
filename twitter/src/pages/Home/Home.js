import "./Home.css";
import Logo from "../../components/Home/Logo/Logo";
import Feed from "../../components/Home/Feed/Feed";
import LoginOption from "../../components/Home/LoginOption/LoginOption";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons//font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";

function Home() {
  const[(tweets, setTweets)] = useState([]);

  function newTweetReceived(newTweet) {
    console.log("This is home component.");
    console.log(tweets);
    const newTweetsArray=[...tweets];
    newTweetsArray.push(newTweet);
    console.log(tweets);
    setTweets(newTweetsArray);
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
        <Feed tweets={tweets} /> Center
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
