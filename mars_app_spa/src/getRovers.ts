import axios, { AxiosResponse } from "axios";

const apiKey = "IqA8fYkIhjXf62lkAuWM3WqexG4waX0mbovOUeII"

export function getRoversNames(): Promise<string[]> {
    return axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=" + apiKey)
        .then((axiosResponse: AxiosResponse) => {
            const roverNamesList: string[] = [];
            for (const rover of axiosResponse.data.rovers) {
                roverNamesList.push(rover.name);
            }
            return roverNamesList;
        })
        .catch(function (error: string) {
            console.log(error);
            throw error;
        })
}
