import React from 'react'
import TeacherNavbar from './components/Header/TeacherNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function TeacherBase() {
    return (
        <>
        <TeacherNavbar/>
        <Outlet/>
        <Footer/>
        </>  
    )
}

export default TeacherBase
