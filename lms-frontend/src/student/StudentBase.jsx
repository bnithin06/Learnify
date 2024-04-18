import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from './components/Header/StudentNavbar'
import Footer from '../components/Footer/Footer'
import StudentNavbar from './components/Header/StudentNavbar'

function StudentBase() {
    return (
        <>
        <StudentNavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default StudentBase
