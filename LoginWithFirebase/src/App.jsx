import { useEffect, useState } from 'react';
import {auth} from './components/firebase'
import Register from './components/Register'
import {
  Routes,
  Route,    
  Navigate
} from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SignInWithGoogle from './components/SignInWithGoogle';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user)
    })
  }, [])
  return (
    <div>

      <Routes>
        <Route path='/login'
         element={ user? <Navigate to="/profile"/> : <Login />} />
        <Route path='/signup'
           element={ user? <Navigate to="/profile"/> : <Register />} 
        />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <ToastContainer />

    </div>
    
  )
}

export default App
