import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Header/StudentNavbar'

function StudentDashboard() {
    return (
        <>
        <Navbar/>
        <h1>This is student Dashboard</h1>
        <Outlet/>
        </>
    )
}

export default StudentDashboard
