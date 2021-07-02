import React, { useContext, useState } from "react"
import Select from "react-select"
import { getRoversNames } from "./getRovers"

var roversNames: {value:string, label:string}[] = [];
getRoversNames().then((roversNamesList) => {
    for (const roverName of roversNamesList) {
        roversNames.push({value: roverName, label: roverName});
    }
});
// const camerasNames = {
//     "Curiosity": ["FHAZ", "NAVCAM", "MAST", "CHEMCAM", "MAHLI", "MARDI", "RHAZ"],
//     "Spirit": ["FHAZ", "NAVCAM", "PANCAM", "MINITES", "ENTRY", "RHAZ"],
//     "Opportunity": ["FHAZ", "NAVCAM"],
//     "Perseverance": ["EDL_RUCAM", "EDL_DDCAM"]
// }

const camerasNames = new Map();
camerasNames.set("Curiosity", [{ value: 'NAVCAM', label: 'NAVCAM' }, { value: 'FHAZ', label: 'FHAZ' }]);
camerasNames.set("Spirit", [{ value: 'FHAZ', label: 'FHAZ' }, { value: 'NAVCAM', label: 'NAVCAM' }]);
camerasNames.set("Opportunity", [{ value: 'NAVCAM', label: 'NAVCAM' }, { value: 'RHAZ', label: 'RHAZ' }]);
camerasNames.set("Perseverance", [{ value: 'EDL_RUCAM', label: 'EDL_RUCAM' }, { value: 'EDL_DDCAM', label: 'EDL_DDCAM' }]);
// {
//     "Curiosity": [{ value: 'NAVCAM', label: 'NAVCAM' }, { value: 'FHAZ', label: 'FHAZ' }],
//     "Spirit": [{ value: 'FHAZ', label: 'FHAZ' }, { value: 'NAVCAM', label: 'NAVCAM' }],
//     "Opportunity": [{ value: 'NAVCAM', label: 'NAVCAM' }, { value: 'RHAZ', label: 'RHAZ' }],
//     "Perseverance": [{ value: 'EDL_RUCAM', label: 'EDL_RUCAM' }, { value: 'EDL_DDCAM', label: 'EDL_DDCAM' }]
// }

const RoversSelect: React.FC = () => {
    const [roverName, setRoverName] = React.useState("Select a rover");
    const [cameraName, setCameraName] = React.useState("Select a camera");

    const handleRoverChange = (selectedRoverName: {value: string; label:string;}| null) => {
        if (selectedRoverName) {
            setRoverName(selectedRoverName.value);
            setCameraName("Select a camera");
        }
    };
    
    const handleCameraChange = (selectedCameraName: {value: string; label:string;}| null) => {
        if (selectedCameraName) {
            setCameraName(selectedCameraName.value);
        }
    };

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
                options={camerasNames.get(roverName)} />
        </form>
    );
}

export { RoversSelect }