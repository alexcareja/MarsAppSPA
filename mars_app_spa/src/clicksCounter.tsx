import react, { useState, useEffect } from "react"

function ClicksCounter() {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const clickCountString = localStorage.getItem("clickCount");
        if (clickCountString != null) {
            setClickCount(parseInt(clickCountString));
        }
      }, []);

    function incrementCount () {
        localStorage.setItem("clickCount", (clickCount + 1).toString());
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