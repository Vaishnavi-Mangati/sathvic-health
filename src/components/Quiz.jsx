import React, { useState } from 'react'
import { questions } from '../data/questions';
import { useNavigate } from 'react-router-dom';

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
        navigate('/result',{state: {vataScore, pittaScore, kaphaScore}})
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
  <div>
    <h1>{questions[currentQuestion].question}</h1>
    <button onClick={vataButton}>{questions[currentQuestion].options[0].text}</button><br />
    <button onClick={pittaButton}>{questions[currentQuestion].options[1].text}</button><br />
    <button onClick={kaphaButton}>{questions[currentQuestion].options[2].text}</button><br />
    <button onClick={showNextQuestion}>Next</button>
    <p>Vata: {vataScore}</p>
    <p>Pitta: {pittaScore}</p>
    <p>Kapha: {kaphaScore}</p>
  </div>
)
}

export default Quiz
