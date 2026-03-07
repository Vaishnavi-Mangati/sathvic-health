import React from "react";
import {Mail, Linkedin} from "lucide-react";
import { useNavigate  } from "react-router-dom";
import Quiz from "./Quiz";

const Contact = () =>{
    const navigate = useNavigate()

    const takeQuiz = () => {
        navigate("/quiz")
    }
    return (
        <>
        <section id="contact" className="scroll-mt-24">
        <div className="mt-30 h-auto grid grid-cols-6 gap-20 ml-20 border p-30 rounded-2xl border-green-600 text-center mr-20">
        <div className="text-left h-[300px] col-span-3">
            <div className="max-w-[900px] mx-auto">
            <h1 className="text-4xl text-green-600 pt-12 font-bold">Ready to Transform Your Health?</h1>
            <p className="pt-3 text-neutral-800">Join thousands of others discovering the power of Ayurvedic living. Your personalized plan is just a few clicks away.</p>
            </div>
            <div className="flex gap-10 mt-10">
                <button className="border px-9 py-3 rounded-xl border-green-600 border-2 shadow-lg" onClick={takeQuiz}>Taken the Quiz Yet?</button>
                <button className="border px-9 py-3 rounded-xl border-green-600 border-2 shadow-lg">Create Free Account</button>
            </div>
        </div>

        <div className="flex text-left flex-col max-w-[500px] col-span-3 space-y-2 border p-5 rounded-2xl border-green-600 border-2 shadow-lg">
            <h1 className="font-bold text-green-600 text-center text-xl">Contact Us</h1>
            <label for="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" className="border rounded-xl p-2 "/>
            <label for="email">Email</label>
            <input type="email" placeholder="xyz@gmail.com" id="email" className="border rounded-xl p-2" />
            <label for="message">Message</label>
            <textarea placeholder="Enter your message......." id="message" className="border rounded-xl p-2" ></textarea>
            <button className="bg-green-600 text-white font-bold border p-2 mt-3 px-3 mx-10 rounded-4xl">Submit</button>
        </div>
        </div>
        <div className=" mt-10 flex justify-between pt-10 bg-black text-white">
            <div className=" ml-20 max-w-[300px] col-span-4">
                <h1>Sathvic Health</h1>
                <p>Balancing ancient Ayurveda with modern science for your holistic well-being.</p>
            </div>
            <div className="">
                <p>&copy; 2026 Sathvic Health. All rights reserved by</p>
                <p className="text-center">Sathvic Health Team</p>
            </div>
            <div className="mr-20">
                <h1>Contact Us</h1>
                <div className="flex justify-between gap-5">
                <a href="vaishnavimangati@gmail.com">
                    <Mail className="h-[40px] w-[20px]"/>    
                </a>
                <a href="https://www.linkedin.com/in/vaishnavimangati/">
                    <Linkedin className="h-[40px] w-[20px]"/>
                </a>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Contact