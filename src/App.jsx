import React from 'react'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Quiz />}/>
      <Route path='/result' element={<Result />}/>
    </Routes>
  )
}

export default App
