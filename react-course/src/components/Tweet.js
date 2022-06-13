const Tweet = ({name, tweets}) => {
    return(
    
        <div className="tweet">
            <h1 className="heading">Tweet</h1>
            <h2>{name}</h2>
            <h3>{tweets}</h3>
            <button>Like</button>
            <button>Delete</button>
        </div>
    );
};

export default Tweet;