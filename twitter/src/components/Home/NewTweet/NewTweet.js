function NewTweet() {
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
              onChange={handleTweetChange}
              placeholder="What's happening !"
              className="tweet-box"></textarea>

              );
}

export default NewTweet;
