import React from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from "../db/firebase"
import '../style/allquestions.css'
import {Link} from 'react-router-dom'
import dayjs from "dayjs";


function AllQuestions() {

  const [questions, setQuestions,] = React.useState([])
  const [term, setTerm] = React.useState("")

  console.log(  dayjs().format('HH:mm:ss')  )

  React.useEffect(()=> {
    const getInfo = async ()=> {
      try{
        const data = await getDocs(collection(db, "questions"));
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setQuestions(arrayData)
      } catch(e){
        console.log(e)
      }
    }
    getInfo()
  }, [])

  //searching
  function searchingTerm(term){
    return function(x){
      return x.title.toLowerCase().includes(term) || !term;
    }
  }

  return (
    <div className="app">
      <div className="questions__header">
         <h1 className="title"> Questions</h1>
         <input type="text" placeholder="Search by title" name="term" onChange={e => setTerm(e.target.value)} className="search"/>
         <Link to="/make-question" className="makeQuestion__button"> Make a question</Link>
      </div>
     <div className="questions">
      {
        questions.filter(searchingTerm(term)).map(question =>(
          <div className="question__container"  key={question.id}>
            <div className="question__info">
              <h2 className="question__title">{question.title}</h2>
              <p className="question__body">{question.body}</p>
              <small className="created__at"> Created at: {question.date}</small>
            </div>
            <div className="question__botton">
              <Link to={"/question/"+ question.id} className="question__button"> Answer question</Link>
            </div>
          </div>
        ))
      }
            
     </div>

    

    </div>
  )
}

export default AllQuestions