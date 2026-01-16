import React from 'react'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Quiz />}/>
      <Route path='/result' element={<Result />}/>
      <Route path='/navbar' element={<Navbar />} />
    </Routes>
  )
}

export default App
