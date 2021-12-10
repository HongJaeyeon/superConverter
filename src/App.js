import { useState } from "react";
import Time from "./Time";
import Distance from "./Distance";


function App() {
  const [index, setIndex] = useState(0);
  const onChange = (e) => {
    setIndex(e.target.selectedIndex);
  }

  return(
    <div>
      <select onChange={onChange}>
        <option>Select Converter</option>
        <option>Time Converter</option>
        <option>Distance Converter</option>
      </select>
      {index === 1 ? <Time/> : null}
      {index === 2 ? <Distance/>: null}
    </div>
  );
}
export default App;