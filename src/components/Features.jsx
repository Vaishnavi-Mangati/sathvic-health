import React from "react";

const Features = () =>{
    return(
        <>
        <div className="flex">
        <div className="w-[50vh]">
            <h1>Personalized Plans That Actually Work</h1>
            <p>Stop guessing. Our algorithm analyses your unique body constitution to generate a comprehensive daily routine.</p>
            <div>
                <img src=""/>
                <h1>Dietary Guidelines</h1>
                <p>Foods to eat and avoid for your specific body type.</p>
            </div>
            <div>
                <img src=""/>
                <h1>Dietary Guidelines</h1>
                <p>Foods to eat and avoid for your specific body type.</p>
            </div>
            <div>
                <img src=""/>
                <h1>Dietary Guidelines</h1>
                <p>Foods to eat and avoid for your specific body type.</p>
            </div>
            <button>Start Tracking Today</button>
        </div>
        <div className="w-[50vh]">
            <img src="/images/HeroImage.png"/>
        </div>
        </div>
        </>
    )
}

export default Features