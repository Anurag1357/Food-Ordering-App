import { Outlet } from "react-router-dom"
import Header from "./components/header/page"

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
