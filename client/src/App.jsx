import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="max-w-7xl mx-auto bg-blue-50 h-[1200px]">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default App;
