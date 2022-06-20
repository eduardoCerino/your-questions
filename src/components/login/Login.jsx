import React,{useEffect} from 'react'
import {GoogleButton} from 'react-google-button'
import {UserAuth} from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import '../../style/login.css'


const Login = () => {
    const {googleSignIn,user} = UserAuth();
    const navigate = useNavigate();


    const handleGoogleSignIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        if (user != null) {
            navigate('/all-questions')
        }
      }, [user]);
    
  return (
    <div className="login__page">
        <h1> Login here</h1>
        <div className="login__button">
         <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    </div>
  )
}

export default Login