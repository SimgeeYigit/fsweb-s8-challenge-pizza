import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from "./components/page1/Header"
import Navbar from "./components/page1/Navbar"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Navbar />
    </>
  )
}

export default App
