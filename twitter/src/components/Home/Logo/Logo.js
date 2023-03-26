
function Logo(props) {
  function newTweetReceived(nt) {
    console.log("This is logo component.");
    console.log(nt);
    props.notifyNewTweet(nt);
  }
   return (
    <div className="options">
      <ul>
        <li>
        <a href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968823.png"></img>
        </a>
        </li>
        <li className="option">
          <a href="#">#&nbsp;&nbsp;&nbsp;Explore</a>
        </li>
        <li className="option">
          <a href="#">
            {" "}

  

export default Logo;
