import React, { useContext, useState } from "react"
import Select from "react-select"
import { getRoversPhotos } from "./getImages";
import { getRoversNames } from "./getRovers"
import { getRoversCameras } from "./getRoversCameras";

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
}

const RoversSelect: React.FC = () => {
    const [roverName, setRoverName] = React.useState("Select a rover");
    const [cameraName, setCameraName] = React.useState("Select a camera");
    const [buttonValidity, setButtonValidity] = React.useState(0);
    const [imagesHTMLString, setImagesHTMLString] = React.useState("");

    const handleRoverChange = (selectedRoverName: {value: string; label:string;}| null) => {
        if (selectedRoverName) {
            setRoverName(selectedRoverName.value);
            setButtonValidity(0);
        }
    };
    
    const handleCameraChange = (selectedCameraName: {value: string; label:string;}| null) => {
        if (selectedCameraName) {
            setCameraName(selectedCameraName.value);
            setButtonValidity(1);
        }
    };

    const retrieveImages = () => {
        getRoversPhotos(roverName, cameraName).then((images) => {
            setImagesHTMLString(images);
        });
    }

    const roversNames: {value:string, label:string}[] = [];
    const camerasNames: {value:string, label:string}[] = [];
    getRoversNames().then((roversNamesList) => {
        for (const roverName of roversNamesList) {
            roversNames.push({value: roverName, label: roverName});
        }
    });
    getRoversCameras(roverName).then((roversCamerasList) => {
        for (const cameraName of roversCamerasList) {
            camerasNames.push({value: cameraName, label: cameraName});
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <p>Select a rover from the given list</p>
            <Select
                placeholder={roverName}
                onChange={handleRoverChange}
                options={roversNames} />
            <Select
                placeholder={cameraName}
                onChange={handleCameraChange}
                options={camerasNames} />
            <button disabled={!buttonValidity} onClick={retrieveImages}>Submit</button>
            <div dangerouslySetInnerHTML={{__html: imagesHTMLString}} />
        </form>
    );
}

export { RoversSelect }