import React from "react";

const About = () =>{
    return(
        <>
        <section className="text-center mt-30">
            <div className="text-center max-w-[900px] mx-auto">
            <h1 className="text-4xl mb-9 font-bold">Why <span className="text-[#065F46] font-bold text-4xl">Sathvic Health?</span></h1>
            <p className="mb-15">In a world of generic diet plans and one-size-fits-all workouts, we return to the roots. Ayurveda teaches us that every individual is unique. Your path to health shouldn't be the same as everyone else's.</p>
            </div>
            <div className="flex p-10 pl-20 pr-20 gap-20"> 
                <div className="border h-[200px] rounded-2xl p-3">
                    <img src=""/>
                    <h1 className="text-xl font-bold pb-3">Ancient Wisdom</h1>
                    <p className="text-[#4B5563] pb-3">Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                </div>
                <div className="border h-[200px] rounded-2xl p-3">
                    <img src=""/>
                    <h1 className="text-xl font-bold pb-3">Ancient Wisdom</h1>
                    <p className="text-[#4B5563] pb-3">Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                </div>
                <div className="border h-[200px] rounded-2xl p-3">
                    <img src=""/>
                    <h1 className="text-xl font-bold pb-3">Ancient Wisdom</h1>
                    <p className="text-[#4B5563] pb-3">Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                </div>
            </div>
        </section>
        <section className="text-center mt-30">
            <div>
                <h1 className="text-xs">THE THREE ENERGIES</h1>
                <div className="max-w-[500px] mx-auto pb-10">
                <h1 className="text-4xl pt-10 pb-5">Understand your Dosha</h1>
                <p>According to Ayurveda, everyone is born with a unique mix of three biological energies: Vata, Pitta, and Kapha.</p>
                </div>
                <div className="flex ml-20 mr-20 gap-20">
                <div  className="border h-[200px] p-5 rounded-2xl">
                    <img src=""/>
                    <h1>Ancient Wisdom</h1>
                    <p>Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                </div>
                <div className="border h-[200px] p-5 rounded-2xl">
                    <img src=""/>
                    <h1>Ancient Wisdom</h1>
                    <p>Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                </div>
                <div className="border h-[200px] p-5 rounded-2xl">
                    <img src=""/>
                    <h1>Ancient Wisdom</h1>
                    <p>Based on 5,000-year-old Ayurvedic principles of balancing the three Doshas.</p>
                </div>
            </div>
            </div>
        </section>
        </>
    )

}

export default About