import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("user logged in successfully")
            window.location.href = '/profile'
            toast.success("User logged in successfully", {
                position: "top-center",
            })
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center"
            })
            
        }
    }
  return (
    <div>
        <form className='loginForm' onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div>
            <label>Email Address</label>
            <input
                type="email"
                className="form-control"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            
            <div>
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <div className='btnContainer'>
                <button type="submit">
                    Login
                </button>
            </div>
            
            <p>
               don't have an account <a href="/signup">SignUp</a>
            </p>
      
        </form>
      
    </div>
  )
}

export default Login
