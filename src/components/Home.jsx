import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About'
import Quiz from './Quiz'
import Features from './Features'
import Contact from './Contact'
import Navbar from './Navbar'

const Home = () => {
    const navigate = useNavigate();
    
    const takeQuiz = () => {
        navigate("/quiz")
    }

    // direct navigation to result page
    const goToResultPage = () =>{
        navigate("/result", {
            state:{vataScore: 8, pittaScore: 2, kaphaScore: 5}
        });
    };
    // remove this function after completing the development

    return (
        <>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-auto bg-gradient-to-b from-[#F0FDF4] via-[#ECFDF5] to-white pt-20'>
            <h1 className='p-2 rounded-3xl m-5 bg-[#DCFCE7] text-[#065F46] font-bold px-5'>DISCOVER YOUR TRUE NATURE</h1>
            <h1 className='text-5xl p-5 font-extrabold'>Balance Body and Mind with <span className='text-[#8B5E3C]'>Ayurveda</span></h1>
            <p className='text-m pb-10 text-[#4B5563]' >Unlock a personalized health journey tailored to your unique Dosha. Combine ancient wisdom with modern science to live your healthiest life.</p>
            <img src='/images/HeroImage.png' className='h-120 rounded-[500px]' />
            <button className='text-white font-bold p-3 rounded-xl m-2 px-10 mt-10 bg-[#4D5D3D] ' onClick={takeQuiz}>Know your Body</button>
            <p className='text-[#4B5563]'>"This takes less than 3 minutes"</p>
        </div>

        <About/>
        <Features/>
        <Contact/>
        </>
    )
}

export default Home
