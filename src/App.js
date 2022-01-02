import React,{useState} from 'react';
import './App.css';
var emoji = require('node-emoji');

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



  return (
    <div className='App'> 
    <h1>Know the Meaning of Emoji</h1>
    <input placeholder='Enter or paste your emoji here' onChange={handleEvent}></input>
    <h3>{emojii}</h3>

    </div>
  );
}

export default App;
