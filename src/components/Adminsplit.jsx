import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Adminloginpage from './Adminloginpage';
import Admindash from './Admindash';


const Adminsplit = () => {
  return (
    <>
     <Routes>
        <Route path="" element={< Adminloginpage/>}></Route>
        <Route path="admindashboard" element={< Admindash/>}></Route>
      </Routes>
    </>
  )
}

export default Adminsplit