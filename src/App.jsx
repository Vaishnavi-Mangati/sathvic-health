import React from 'react'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/quiz' element={<Quiz />}/>
      <Route path='/result' element={<Result />}/>
      <Route path='/home' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
