import { React, useState } from "react";

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
      <>
         <h1>General Information</h1>
         {!formSubmitted && (
            <form onSubmit={handleSubmit}>
               <div className="name">
                  <h1>Name</h1>
                  <label htmlFor="name" />
                  <input type="text" className="name" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
               </div>
               <div className="surname">
                  <h1>Surname</h1>
                  <label htmlFor="surname" />
                  <input type="text" className="surname" id="surname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
               </div>
               <div className="email">
                  <h1>Email</h1>
                  <label htmlFor="email" />
                  <input type="text" className="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
               </div>
               <div className="phone-number">
                  <h1>Phone Number</h1>
                  <label htmlFor="phone-number" />
                  <input type="text" className="phone-number" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
               </div>
               <button type="submit">Submit</button>
            </form>
         )}

         {formSubmitted && (
            <form className="displayed-info" onSubmit={handleEdit}>
               <h2>
                  {firstName} {lastName && ` ${lastName}`}
               </h2>
               <p>Email adress: {email}</p>
               <p>Phone Number: {phoneNumber}</p>
               <button type="submit">Edit</button>
            </form>
         )}
      </>
   );
}
