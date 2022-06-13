import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import {useState} from 'react';
import './styles/App.css';


function App() {
    const [name, setName] = useState('Mike');

    const [textInput, setTextInput] = useState(""); // statement - functie 
    const [tweets, setTweets] = useState([]);

    

    return (
        <div>
            <CreateTweet 
            textInput={textInput} 
            setTextInput={setTextInput} 
            tweets={tweets} 
            setTweets={setTweets}/>
            <TweetList name={name} tweets={tweets} setName={setName}/>
        </div>
    );
}

export default App;