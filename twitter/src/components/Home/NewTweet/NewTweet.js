import { useState } from "react";
import "./NewTweet.css";

function NewTweet(props) {
  const [tweets, setTweet]=useState([]); //its an object, not a string

  function handleTweetChange(event){
    tweet.value=event.target.value;
    setTweet();
  } //now it has become an object with two properties
   
  //creating another function
  //it will set the location of tweet
  function handleLocationChange(event){
    tweet.location=event.target.value;
    setTweet(tweet);
  }

  function handleTweetPost() {
    props.notifyNewTweet(tweet) //passed the data
    console.log(tweet);
    props.notifyNewTweet(tweet);
  } //function which have been passed to this new tweet componentfrom its parent component.
     return (
   <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <input
              placeholder="Location"
              onChange={handleLocationChange}
              type="text"
              className="form-control"
            />
            <textarea
              value={tweet}
              onChange={handleTweetChange}
              placeholder="What's happening !"
              className="tweet-box"></textarea>
                 <div className="reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-globe-americas"
                viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
              <a>Everyone can reply</a>
            </div>
            </form>
        </div>
        <div className="modal-footer">
          <button
            onClick={handleTweetPost}
            data-bs-dismiss="modal"
            type="button"
            className="btn-tweet btn-form">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}


            
}

export default NewTweet;
