import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSUbmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user)

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          photos: ""
        })


      }
      console.log("user authentication is successfull")
      toast.success("User Registered successfully", {
        position: "top-center",
      })
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "top-center",
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSUbmit}>
        <h2>Sign Up</h2>
        
        <div>
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        
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
        
        <div className="d-grid">
          <button type="submit">
            Sign Up
          </button>
        </div>
        
        <p>
          Already registered? <a href="/login">Login</a>
        </p>
      </form>

    </div>
  );
  


}

export default Register