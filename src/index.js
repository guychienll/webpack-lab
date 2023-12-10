import * as React from "react";
import ReactDOM from "react-dom/client";
import ReactIcon from "./assets/react-logo.svg";

const root = document.createElement("div");
document.body.appendChild(root);

function App() {
    return (
        <div>
            <h1>SVGR Loader Playground</h1>
            <ReactIcon width={100} height={100} />
        </div>
    );
}

ReactDOM.createRoot(root).render(<App />);
