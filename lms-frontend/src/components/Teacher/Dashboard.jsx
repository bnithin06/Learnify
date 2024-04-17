import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Dashboard() {
    return (
        <>
        <TeacherNavbar/>
        <Outlet/>
        <h1>This is Teacher Dashboard</h1>
        <Footer/>
        </>
    )
}

export default Dashboard
