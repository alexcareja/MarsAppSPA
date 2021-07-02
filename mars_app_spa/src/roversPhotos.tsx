import React from "react"
import Select from "react-select"
import { getRoversNames } from "./getRovers"


const roversNames: {}[] = [];
getRoversNames().then((roversNamesList) => {
    for (const roverName of roversNamesList) {
        roversNames.push({value: roverName, label: roverName});
    }
});

const RoversSelect: React.FC = () => {
    return (
        <form>
            <p>Select a rover from the given list</p>
            <Select options={roversNames} />
        </form>
    );
}

export { RoversSelect }