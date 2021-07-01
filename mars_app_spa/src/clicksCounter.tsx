import react, { useState } from "react"

function ClicksCounter() {
    const [clickCount, setClickCount] = useState(0);

    function incrementCount () {
        setClickCount(clickCount + 1);
    }

    return (
        <div>
            <p>{clickCount}</p>
            <button onClick={incrementCount}>Click me!</button>
        </div>
    );
}

export { ClicksCounter }