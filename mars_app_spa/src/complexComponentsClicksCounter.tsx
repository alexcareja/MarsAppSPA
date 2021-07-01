import react, { useState, useEffect } from "react"

const Component4: React.FC<{c4count: number}> = (props) => {

    return (
        <div>
            <p>{props.c4count}</p>
        </div>
    )
}


const Component3: React.FC<{c3count: number}> = (props)=> {
    return (
        <div>
            <p>Hello from component 3</p>
            <Component4 c4count = {props.c3count}/>
        </div>
    )
}

const Component2: React.FC<{incrementFunc: () => void}> = (props) => {
    return (
        <div>
            <button onClick={props.incrementFunc}>Click me!</button>
        </div>
    );
}

const Component1: React.FC = () => {
    const [clickCount, setClickCount] = useState(1);

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
            <Component2 incrementFunc = {incrementCount}/>
            <Component3 c3count = {clickCount}/>
        </div>
    )
}

export { Component1 }