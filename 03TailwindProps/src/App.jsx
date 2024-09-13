import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'



function App() {

  let myObj = {
    username : "Suprakash",
    age : 30
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>TailwindCSS test</h1>
   
    <Cards username = "Suprakash" btnText = "Read me "/>
    <Cards username = "Ballav" btnText = "follow me " />
    </>
  )
}

export default App
