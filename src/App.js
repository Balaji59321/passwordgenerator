import { useState } from "react";
import "./App.css";
import { Password } from "./utils";

function App() {
  const [val, setVal] = useState({
    capital: 5,
    small: 5,
    special: 3,
    number: 3,
  });
  const [call, setCall] = useState(false);
  const changeHandler = (e) => {
    setVal((prev) => {
      let newState = { ...prev };
      newState[e.target.name] = e.target.value;
      return { ...newState };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCall(true);
    console.log("I am called");
  };
  return (
    <div className="App">
      <h2>Password Generator</h2>
      <p>
        If all valus are not passed greater than 0 then password will be
        generated based on default config (16 digits)
      </p>
      <form className="form" onSubmit={submitHandler}>
        <div className="field">
          <label>Enter Number of Captial Letters</label>
          <input type={"text"} onChange={changeHandler} name="capital" />
        </div>
        <div className="field">
          <label>Enter Number of Small Letters</label>
          <input type={"text"} onChange={changeHandler} name="small" />
        </div>
        <div className="field">
          <label>Enter Number of Number</label>
          <input type={"text"} onChange={changeHandler} name="number" />
        </div>
        <div className="field">
          <label>Enter Number of Special Characters</label>
          <input type={"text"} onChange={changeHandler} name="special" />
        </div>

        <button type="submit">Generate Password</button>
      </form>
      {call && (
        <div className="ans">
          <h4 className="ans__title">Generated Password</h4>
          <p>
            <Password value={val} />
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
