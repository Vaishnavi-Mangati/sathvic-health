import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Quiz from './Quiz'

const Home = () => {
    const navigate = useNavigate();
    
    const takeQuiz = () => {
        navigate("/quiz")
    }

    return (
        <>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-auto'>
            <h1>Discover your body type and bulid a healthier you</h1>
                <img src='/images/HeroImage.png' className='h-120 rounded-[500px]' />
            <h1>"Before you change your body"</h1>
            <button className='border-2 p-3 rounded-2xl m-2' onClick={takeQuiz}>Know your Body</button>
            <p>It takes less than 3 minutes</p>
        </div>
        </>
    )
}

export default Home
