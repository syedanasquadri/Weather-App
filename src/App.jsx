import { useState } from "react"

const App = () => {
    const [inputVal, setinputVal] = useState("");
    const [cityName, setcityName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setcityName(inputVal);
        setinputVal("");
    }
    return <div>
    <form onSubmit={handleSubmit}>
    <input
     type="text"
     onChange={(e) => setinputVal(e.target.value)}
     value={inputVal}
      />
      <button type="Submit">submit</button>
      </form>
      <ul>
        {cityName}
        </ul>
    </div>
}

export default App
