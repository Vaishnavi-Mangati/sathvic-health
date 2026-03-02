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
        <div className='flex flex-col justify-center items-center h-auto bg-green-300 pt-20'>
            <h1 className='border p-2 rounded-3xl m-5'>DISCOVER YOUR TRUE NATURE</h1>
            <h1 className='text-6xl p-5'>Balance Body and Mind with <span>Ayurveda</span></h1>
            <p className='text-m pb-10'>Unlock a personalized health journey tailored to your unique Dosha. Combine ancient wisdom with modern science to live your healthiest life.</p>
            <img src='/images/HeroImage.png' className='h-120 rounded-[500px]' />
            <button className='border-2 p-3 rounded-xl m-2 px-10 mt-10  ' onClick={takeQuiz}>Know your Body</button>
            <p>"This takes less than 3 minutes"</p>
        </div>

        <About/>
        <Features/>
        <Contact/>
        </>
    )
}

export default Home
