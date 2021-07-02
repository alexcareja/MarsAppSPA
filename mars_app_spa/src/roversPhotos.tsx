import React, { useContext, useState } from "react"
import Select from "react-select"
import { getRoversNames } from "./getRovers"
import { getRoversCameras } from "./getRoversCameras";

const RoversSelect: React.FC = () => {
    const [roverName, setRoverName] = React.useState("Select a rover");
    const [cameraName, setCameraName] = React.useState("Select a camera");

    const handleRoverChange = (selectedRoverName: {value: string; label:string;}| null) => {
        if (selectedRoverName) {
            setRoverName(selectedRoverName.value);
        }
    };
    
    const handleCameraChange = (selectedCameraName: {value: string; label:string;}| null) => {
        if (selectedCameraName) {
            setCameraName(selectedCameraName.value);
        }
    };

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
        <form>
            <p>Select a rover from the given list</p>
            <Select
                placeholder={roverName}
                onChange={handleRoverChange}
                options={roversNames} />
            <Select
                placeholder={cameraName}
                onChange={handleCameraChange}
                options={camerasNames} />
        </form>
    );
}

export { RoversSelect }