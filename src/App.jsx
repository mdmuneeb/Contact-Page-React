import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navigation/Navbar'
import ContactHeader from './Component/ContactHeader/ContactHeader'
import Button from './Component/Button/Button'
import ContactForm from './Component/Contact_Form/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='main_content'>
        <ContactHeader/>
        <ContactForm/>
      </div>
    </>
  )
}

export default App
