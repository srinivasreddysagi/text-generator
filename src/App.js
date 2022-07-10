import { useState } from 'react';
import Data from './Data';

function App() {
  const [no, setNo] = useState(0);

  function generate(e) {
    e.preventDefault();
    console.log(no);
  }

  function changeHandle(e) {
    setNo(e.target.value);
  }

    return (
        <div className="App">
            <form action="submit" className="form">
                <label htmlFor="parano">No of Paragraphs</label>
                <input type="number" min="0" max="21" value={no} name="parano" onChange={changeHandle}/>
                <button type="submit" className="btn" onClick={generate}>
                    Generate
                </button>
            </form>
            <div className="ps">{Data.slice(0, no).map((i) => <p>{i}</p> )}</div>
        </div>
    );
}

export default App;
