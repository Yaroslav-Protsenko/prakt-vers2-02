import React from "react";
import {Counter} from "./Components/Counter";


function App() {
    return (
        <div className="App">
            <Counter />
            <Counter value={10} min={-10} max={10}/>
            <Counter value={5} min={-5}/>
            <Counter value={1} min={-1} max={1}/>
        </div>
    );
}

export default App;
