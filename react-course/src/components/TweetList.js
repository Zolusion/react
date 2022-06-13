import Tweet from "./Tweet";

const TweetList = ({name, tweets, setName}) => {

return (
    <div className="tweetList">
        {tweets.map((tweet) => (
            <Tweet name={name} tweets={tweet}/>
        ))}
    </div>
    );
};

export default TweetList;