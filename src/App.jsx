import React from 'react'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<Quiz />}/>
      <Route path='/result' element={<Result />}/>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
