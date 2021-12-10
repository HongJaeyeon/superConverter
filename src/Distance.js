import { useState } from "react";
const Distance = () => {
  const [ds, setDs] = useState(0);
  const [DSflipped,setDSflipped] = useState(true);

  const reset = () => {
    setDs(0);
  }

  const onChange = (e) => {
    setDs(e.target.value);
  }

  const onClick = (e) => {
    setDSflipped((current) => !current);
    reset();
  }

  return(
    <div>
      <form>
        <h3>Distance Converter</h3>
        <h6>Now my input {ds}</h6>
        <label htmlFor="km">km </label>
        <input id="km" onChange={onChange} value={DSflipped ? ds : ds*1.609} disabled={!DSflipped}></input>
        <br/>
        <br/>
        <label htmlFor="mile">mile </label>
        <input id="mile" onChange={onChange} value={DSflipped ? ds/1.609 : ds} disabled={DSflipped}></input>
        <br/>
        <br/>
      </form>
      <button>reset</button>
      <button onClick={onClick}>flip</button>
    </div>
  );
}

export default Distance;