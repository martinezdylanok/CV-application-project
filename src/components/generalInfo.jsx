import { React, useState } from "react";
import "../styles/general-info.css";

export default function GeneralInfo() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [formSubmitted, setFormSubmitted] = useState(false);

   function handleSubmit(e) {
      e.preventDefault();
      setFormSubmitted(true);
   }

   function handleEdit(e) {
      e.preventDefault();
      setFormSubmitted(false);
   }

   return (
      <div className="general-info-container">
         <h1 className="general-info-title">General Information</h1>
         {!formSubmitted && (
            <form className="general-info-form" onSubmit={handleSubmit}>
               <div className="name">
                  <input type="text" className="name" id="name" placeholder="NAME" maxLength={35} minLength={1} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
               </div>
               <div className="surname">
                  <input type="text" className="surname" id="surname" placeholder="SURNAME" maxLength={35} minLength={1} value={lastName} onChange={(e) => setLastName(e.target.value)} />
               </div>
               <div className="email">
                  <input type="email" className="email" id="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
               </div>
               <div className="phone-number">
                  <input type="tel" className="phone-number" id="phone-number" placeholder="PHONE NUMBER" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
               </div>
               <button type="submit">SUBMIT</button>
            </form>
         )}

         {formSubmitted && (
            <form className="displayed-info-container" onSubmit={handleEdit}>
               <div className="displayed-info-data">
                  <h2>
                     {firstName} {lastName && ` ${lastName}`}
                  </h2>
                  <p>Email adress: {email}</p>
                  <p>Phone Number: {phoneNumber}</p>
               </div>
               <button type="submit">EDIT</button>
            </form>
         )}
      </div>
   );
}
