import React,{useState} from 'react';
import './App.css';
var emoji = require('node-emoji');

const emojiDict = {
  "🐰" : "rabbit",
  "👅" : "tongue",
  "💍" : "ring",
  "💧" : "droplet",
  "🍕": "pizza",
  "🎸": "guitar",
  "💪" : "muscle",
  "💻" : "computer",
  "💼" : "briefcase",
  "📔" : "notebook_with_decorative_cover",
  "📕" : "closed_book",
  "😍" : "heart_eyes",
}

var knownemoji = Object.keys(emojiDict);

function App() {
  
  const [emojii, setemoji] = useState('');
  const handleEvent = (event) => {
    const userInput = event.target.value;
    const mean = emoji.which(userInput);
    if(mean===undefined){
      setemoji("Sorry! We don't know the meaning of this emoji!");
    }
    else{
    setemoji(mean);
    }
    console.log(mean);
  }

  const handleClick = (emo) => {
    setemoji(emojiDict[emo]);
  }



  return (
    <div className='App'> 
    <h1>Know the Meaning of Emoji</h1>
    <input placeholder='Enter or paste your emoji here' onChange={handleEvent}></input>
    <h2>{emojii}</h2>
    <h3>Some Common Emojis...</h3>
    {
    knownemoji.map(function(ele){
      return <span style={{"padding":"1rem", "fontSize":"2rem", "cursor":"pointer"}} onClick={()=>handleClick(ele)} key={ele}>{ele}</span>
    })}

    </div>
  );
}

export default App;
