import React, { useEffect, useState } from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { BsDisplay } from 'react-icons/bs';

const ContactForm = () => {

  const [data,setData] = useState({});

  let onViaCallSubmit = () =>
  {
    console.log("I am via call submit");
  }

  let onSubmit = (event) =>
   {
    event.preventDefault();
    setData({
      name : event.target[0].value,
      email : event.target[1].value,
      text : event.target[2].value
    })
   }

   useEffect(() =>
  {
    console.log(data);
  }, [data])


  return (
    <section className={styles.container }>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button message="VIA SUPPORT CHAT" icon={<BiSolidMessageSquareDetail fontSize='20px'/>}/>
                <Button click={onViaCallSubmit} message="VIA CALL" icon={<MdOutlineWifiCalling3 fontSize='20px'/>}/>
            </div>
            <div>
              <Button isOutline={true}   message="VIA EMAIL FORM" icon={<BiMessageDots fontSize={'20px'}/>}/>
            </div>
            <form  onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'/>
              </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea name="text" id=""  cols="30" rows="10"></textarea>
          </div>
          <div style={{display:'flex', justifyContent:'end', marginBottom:'10px'}}>
            <Button message="Submit"/>
          </div>
        </form>

        </div>
        <div>
            
        </div>
        <div className={styles.contact_image}>
          <img src="../images/image_2.jpg" alt="contact image" />
        </div>
        <div className={styles.dataShow}>
        {(data.name && data.email && data.text) ? `Name :  ${data.name} Email :  ${data.email}  Text: ${data.text}` : ""}
        </div>
    </section>
    
  )
}

export default ContactForm