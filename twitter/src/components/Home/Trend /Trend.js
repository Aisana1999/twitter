function Trend(props) {
  //content- is the same attribute name which you passed from a parent component
  const data = props.content;
  //passing the data to the properties
  return (
    <div className="trend">
      <p className="header">{data.header}</p>
      <p className="trend-text">{data.text}</p>
      <p className="reTweets">{data.retweets}</p>
    </div>
  );
}

export default Trend;
