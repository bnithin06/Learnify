import { Link } from "react-router-dom"

export default function App() {
  return (
    <>
    <h1>This is Home Page</h1>
    <Link to={'/login'}>Login</Link>
    </>
  )
}

