import React from 'react'
import { useState, useEffect} from 'react'
import {auth, db} from './firebase'
import { doc, getDoc  } from 'firebase/firestore'
const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData =async()=>{
       auth.onAuthStateChanged(async(user)=>{
         console.log(user)
         const docRef = doc(db, "Users", user.uid)
         const docSnap = await getDoc(docRef);
         if(docSnap.exists()){
            setUserDetails(docSnap.data())
         }else {
            console.log("user is not logged out")
         }
       })
    }
    useEffect(()=>{
        fetchUserData()
    }, [])

    const handleLogout = async()=>{
        try {
            await auth.signOut();
            window.location.href="/login";
            console.log("User logged out successfully");
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <div className='profile'> 
      {userDetails ? (
        <>
          <div style={{display:'flex', justifyContent:"center"}}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{borderRadius:"50%"}}
            />
          </div>
          <h3>Welcome {userDetails.firstName}</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  )
}

export default Profile
