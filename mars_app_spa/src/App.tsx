import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IntroTemplate } from "./introTemplate";
import { ClicksCounter } from "./clicksCounter";

const nasaString = "NASA"
const par1 = "The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research."
const par2 = "NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science. Since its establishment, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion spacecraft, the Space Launch System, and Commercial Crew vehicles. The agency is also responsible for the Launch Services Program, which provides oversight of launch operations and countdown management for uncrewed NASA launches."
const nasaLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IntroTemplate title = {nasaString} paragraph1 = {par1} paragraph2 = {par2} imageUrl = {nasaLogoUrl}/>
        <ClicksCounter/>
      </header>
    </div>
  );
}

export default App;
