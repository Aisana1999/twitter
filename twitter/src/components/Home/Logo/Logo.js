
function Logo(props) {
  function newTweetReceived(nt) {
    console.log("This is logo component.");
    console.log(nt);
    props.notifyNewTweet(nt);
  }

  

export default Logo;
