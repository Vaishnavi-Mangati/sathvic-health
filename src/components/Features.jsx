import React from "react";

const Features = () =>{
    return(
        <>
        <section className="bg-green-200 pb-5">
        <div className="mt-50 gap-30 mx-auto max-w-7xl grid grid-cols-5 items-center pt-20 pb-10">
        <div className="col-span-2 space-y-5">
            <h1 className="text-5xl">Personalized Plans </h1>
            <h1 className="text-5xl"> That Actually Work</h1>
            <p className="pt-3">Stop guessing. Our algorithm analyses your unique body constitution to generate a comprehensive daily routine.</p>
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
            <button className="border p-3 rounded-xl">Start Tracking Today</button>
        </div>
        <div className="col-span-3">
            <img src="/images/HeroImage.png" className="h-[300px]"/>
        </div>
        </div>
        </section>
        </>
    )
}

export default Features