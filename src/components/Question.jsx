import React from 'react'
import '../style/question.css'
import {Link,useParams} from 'react-router-dom'
import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from "../db/firebase"
import dayjs from "dayjs";

function Question() {

  const [questions, setQuestions,] = React.useState([])
  const { id } = useParams();
  const [respond, setRespond] = React.useState(false)
  const [answers, setAnswers] = React.useState([])

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
    const getAnswer = async ()=> {
      try{
        const data = await getDocs(collection(db, "answers"));
        const arrayDat = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setAnswers(arrayDat)
      } catch(e){
        console.log(e)
      }
    }
    getAnswer()
    getInfo()
  }, [])

  const [responses, setResponses] = React.useState([])
  const [response, setResponse] = React.useState('')
  // Agregar response
 const addResponse = async (e) => {
  e.preventDefault()
  if(!response.trim()){
    console.log("Esta vacio")
    return
  }
   try {
     const newResponse = {
       answer: response,
       date: dayjs().format('HH:mm:ss'),
       id: id
     }
     const data = await addDoc(collection(db,"answers"), newResponse)
     setAnswers ([
      ...answers, {...newResponse, id: id}
    ])
    setResponse("")
   } catch (error) {
       console.log(error)
   }
}


  return (
    <div className="question">
      <div className="questions__container">
        {
          questions.filter(item => item.id === id).map(question => (
            <div className="question__details" key={question.id}>
            <h3> {question.title}</h3>
            <p> {question.body}</p>
            <div className="question__buttons">
              {
                respond ? null 
                : <>
                 <button className="btn" onClick={() =>setRespond(true)}>Respond</button>
                </>
              }
             
              
            </div>
        </div>
          ))
        }
        <div className="questions__answers">
          <h3> Answer</h3>
          <hr />
          {
            answers.filter(item => item.id === id).map((answer) => (
              <>
                <p key={answer.id} className="questions__answers-text"> ● {answer.answer}</p>
                <p className="created__at">Answered at: {answer.date} </p>
              </>
            ))
          }

        </div>
             {
               respond ?
             <div className="questions__respond">
                <form onSubmit={addResponse}>
                  <input type="text" placeholder="Write your answer ftom the question..." value={response} onChange={e => setResponse(e.target.value)} className="response__input" />
                  <button> Submit answer</button>
                </form> 
              </div>
                : null
            }
      </div>

    </div>
  )
}

export default Question