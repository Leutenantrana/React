import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth,db} from './firebase'
import { setDoc, doc } from 'firebase/firestore'
import goog from './images/google.webp'
const SignInWithGoogle = () => {
    function googleLogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async(result)=>{
            console.log(result)
        })
    }
  return (
    <div className='googleSignin'>
        <p>or continue with</p>
        <div style={{display:"flex", justifyContent:"center", cursor:"pointer"}} onClick={googleLogin}>
           <img src={goog} 
              style={{width:"50px"}}
           />
        </div>
      
    </div>
  )
}

export default SignInWithGoogle
