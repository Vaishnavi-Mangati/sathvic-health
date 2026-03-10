import React, { useState } from 'react'
import { questions } from '../data/questions';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './progessBar';

const Quiz = () => {
  const navigate = useNavigate()
  const [vataScore, setVataScore] = useState(0);
  const [pittaScore, setPittaScore] = useState(0);
  const [kaphaScore, setkaphaScoure] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const showNextQuestion = () => {
    if (selectedOption != null) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }
      else {
        // used to go to other page(route) programatically
        navigate('/result', { state: { vataScore, pittaScore, kaphaScore } })
      }
    }
    else {
      alert("Select an option")
    }
  }

  const vataButton = () => {
    if (selectedOption === "Vata") return;
    if (selectedOption === "Pitta") {
      setPittaScore(pittaScore => pittaScore - 1)
    }
    else if (selectedOption === "Kapha") {
      setkaphaScoure(kaphaScore => kaphaScore - 1)
    }

    setVataScore(vataScore => vataScore + 1)
    setSelectedOption("Vata");
  }

  const pittaButton = () => {
    if (selectedOption === "Pitta") return;
    if (selectedOption === "Vata") {
      setVataScore(vataScore => vataScore - 1)
    }
    else if (selectedOption === "Kapha") {
      setkaphaScoure(kaphaScore => kaphaScore - 1)
    }

    setPittaScore(pittaScore => pittaScore + 1)
    setSelectedOption("Pitta")
  }

  const kaphaButton = () => {
    if (selectedOption === "Kapha") return;
    if (selectedOption === "Pitta") {
      setPittaScore(pittaScore => pittaScore - 1)
    }
    else if (selectedOption === "Vata") {
      setVataScore(vataScore => vataScore - 1)
    }

    setkaphaScoure(kaphaScore => kaphaScore + 1)
    setSelectedOption("Kapha")
  }


  return (
    <>
    <div className=' h-auto bg-[#F3F4F6] text-center'>
      <ProgressBar questionNumber = {currentQuestion}/>
    
    <div className='flex justify-center items-center'>
      
      <div className='w-230 h-auto bg-white h-auto rounded-[60px] shadow-md p-10 mt-30 mb-30 pt-30s'>
        <h1 className='py-5 text-3xl font-bold max-w-[800px] pb-15'>{questions[currentQuestion].question}</h1>
        
        <div className='grid grid-cols-3'>
          <button onClick={vataButton} className='m-1 p-1 border border-gray-300 shadow-md text-neutral-700 font-bold text-xl h-70 rounded-xl text-center flex flex-col items-center justify-center'>
            <img src={questions[currentQuestion].options[0].img} className='h-40 mb-6' />
            {questions[currentQuestion].options[0].text}</button>
          <button onClick={pittaButton} className='m-1 p-1 border border-gray-300 shadow-md border-2 text-neutral-700 font-bold text-xl  h-70 rounded-xl text-center flex flex-col items-center justify-center'>
            <img src={questions[currentQuestion].options[1].img} className='h-40 mb-6' />
            {questions[currentQuestion].options[1].text}</button>
          <button onClick={kaphaButton} className='m-1 p-1 border border-gray-300 shadow-md font-bold text-neutral-700 text-xl border-2 h-70 rounded-xl text-center flex flex-col items-center justify-center'>
            <img src={questions[currentQuestion].options[2].img} className='h-40 mb-6' />
            {questions[currentQuestion].options[2].text}</button>
        </div>
        <p className='mt-10 text-center text-gray-400'>Your data is secure with Sathvic Health Protocols Standards.</p>
        <hr className='border border-gray-600 mb-10'/>
        <div className='flex items-end justify-end'>
          <button onClick={showNextQuestion} className='border-2 bg-green-600 p-4 m-3 text-center text-white font-bold text-2xl rounded-2xl px-25'>Next</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Quiz
