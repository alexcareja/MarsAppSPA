import axios, { AxiosResponse } from "axios";

const apiKey = "IqA8fYkIhjXf62lkAuWM3WqexG4waX0mbovOUeII"

export function getRoversPhotos(roverName: string, cameraName: string): Promise<string> {
    return axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName
        + "/photos?sol=121&camera=" + cameraName + "&api_key=" + apiKey)
        .then(function (axiosResponse: AxiosResponse) {
            let photos: string ="";
            let i = 0;
            for (const entry of axiosResponse.data.photos) {
                photos = photos.concat("<div><img src=\"" + entry.img_src + "\" width=\"200\" height=\"200\"></div>");
                i += 1;
                if (i == 5) {
                    break;
                }
            }
            return photos;
        })
        .catch(function (error: string) {
            console.log(error);
            throw error;
        });
}