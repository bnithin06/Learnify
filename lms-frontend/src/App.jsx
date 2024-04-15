
import { Outlet } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

