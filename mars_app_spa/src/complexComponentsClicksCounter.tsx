import React, { useContext } from "react"
import react, { useState, useEffect } from "react"

interface CounterContext {
    clickCount: number;
    incrementCount: () => void;
}

const ButtonContext = React.createContext<CounterContext>({
    clickCount: 0,
    incrementCount: () => {}
});

const Component4: React.FC = () => {
    const context = useContext(ButtonContext);
    return (
        <div>
            <p>{context.clickCount}</p>
        </div>
    )
}

const Component3: React.FC = () => {
    return (
        <div>
            <p>Hello from component 3</p>
            <Component4/>
        </div>
    );
}

const Component2: React.FC = ()  => {
    const context = useContext(ButtonContext);
    return (
        <div>
            <button onClick={context.incrementCount}>Click me!</button>
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
            <ButtonContext.Provider value={{ clickCount, incrementCount}}>
                <Component2/>
                <Component3/>
            </ButtonContext.Provider>
        </div>
    );
}

export { Component1 }