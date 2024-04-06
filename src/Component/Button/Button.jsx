import React from 'react'
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import styles from "./Button.module.css"
const Button = (props) => {
    // console.log(props);
    const {isOutline, message, icon, click}= props
  return (
    <button onClick={click} className={isOutline ? styles.outline_btn : styles.primary_btn }>
        
        {icon}
        {message}
    </button>
  )
}

export default Button