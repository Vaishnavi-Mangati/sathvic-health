import React from "react";

const Contact = () =>{
    return (
        <>
        <section className="text-center mt-50 h-[300px]">
        <div className="text-center  h-[300px] bg-green-300 rounded-2xl pt-20 flex flex-col items-center">
            <div className="max-w-[900px] mx-auto">
            <h1 className="text-4xl">Ready to Transform Your Health?</h1>
            <p className="pt-3">Join thousands of others discovering the power of Ayurvedic living. Your personalized plan is just a few clicks away.</p>
            </div>
            <div className="flex gap-10 mt-10">
                <button className="border px-9 py-3 rounded-xl">Taken the Quiz Yet?</button>
                <button className="border px-9 py-3 rounded-xl">Create Free Account</button>
            </div>
        </div>
        <div className=" mt-10 grid grid-cols-3 pt-10 bg-black text-white">
            <div className="text-left ml-20 max-w-[300px]">
                <h1>Sathvic Health</h1>
                <p>Balancing ancient Ayurveda with modern science for your holistic well-being.</p>
            </div>
            <div>
                <p>2026 Sathvic Health. All rights reserved by</p>
                <div>
                <img src=""/>
                <img src=""/>
                <img src=""/>
                <img src=""/>
                <img src=""/>
                </div>
            </div>
            <div className="text-right mr-20">
                <h1>Contact Us</h1>
                <div>
                <img src=""/>
                <img src=""/>
                <img src=""/>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Contact