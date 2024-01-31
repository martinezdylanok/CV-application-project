import { React, useState } from "react";

export default function PracticalExperience() {
   const [companyName, setCompanyName] = useState("");
   const [positionTitle, setPositionTitle] = useState("");
   const [mainResponsabilities, setMainResponsabilities] = useState("");
   const [dateOfWorking, setDateOfWorking] = useState("");
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
         <h1>Practical Experience</h1>
         {!formSubmitted && (
            <form onSubmit={handleSubmit}>
               <div className="company-name">
                  <h1>Compnay Name</h1>
                  <label htmlFor="company-name" />
                  <input type="text" className="company-name" id="company-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
               </div>
               <div className="position-title">
                  <h1>Position Title</h1>
                  <label htmlFor="position-title" />
                  <input type="text" className="position-title" id="position-title" value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)} />
               </div>
               <div className="main-responsabilities">
                  <h1>Main Responsabilities</h1>
                  <label htmlFor="main-responsabilities" />
                  <input type="text" className="main-responsabilities" id="main-responsabilities" value={mainResponsabilities} onChange={(e) => setMainResponsabilities(e.target.value)} />
               </div>
               <div className="date-of-working">
                  <h1>Date of working</h1>
                  <label htmlFor="date-of-working" />
                  <input type="text" className="date-of-working" id="date-of-working" value={dateOfWorking} onChange={(e) => setDateOfWorking(e.target.value)} />
               </div>
               <button type="submit">Submit</button>
            </form>
         )}

         {formSubmitted && (
            <form className="displayed-info" onSubmit={handleEdit}>
               <h2>{companyName}</h2>
               <p>Position title: {positionTitle}</p>
               <p>Main responsabilities: {mainResponsabilities}</p>
               <p>Date of working: {dateOfWorking}</p>
               <button type="submit">Edit</button>
            </form>
         )}
      </>
   );
}
