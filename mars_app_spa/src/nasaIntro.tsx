import React from "react"

const nasaLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png"

const NasaInformations: React.FC = () => {
    return (
        <div>
        <h1>NASA</h1>
        <p>
            The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible 
            for the civilian space program, as well as aeronautics and space research.
        </p>
        <p>
            NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a 
            distinctly civilian orientation, encouraging peaceful applications in space science. Since its establishment, most US space 
            exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the 
            Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion spacecraft, 
            the Space Launch System, and Commercial Crew vehicles. The agency is also responsible for the Launch Services Program, which 
            provides oversight of launch operations and countdown management for uncrewed NASA launches.
        </p>
        <img src={nasaLogoUrl} alt="logo" />
        </div>
    );
}

export { NasaInformations }