import React from 'react'
import '../style/makeQuestion.css'
import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from "../db/firebase"
import { Link } from 'react-router-dom';
import dayjs from "dayjs";


const MakeQuestion = () => {
    const [questions, setQuestions,] = React.useState([])
    const [title ,setTitle] = React.useState('')
    const [body ,setBody] = React.useState('')

    // Agregar question
   const addQuestion = async (e) => {
    e.preventDefault()
    if(!title.trim()){
      console.log("Esta vacio")
      return
    }
     try {
       const newQuestion = {
         title: title,
         body: body,
         date: dayjs().format('DD/MM/YYYY')
       }
       const data = await addDoc(collection(db,"questions"), newQuestion)
       setQuestions ([
        ...questions, {...newQuestion, id: data.id}
      ])
       setTitle("")
       setBody("")

     } catch (error) {
         console.log(error)
     }
  }

  return (
        <div className="createQuestion">
            <h3> Write your question</h3>
            <form onSubmit={addQuestion} className="forms" >
                <input type="text" placeholder="Write your questions title" onChange={(e) => setTitle(e.target.value)} value={title} className="form-title"/>
                <input type="text" placeholder="Write the body" onChange={(e) => setBody(e.target.value)} value={body} className="form-body"/>
                <div className="createQuestion__buttons">
                    <button type="submit"> Send</button>
                    <Link to="/all-questions" className="btn-secondary"> Look questions</Link>
                </div>
            </form>
        </div>
  )
}

export default MakeQuestion