import { Link, Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

