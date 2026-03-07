import React from "react";
import { CheckCircle } from "lucide-react";

const Features = () => {
    return (
        <>
            <section className="bg-neutral-800 text-white rounded-4xl pb-5 scroll-mt-24" id="features">
                <div className="mt-50 gap-30 mx-auto max-w-7xl grid grid-cols-6 items-center pt-20 pb-10">
                    <div className="col-span-3 space-y-5">
                        <h1 className="text-5xl font-bold">Personalized Plans </h1>
                        <h1 className="text-4xl font-semibold text-green-600"> That Actually Work</h1>
                        <p className="pt-3">Stop guessing. Our algorithm analyses your unique body constitution to generate a comprehensive daily routine.</p>
                        <div className="flex gap-2">
                            <div>
                                <CheckCircle className="text-white w-5 h-auto pt-2" />
                            </div>
                            <div>
                                <h1 className="text-green-600 text-xl font-bold">Dietary Guidelines & Tailored Workout plans</h1>
                                <p>Foods to eat as well as exercise to do and avoid for your specific body type.</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <CheckCircle className="text-white w-5 h-auto pt-2" />
                            </div>
                            <div>
                                <h1 className="text-green-600 text-xl font-bold">Consistency Interaction</h1>
                                <p>Track your meals and habits with our daily progress dashboard.</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <CheckCircle className="text-white w-5 h-auto pt-2" />
                            </div>
                            <div>
                                <h1 className="text-green-600 text-xl font-bold">Smart Market Cart</h1>
                                <p>Don't juggle between things to buy, directly buy from smart cart. which is generated based on your meal plans.</p>
                            </div>
                        </div>
                        <button className="p-3 rounded-xl bg-green-600 font-bold">Start Tracking Today</button>
                    </div>
                    <div className="col-span-3">
                        <img src="/images/features.png" className="h-[400px] w-[500px] rounded-xl" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features