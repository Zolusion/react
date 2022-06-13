import "../style.css";


const CreateTweet = ({setTweets, tweets, textInput, setTextInput}) => {


        const submitTweetHandler = (e) => {
            e.preventDefault();
            setTweets([...tweets, textInput]);
            setTextInput('');
        }
        
        const userInputHandler = (e) => {
        setTextInput(e.target.value); 
        
    }

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="30" rows="5"></textarea>
            <button>Submit</button>
        </form>
    );
};

export default CreateTweet;