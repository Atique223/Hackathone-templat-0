import React from "react";
import Styles from "./contact.module.css" 

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className={Styles.container}>
      {/* Left Section */}
      <div className={Styles.leftSection}>
        <div className={Styles.item}>
          <span className={Styles.icon}>📍</span>
          <div>
            <h4 className={Styles.title}>Address</h4>
            <p className={Styles.text}>
              236 5th SE Avenue, New<br />York NY10000, United<br /> States
            </p>
          </div>
        </div>
        <div className={Styles.item}>
          <span className={Styles.icon}>📞</span>
          <div>
            <h4 className={Styles.title}>Phone</h4>
            <p className={Styles.text}>Mobile: +(84) 546-6789</p>
            <p className={Styles.text}>Hotline: +(84) 456-6789</p>
          </div>
        </div>
        <div className={Styles.item}>
          <span className={Styles.icon}>⏰</span>
          <div>
            <h4 className={Styles.title}>Working Time</h4>
            <p className={Styles.text}>Monday-Friday: 9:00 -<br /> 22:00</p>
            <p className={Styles.text}>Saturday-Sunday: 9:00 -<br /> 21:00</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={Styles.rightSection}>
        <form className={Styles.form}>
          <div className={Styles.formGroup}>
            <label htmlFor="name" className={Styles.label}>Your name</label>
            <input type="text" id="name" className={Styles.input} placeholder="Abc" />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="email" className={Styles.label}>Email address</label>
            <input type="email" id="email" className={Styles.input} placeholder="Abc@def.com" />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="subject" className={Styles.label}>Subject</label>
            <input type="text" id="subject" className={Styles.input} placeholder="This is optional" />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="message" className={Styles.label}>Message</label>
            <textarea id="message" className={Styles.textarea} placeholder="Hi! I'd like to ask about"></textarea>
          </div>
          <button type="submit" className={Styles.button}>Submit</button>
        </form>
      </div>
    </div>
     </div>
     </div> 
  );
}
