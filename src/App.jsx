import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AllQuestions from './components/AllQuestions'
import NavBar from './components/NavBar'
import Question from './components/Question'
import MakeQuestion from './components/MakeQuestion'
import Login from './components/login/Login'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/login/Protected'


const App = () => {
  return (
      <Router>
        <AuthContextProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/make-question"  element={<Protected><MakeQuestion/></Protected>} />
            <Route path="/question/:id" element={<Protected><Question/></Protected>}/>
            <Route path="/all-questions" element={ <Protected> <AllQuestions/> </Protected> } />
          </Routes>
        </AuthContextProvider>
      </Router>
  )
}

export default App
