import React from 'react'
// import "../App.css"
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    
        <nav className={`${styles.navigation} container`}>
            <div>
                <img src="../images/image_1.png" alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
    
  )
}

export default Navbar