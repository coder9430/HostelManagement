import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileForm from '../Components/ProfileForm'

function ProfilePage() {
  return (
   <>
   <Navbar></Navbar>
   <div className='container'>
   <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%) ',  color:'white',borderRadius:'10px',fontFamily: 'Arial, sans-serif'  }}>PROFILE</h2>
   <ProfileForm></ProfileForm>
   </div>
    </>
   
  )
}

export default ProfilePage
