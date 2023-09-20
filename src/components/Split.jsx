import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Userloginpage from './Userloginpage';
import Signuppage from './Signuppage';

const Split = () => {
  return (
   <>
 <Routes>
        <Route path="" element={< Userloginpage/>}></Route>
        <Route path="signup" element={< Signuppage/>}></Route>
        
        
      </Routes>
   </>
  )
}

export default Split