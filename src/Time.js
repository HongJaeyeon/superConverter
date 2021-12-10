import { useState } from "react";

const Time = () => {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(true);
  const onChange = (e) => {
    // console.dir(e);
    setAmount(e.target.value);
  }
  const reset = () => {
    setAmount(0);
  }
  const flip = () => {
    //true -> hours disabled
    reset();
    setFlipped((current) => !current);
  }

  return(
    <div>
    <h3>Time Converter</h3>
    <h6>Now my input {amount}</h6>
    <label htmlFor="minutes">minutes</label>
    <input id="minutes" value={flipped ? amount : Math.round(amount * 60)} onChange={onChange} disabled={!flipped}></input>
    <br/>
    <br/>
    <label htmlFor="hours">hours</label>
    <input id="hours" value={flipped ? Math.round(amount / 60) : amount} onChange={onChange} disabled={flipped}></input>
    <br/>
    <br/>
    <button onClick={reset}>reset</button>
    <button onClick={flip}>flip</button>
  </div>
  );
}

export default Time;