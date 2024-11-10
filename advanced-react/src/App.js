import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10){
      alert("Please provide a comment explaining why the experience was poor.")
    }

    console.log("Form submitted!");
    setComment("");
    setScore("10");
  } 

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback form</h2>
        <div className="Field">
          <label>Score: {score}</label>
          <input type="range" min="0" max="10" />
        </div>
        <div className="Field">
          <label>Comment</label>
          <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
        </div>
        <button  type="submit">Submit</button>
      </fieldset>
      </form>
    </div>
  );
}

export default App;
