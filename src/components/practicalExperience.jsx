import { React, useState, useEffect } from "react";
import "../styles/practical-experience.css";

export default function PracticalExperience() {
   const [companyName, setCompanyName] = useState("");
   const [positionTitle, setPositionTitle] = useState("");
   const [mainResponsabilities, setMainResponsabilities] = useState("");
   const [dateOfWorking, setDateOfWorking] = useState("");
   const [formSubmitted, setFormSubmitted] = useState(false);
   const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

   useEffect(() => {
      const isCompleted = companyName && positionTitle && mainResponsabilities && dateOfWorking;
      setAllFieldsCompleted(isCompleted);
   }, [companyName, positionTitle, mainResponsabilities, dateOfWorking]);

   function handleSubmit(e) {
      e.preventDefault();
      if (!allFieldsCompleted) {
         console.log("Please fill out all fields.");
      }
      setFormSubmitted(true);
   }

   function handleEdit(e) {
      e.preventDefault();
      setFormSubmitted(false);
   }

   return (
      <div className="practical-info-container">
         <h1 className="practical-info-title">Practical Experience</h1>
         {!formSubmitted && (
            <form className="practical-info-form" onSubmit={handleSubmit}>
               <div className="company-name">
                  <input type="text" className="company-name" id="company-name" placeholder="COMPANY NAME" maxLength={35} required value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
               </div>
               <div className="position-title">
                  <input type="text" className="position-title" id="position-title" placeholder="POSITION" maxLength={35} required value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)} />
               </div>
               <div className="main-responsabilities">
                  <input type="text" className="main-responsabilities" id="main-responsabilities" placeholder="RESPONSABILITIES" maxLength={35} required value={mainResponsabilities} onChange={(e) => setMainResponsabilities(e.target.value)} />
               </div>
               <div className="date-of-working">
                  <input type="date" className="date-of-working" id="date-of-working" placeholder="DATE" maxLength={35} required value={dateOfWorking} onChange={(e) => setDateOfWorking(e.target.value)} />
               </div>
               <button type="submit" style={{ cursor: allFieldsCompleted ? "pointer" : "not-allowed" }}>
                  SUBMIT
               </button>
            </form>
         )}

         {formSubmitted && (
            <form className="displayed-info-container" onSubmit={handleEdit}>
               <div className="displayed-data">
                  <h2>{companyName}</h2>
                  <p>Position title: {positionTitle}</p>
                  <p>Main responsabilities: {mainResponsabilities}</p>
                  <p>Date of working: {dateOfWorking}</p>
               </div>
               <button type="submit">EDIT</button>
            </form>
         )}
      </div>
   );
}
