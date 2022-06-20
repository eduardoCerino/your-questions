import React from 'react'
import {Link} from 'react-router-dom'
import question from '../assets/question.jpg'
import '../style/home.css'

const Home = () => {
  return (
    <div className="home">
        <div className="home__container">
            <div className="home__left">
                <div className="home__info">
                    <h1> ASK QUESTIONS <br /> GET ANSWERS</h1>
                    <p> This is a place to gain and get knowledge. It is a platform to ask questions and connect with people  who contribute unique insights and quality answers.</p>
                </div>
                <div className="home__button">
                    <Link to ="/login"> <button className="btn-primary">Get Started</button></Link>
                </div>
            </div>
            <div className="home__right">
                <div className="home__image">
                    <img src={question} alt="Icon questions" className="home__image"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home