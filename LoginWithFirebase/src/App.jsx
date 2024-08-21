import Register from './components/Register'
import {
  Routes,
  Route,    
} from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />}  />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <ToastContainer />

    </div>
    
  )
}

export default App
