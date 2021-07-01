import React from "react"


const IntroTemplate: React.FC<{title: string, paragraph1: string, paragraph2: string, imageUrl: string}> = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <p>
            {props.paragraph1}
        </p>
        <p>
            {props.paragraph2}
        </p>
        <img src={props.imageUrl} alt="logo" />
        </div>
    );
}

export { IntroTemplate }