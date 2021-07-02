import axios, { AxiosResponse } from "axios";

const apiKey = "IqA8fYkIhjXf62lkAuWM3WqexG4waX0mbovOUeII"

export function getRoversCameras(roverName: string): Promise<string[]> {
    return axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=" + apiKey)
        .then((axiosResponse: AxiosResponse) => {
            const roverCameras: string[] =[]
            for (const rover of axiosResponse.data.rovers) {
                if (roverName.localeCompare(rover.name) == 0) {
                    for (const camera of rover.cameras) {
                        roverCameras.push(camera.name);
                    }
                }
            }
            return roverCameras;
        })
        .catch(function (error: string) {
            console.log(error);
            throw error;
        })
}
